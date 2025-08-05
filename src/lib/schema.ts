import { pgTable, serial, text, real, integer } from 'drizzle-orm/pg-core';

export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  image: text('image').notNull(),
  dataAiHint: text('data_ai_hint'),
  rating: real('rating'),
  reviews: integer('reviews'),
});

export const teachers = pgTable('teachers', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  title: text('title').notNull(),
  image: text('image').notNull(),
  dataAiHint: text('data_ai_hint'),
});

export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  text: text('text').notNull(),
  image: text('image').notNull(),
  dataAiHint: text('data_ai_hint'),
});

export const learningFeatures = pgTable('learning_features', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description').notNull(),
});

export const upcomingSessions = pgTable('upcoming_sessions', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    date: text('date').notNull(),
    time: text('time').notNull(),
});

export const paymentDue = pgTable('payment_due', {
    id: serial('id').primaryKey(),
    amount: real('amount').notNull(),
    dueDate: text('due_date').notNull(),
    course: text('course').notNull(),
});

export const recentAssignments = pgTable('recent_assignments', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    status: text('status').notNull(),
    statusColor: text('status_color').notNull(),
});

export const assignments = pgTable('assignments', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    course: text('course').notNull(),
    dueDate: text('due_date').notNull(),
    status: text('status').notNull(),
    grade: text('grade'),
});

export const recentSubmissions = pgTable('recent_submissions', {
    id: serial('id').primaryKey(),
    student: text('student').notNull(),
    assignment: text('assignment').notNull(),
    course: text('course').notNull(),
});

export const upcomingClasses = pgTable('upcoming_classes', {
    id: serial('id').primaryKey(),
    topic: text('topic').notNull(),
    course: text('course').notNull(),
    time: text('time').notNull(),
});

export const teacherApplications = pgTable('teacher_applications', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    status: text('status').notNull(),
});

export const studentProgress = pgTable('student_progress', {
    id: serial('id').primaryKey(),
    month: text('month').notNull(),
    progress: integer('progress').notNull(),
});

export const financialOverview = pgTable('financial_overview', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    value: integer('value').notNull(),
});

export const enrollments = pgTable('enrollments', {
    id: serial('id').primaryKey(),
    student: text('student').notNull(),
    course: text('course').notNull(),
    status: text('status').notNull(),
    payment: text('payment').notNull(),
});

export const certificates = pgTable('certificates', {
  id: serial('id').primaryKey(),
  student: text('student').notNull(),
  course: text('course').notNull(),
  status: text('status').notNull(),
  date: text('date').notNull(),
});

export const notifications = pgTable('notifications', {
  id: serial('id').primaryKey(),
  recipient: text('recipient').notNull(),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
});

export const payments = pgTable('payments', {
  id: serial('id').primaryKey(),
  student: text('student').notNull(),
  course: text('course').notNull(),
  amount: real('amount').notNull(),
  status: text('status').notNull(),
  method: text('method').notNull(),
  date: text('date').notNull(),
});

export const reports = pgTable('reports', {
  id: serial('id').primaryKey(),
  month: text('month').notNull(),
  revenue: real('revenue').notNull(),
  expenses: real('expenses').notNull(),
  enrollments: integer('enrollments').notNull(),
});

export const settings = pgTable('settings', {
  id: serial('id').primaryKey(),
  orangeMoneyApiKey: text('orange_money_api_key'),
  mtnMoMoApiKey: text('mtn_momo_api_key'),
  stripeSecretKey: text('stripe_secret_key'),
  zoomApiKey: text('zoom_api_key'),
});

export const students = pgTable('students', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  courses: integer('courses').notNull(),
  status: text('status').notNull(),
  joined: text('joined').notNull(),
});
