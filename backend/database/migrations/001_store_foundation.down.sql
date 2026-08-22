BEGIN;

DROP TABLE IF EXISTS analytics_events;
DROP TABLE IF EXISTS stripe_events;
DROP TABLE IF EXISTS inventory_movements;
DROP TABLE IF EXISTS inventory_reservations;
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS product_variants;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS artworks;
DROP FUNCTION IF EXISTS set_updated_at();
DROP TYPE IF EXISTS reservation_status;
DROP TYPE IF EXISTS order_status;
DROP TYPE IF EXISTS product_status;
DROP TYPE IF EXISTS product_type;
DROP TYPE IF EXISTS artwork_status;

COMMIT;
