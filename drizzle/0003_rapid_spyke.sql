CREATE TABLE "enrollments" (
	"id" serial PRIMARY KEY NOT NULL,
	"student" text NOT NULL,
	"course" text NOT NULL,
	"status" text NOT NULL,
	"payment" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "financial_overview" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"value" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "student_progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"month" text NOT NULL,
	"progress" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "teacher_applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"status" text NOT NULL
);
