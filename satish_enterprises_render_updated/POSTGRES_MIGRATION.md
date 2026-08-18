# PostgreSQL production migration

This build replaces SQLite with PostgreSQL using the `pg` driver.

DigitalOcean Managed PostgreSQL is the selected production database. DigitalOcean recommends placing the database in the same region as the Droplet for performance, and its managed database service provides backups/PITR, TLS and VPC networking. citeturn0search0turn0search8

## DigitalOcean setup

1. Create a Droplet for the API.
2. Create a Managed PostgreSQL cluster in the same region.
3. Add the Droplet as a trusted source for the database.
4. Copy the PostgreSQL connection string into `DATABASE_URL`.
5. Keep `sslmode=require` / TLS enabled.
6. Run the API container.

DigitalOcean documents restricting trusted sources and TLS verification for managed PostgreSQL. citeturn0search17

## Cloudflare

Use Cloudflare DNS for the domain and point the API/frontend records to the deployment. Cloudflare provides DNS and Universal SSL; enable HTTPS and use Full (strict) when the origin has a valid certificate. citeturn0search2turn0search1turn0search18

## Important

The package includes schema creation on startup for this initial deployment. For a larger production system, add versioned migrations (e.g. node-pg-migrate/Knex/Prisma) and CI/CD migrations before frequent schema changes.
