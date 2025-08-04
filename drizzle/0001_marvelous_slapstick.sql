CREATE TABLE "assignments" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"course" text NOT NULL,
	"due_date" text NOT NULL,
	"status" text NOT NULL,
	"grade" text
);
