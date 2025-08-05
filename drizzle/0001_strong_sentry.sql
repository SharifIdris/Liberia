CREATE TABLE "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"recipient" text NOT NULL,
	"subject" text NOT NULL,
	"message" text NOT NULL
);
