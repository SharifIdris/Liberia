CREATE TABLE "recent_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"student" text NOT NULL,
	"assignment" text NOT NULL,
	"course" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "upcoming_classes" (
	"id" serial PRIMARY KEY NOT NULL,
	"topic" text NOT NULL,
	"course" text NOT NULL,
	"time" text NOT NULL
);
