CREATE TABLE "assignments" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"course" text NOT NULL,
	"due_date" text NOT NULL,
	"status" text NOT NULL,
	"grade" text
);
--> statement-breakpoint
CREATE TABLE "certificates" (
	"id" serial PRIMARY KEY NOT NULL,
	"student" text NOT NULL,
	"course" text NOT NULL,
	"status" text NOT NULL,
	"date" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"data_ai_hint" text,
	"rating" real,
	"reviews" integer
);
--> statement-breakpoint
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
CREATE TABLE "learning_features" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payment_due" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" real NOT NULL,
	"due_date" text NOT NULL,
	"course" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "recent_assignments" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"status" text NOT NULL,
	"status_color" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "recent_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"student" text NOT NULL,
	"assignment" text NOT NULL,
	"course" text NOT NULL
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
--> statement-breakpoint
CREATE TABLE "teachers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"data_ai_hint" text
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"text" text NOT NULL,
	"image" text NOT NULL,
	"data_ai_hint" text
);
--> statement-breakpoint
CREATE TABLE "upcoming_classes" (
	"id" serial PRIMARY KEY NOT NULL,
	"topic" text NOT NULL,
	"course" text NOT NULL,
	"time" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "upcoming_sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"date" text NOT NULL,
	"time" text NOT NULL
);
