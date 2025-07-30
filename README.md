# 🎓 Custom Online School Platform (Liberia-Based)

A full-featured Learning Management System (LMS) designed to support certificate and diploma programs for adult learners in Liberia. The platform supports local payments (MTN MoMo, Orange Money), installment plans, live and recorded classes, assignment submission, and certificates. Built with Supabase, React, TypeScript, and Next.js.

---

## 📌 Key Features

### 👩‍🎓 Student Features
- Register and enroll in courses (full or installment payment)
- Dashboard access after payment confirmation
- Payment reminders and access lockout if overdue
- Join live Zoom or Jitsi classes
- Access session recordings anytime
- Submit assignments, view grades, download certificates
- View teacher profiles and course details
- Class chat via built-in module or Telegram/Slack

### 👨‍🏫 Teacher Features
- Upload or record video content
- Attach lesson notes (PDF or text)
- Schedule and run live classes
- Grade submitted assignments
- Track attendance and student submissions
- Manage course content (excluding pricing)
- Update bio, profile picture, and credentials

### 👨‍💼 Admin Features
- Create and manage courses
- Approve teacher accounts
- Set prices and payment structures (full/installments)
- Monitor student activity, payments, submissions
- Issue or override certificates
- View reports (enrollments, payments, engagement)
- Configure automated notifications (email/SMS/in-app)

---

## 💳 Payment System

- **Gateways Supported**:
  - Orange Money Liberia
  - Lonestar Cell MTN MoMo
  - Stripe, Flutterwave, DPO for cards

- **Installment Support**:
  - Admin defines plans (e.g. 2x, 3x)
  - System sends auto-reminders before each due date
  - Course access is locked if payment is overdue
  - Access auto-restores upon payment

---

## 🎥 Live & Recorded Learning

- Live sessions via **Zoom** or **Jitsi**
- Sessions are automatically recorded
- Recordings available to all enrolled students
- Playback secured inside student dashboard

---

## 🔔 Notifications

- In-app + optional email/SMS notifications for:
  - Payment deadlines
  - Upcoming live classes
  - Assignment deadlines
  - Lockout warnings if overdue

---

## 🧑‍💻 Tech Stack

| Layer            | Technology                            |
|------------------|----------------------------------------|
| Frontend         | React + TypeScript + Tailwind CSS      |
| Backend          | Next.js (API Routes)                   |
| Authentication   | Supabase Auth                          |
| Database         | Supabase PostgreSQL                    |
| File Storage     | Supabase Storage                       |
| Payments         | Orange API, MTN MoMo API, Stripe, Flutterwave |
| Video Streaming  | Zoom SDK / Jitsi / WebRTC              |
| Notifications    | Supabase Edge Functions + Email API    |
| Hosting          | Vercel (Frontend/API), Supabase (DB/Storage) |

---

## 📁 Project Structure

Liberia/
├── public/                     # Public assets (images, icons, recordings)
│
├── src/
│   ├── components/             # Reusable UI components (Navbar, Sidebar, CourseCard, etc.)
│   ├── layouts/                # Shared layouts (Dashboard layout, Auth layout)
│   ├── pages/                  # Next.js routes
│   │   ├── index.tsx           # Landing page
│   │   ├── dashboard/          # Role-based dashboards (student, teacher, admin)
│   │   ├── courses/            # Course listing & details
│   │   ├── auth/               # Auth pages (login, register)
│   │   └── api/                # API routes (Next.js backend logic)
│   │       ├── courses.ts      # CRUD for courses
│   │       ├── payments.ts     # Payment webhook or API integration
│   │       ├── users.ts        # User profile actions
│   │       └── auth.ts         # Supabase auth logic
│   ├── lib/                    # Supabase client, API helpers, utilities
│   │   ├── supabaseClient.ts   # Initialize Supabase client
│   │   ├── api.ts              # Fetch/post helpers
│   │   └── auth.ts             # Auth helpers
│   ├── hooks/                  # Custom React hooks (e.g., useUser, usePaymentStatus)
│   ├── context/                # Global context providers (auth, user, notifications)
│   ├── types/                  # Global TypeScript type definitions
│   ├── styles/                 # Tailwind CSS and global styles
│   │   └── globals.css
│   └── constants/              # Static config (e.g., roles, plan settings, reminder intervals)
│
├── .env.local                  # Your environment variables (Supabase keys, API secrets)
├── .gitignore
├── README.md
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript config
├── package.json                # Project dependencies and scripts
🚀 Phased Launch Plan
Phase 1: MVP
Student registration & payments

Admin-created courses

Local payment support (MTN/Orange)

Live classes (Zoom/Jitsi)

Phase 2: Core LMS
Installment logic & access control

Assignment grading & certificates

Student and teacher dashboards

Phase 3: Enhanced UX
Notifications, chat, progress tracking

Certificate designer + print module

Full analytics & exportable reports

👥 User Roles
Student: Pays, learns, submits assignments, downloads certificates

Teacher: Uploads/records lessons, grades, interacts with students

Admin: Manages system, creates courses, configures payment/installments, oversees reports

📞 Contact
Project Owner: Sharif Abubakar Angole
📧 Email: sharifidris8@gmail.com
📱 Phone: +256765721427
🌍 Location:  Uganda
