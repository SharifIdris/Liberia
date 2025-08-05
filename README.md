# Liberia Learn Backend

This document provides an overview of the backend implementation for the Liberia Learn application.

## Backend Structure

The backend is built using Next.js API routes and is located in the `src/app/api` directory. The structure is as follows:

- `src/app/api/admin`: Routes for admin-specific functionality.
- `src/app/api/assignments`: Routes for managing assignments.
- `src/app/api/courses`: Routes for managing courses.
- `src/app/api/payments`: Routes for managing payments.
- `src/app/api/sessions`: Routes for managing sessions.
- `src/app/api/teacher`: Routes for teacher-specific functionality.
- `src/app/api/zoom`: Routes for Zoom integration.

## Database

The application uses a PostgreSQL database with Drizzle ORM. The database configuration, schema, and utility scripts are located in the `src/lib` directory.

- `drizzle.config.ts`: Drizzle ORM configuration.
- `src/lib/schema.ts`: Database schema definition.
- `src/lib/db.ts`: Database connection setup.
- `src/lib/seed.ts`: Script for seeding the database with initial data.
- `src/lib/reset-db.ts`: Script for resetting the database.
- `src/lib/test-db.ts`: Script for testing the database connection.

## Database Connection Issue

When running the `src/lib/test-db.ts` script, the following error occurs:

`ECONNREFUSED: Connection refused`

This error indicates that the application cannot connect to the database server specified in the `.env` file:

`DATABASE_URL="postgresql://postgres.fftbtualrhyulgfpqtfa:H%2Eu%2Em%2Eb%2El%2Ee%2E254@aws-0-eu-north-1.pooler.supabase.com:6543/postgres"`

This is likely because the Supabase project is paused or there is a network issue.

### How to Fix

1.  **Check Supabase Project Status**: Ensure that the Supabase project is running and not paused.
2.  **Verify Database Credentials**: Double-check that the `DATABASE_URL` in the `.env` file is correct.
3.  **Check Network Configuration**: Make sure there are no firewall rules or network issues preventing the connection to the Supabase server.

Once the database connection is resolved, you can test it by running:

```bash
npx tsx src/lib/test-db.ts
