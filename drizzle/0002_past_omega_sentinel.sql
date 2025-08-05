CREATE TABLE "payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"student" text NOT NULL,
	"course" text NOT NULL,
	"amount" real NOT NULL,
	"status" text NOT NULL,
	"method" text NOT NULL,
	"date" text NOT NULL
);
