CREATE TABLE "courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"data_ai_hint" text,
	"rating" real,
	"reviews" integer
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
CREATE TABLE "upcoming_sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"date" text NOT NULL,
	"time" text NOT NULL
);
