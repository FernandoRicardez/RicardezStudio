# Store database

The store uses PostgreSQL. SQL migrations are applied in filename order from
`database/migrations` and must be applied once per environment.

## Local setup

1. Create an empty PostgreSQL database.
2. Copy `.env.example` to `.env` and set `DATABASE_URL`.
3. Run `npm run db:migrate` from `backend`.
4. Run `npm run db:seed` to import the nine artworks currently on the site.

Example:

```sh
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 --single-transaction \
  -f database/migrations/001_store_foundation.sql
```

The `.down.sql` file is for development rollback only. Production migrations
should normally be corrected with a new forward migration so order and stock
history is not destroyed.

The migration runner records successful files in `schema_migrations`. Never
rename or edit a migration after it has been applied outside local development;
create a new numbered migration instead.

The artwork seed is repeatable: it updates records by slug without replacing
their UUID or changing their store status. Initial records are `hidden` so an
artwork cannot accidentally appear for sale before its price and stock are set.

## Server deployment

The server needs PostgreSQL 13 or newer and a database/user created for the
application. Put the production connection string in `backend/.env`; do not
commit that file.

After deploying a revision that contains a new migration, run from `backend`:

```sh
npm ci
npm run build
npm run db:migrate:prod
npm run db:seed:prod
```

Then restart the backend using the process manager already used by the server.
The seed command only needs to run for this initial import, but it is safe to run
again. Migrations should run on every deployment and automatically skip files
that were already applied.

## Modeling decisions

- Money is stored as integer minor units. `125000` with `MXN` means
  MXN 1,250.00.
- `artworks` stores artwork facts; `products` and `product_variants` store what
  can be purchased.
- An original is a product with one variant and stock of one.
- A print can have variants for framing or another fulfillment option.
- Apparel can use variants such as `{"size":"M","color":"black"}` without an
  artwork relationship.
- Customer and product snapshots on orders preserve sales history if the
  catalog later changes.
- Inventory changes should be performed in a database transaction and recorded
  in `inventory_movements`.
- Do not store card data or Stripe webhook payloads in this database.
