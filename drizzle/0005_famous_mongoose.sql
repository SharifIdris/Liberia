CREATE TABLE "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"courses" integer NOT NULL,
	"status" text NOT NULL,
	"joined" text NOT NULL
);
