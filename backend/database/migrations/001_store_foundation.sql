CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE artwork_status AS ENUM ('available', 'reserved', 'sold', 'hidden');
CREATE TYPE product_type AS ENUM ('original', 'print', 'apparel', 'other');
CREATE TYPE product_status AS ENUM ('draft', 'active', 'hidden', 'archived');
CREATE TYPE order_status AS ENUM (
  'pending',
  'paid',
  'packing',
  'shipped',
  'delivered',
  'cancelled',
  'refunded'
);
CREATE TYPE reservation_status AS ENUM ('active', 'converted', 'released', 'expired');

CREATE TABLE artworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title_en text NOT NULL,
  title_es text NOT NULL,
  year integer NOT NULL CHECK (year BETWEEN 1000 AND 9999),
  width_cm numeric(8, 2) NOT NULL CHECK (width_cm > 0),
  height_cm numeric(8, 2) NOT NULL CHECK (height_cm > 0),
  depth_cm numeric(8, 2) CHECK (depth_cm IS NULL OR depth_cm > 0),
  medium_en text,
  medium_es text,
  description_en text,
  description_es text,
  exhibition_en text,
  exhibition_es text,
  image_url text,
  status artwork_status NOT NULL DEFAULT 'hidden',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- A product is something shown in the store. It can represent an original,
-- a print of an artwork, apparel, or a future product without changing artworks.
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artwork_id uuid REFERENCES artworks(id) ON DELETE SET NULL,
  slug text NOT NULL UNIQUE,
  product_type product_type NOT NULL,
  name_en text NOT NULL,
  name_es text NOT NULL,
  description_en text,
  description_es text,
  status product_status NOT NULL DEFAULT 'draft',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Examples of option_values:
-- {"frame":"unframed"}, {"frame":"black"}, or {"size":"M","color":"black"}.
-- Framed/unframed products should be separate variants with their own price/SKU.
CREATE TABLE product_variants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  sku text NOT NULL UNIQUE,
  name_en text,
  name_es text,
  option_values jsonb NOT NULL DEFAULT '{}'::jsonb,
  edition_size integer CHECK (edition_size IS NULL OR edition_size > 0),
  price_amount bigint NOT NULL CHECK (price_amount >= 0),
  currency char(3) NOT NULL CHECK (currency = upper(currency)),
  quantity_total integer NOT NULL CHECK (quantity_total >= 0),
  quantity_available integer NOT NULL CHECK (
    quantity_available >= 0 AND quantity_available <= quantity_total
  ),
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number bigint GENERATED ALWAYS AS IDENTITY UNIQUE,
  stripe_checkout_session_id text UNIQUE,
  stripe_payment_intent_id text UNIQUE,
  customer_email text NOT NULL,
  customer_name text,
  customer_phone text,
  shipping_line1 text,
  shipping_line2 text,
  shipping_city text,
  shipping_state text,
  shipping_postal_code text,
  shipping_country char(2),
  status order_status NOT NULL DEFAULT 'pending',
  currency char(3) NOT NULL CHECK (currency = upper(currency)),
  subtotal_amount bigint NOT NULL CHECK (subtotal_amount >= 0),
  shipping_amount bigint NOT NULL DEFAULT 0 CHECK (shipping_amount >= 0),
  tax_amount bigint NOT NULL DEFAULT 0 CHECK (tax_amount >= 0),
  total_amount bigint NOT NULL CHECK (total_amount >= 0),
  paid_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (total_amount = subtotal_amount + shipping_amount + tax_amount)
);

-- Names, SKU, and prices are snapshots so old orders remain accurate after
-- catalog edits. artwork_id is nullable so apparel can use the same table.
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  artwork_id uuid REFERENCES artworks(id) ON DELETE SET NULL,
  variant_id uuid NOT NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
  product_name text NOT NULL,
  variant_name text,
  sku text NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  unit_price_amount bigint NOT NULL CHECK (unit_price_amount >= 0),
  currency char(3) NOT NULL CHECK (currency = upper(currency)),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (order_id, variant_id)
);

-- A checkout reserves inventory until its Stripe session expires or completes.
CREATE TABLE inventory_reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id uuid NOT NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  status reservation_status NOT NULL DEFAULT 'active',
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (order_id, variant_id)
);

-- Append-only stock history for manual changes, reservations, sales and refunds.
CREATE TABLE inventory_movements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id uuid NOT NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
  order_id uuid REFERENCES orders(id) ON DELETE SET NULL,
  reservation_id uuid REFERENCES inventory_reservations(id) ON DELETE SET NULL,
  quantity_delta integer NOT NULL CHECK (quantity_delta <> 0),
  reason text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Stripe can deliver the same webhook more than once. This unique ID makes
-- processing idempotent and stores a small audit record without payment secrets.
CREATE TABLE stripe_events (
  id text PRIMARY KEY,
  event_type text NOT NULL,
  processing_error text,
  processed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artwork_id uuid REFERENCES artworks(id) ON DELETE SET NULL,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  variant_id uuid REFERENCES product_variants(id) ON DELETE SET NULL,
  event_type text NOT NULL CHECK (event_type IN (
    'artwork_view',
    'product_view',
    'add_to_cart',
    'remove_from_cart',
    'begin_checkout',
    'checkout_expired',
    'purchase'
  )),
  session_id uuid NOT NULL,
  referrer text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX products_artwork_id_idx ON products (artwork_id);
CREATE INDEX products_status_type_idx ON products (status, product_type);
CREATE INDEX product_variants_product_id_idx ON product_variants (product_id);
CREATE INDEX orders_status_created_at_idx ON orders (status, created_at DESC);
CREATE INDEX inventory_reservations_active_expiry_idx
  ON inventory_reservations (expires_at)
  WHERE status = 'active';
CREATE INDEX inventory_movements_variant_created_idx
  ON inventory_movements (variant_id, created_at DESC);
CREATE INDEX analytics_events_artwork_created_idx
  ON analytics_events (artwork_id, created_at DESC);
CREATE INDEX analytics_events_product_created_idx
  ON analytics_events (product_id, created_at DESC);
CREATE INDEX analytics_events_type_created_idx
  ON analytics_events (event_type, created_at DESC);
CREATE INDEX analytics_events_session_created_idx
  ON analytics_events (session_id, created_at DESC);

CREATE FUNCTION set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER artworks_set_updated_at
BEFORE UPDATE ON artworks
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER products_set_updated_at
BEFORE UPDATE ON products
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER product_variants_set_updated_at
BEFORE UPDATE ON product_variants
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER orders_set_updated_at
BEFORE UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER inventory_reservations_set_updated_at
BEFORE UPDATE ON inventory_reservations
FOR EACH ROW EXECUTE FUNCTION set_updated_at();
