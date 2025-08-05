CREATE TABLE "reports" (
	"id" serial PRIMARY KEY NOT NULL,
	"month" text NOT NULL,
	"revenue" real NOT NULL,
	"expenses" real NOT NULL,
	"enrollments" integer NOT NULL
);
