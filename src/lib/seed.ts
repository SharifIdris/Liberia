import { db } from './db';
import * as schema from './schema';
import { courses, teachers, testimonials, learningFeatures, upcomingSessions, paymentDue, recentAssignments, assignments, recentSubmissions, upcomingClasses, teacherApplications, studentProgress, financialOverview, enrollments, certificates, payments, reports, students } from './schema';
import * as dotenv from 'dotenv';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

dotenv.config();

async function main() {
    console.log('Running migrations...');
    // @ts-ignore
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations completed.');

    console.log('Seeding data...');
    await db.insert(courses).values([
        {
            id: 1,
            title: 'Diploma in Digital Marketing',
            image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=300&h=200&fit=crop',
            dataAiHint: 'digital marketing',
            rating: 4.8,
            reviews: 120,
        },
        {
            id: 2,
            title: 'Certificate in Project Management',
            image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=300&h=200&fit=crop',
            dataAiHint: 'project management',
            rating: 4.9,
            reviews: 250,
        },
        {
            id: 3,
            title: 'Professional Graphic Design',
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=300&h=200&fit=crop',
            dataAiHint: 'graphic design',
            rating: 4.7,
            reviews: 95,
        },
        {
            id: 4,
            title: 'Web Development Bootcamp',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=300&h=200&fit=crop',
            dataAiHint: 'web development',
            rating: 4.9,
            reviews: 450,
        },
        {
            id: 5,
            title: 'Introduction to Data Science',
            image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=300&h=200&fit=crop',
            dataAiHint: 'data science',
            rating: 4.8,
            reviews: 310,
        },
    ]);

    await db.insert(teachers).values([
        {
            id: 1,
            name: 'Professor James Wilson',
            title: 'Mathematics Department',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&h=150&fit=crop&crop=faces',
            dataAiHint: 'male teacher',
        },
        {
            id: 2,
            name: 'Dr. Mary Johnson',
            title: 'Science Department',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop&crop=faces',
            dataAiHint: 'female teacher',
        },
        {
            id: 3,
            name: 'Mr. Robert Taylor',
            title: 'Technology Department',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=faces',
            dataAiHint: 'male teacher smiling',
        },
    ]);

    await db.insert(testimonials).values([
        {
            id: 1,
            name: 'Grace Williams',
            text: "The interactive lessons and dedicated teachers at Liberia Learn helped me excel in my final exams. I couldn't have done it without them!",
            image: 'https://images.unsplash.com/photo-1521252659862-dECbe784c62f?q=80&w=150&h=150&fit=crop&crop=faces',
            dataAiHint: 'female student',
        },
        {
            id: 2,
            name: 'Michael Brown',
            text: 'Being able to learn at my own pace was a game-changer. The platform is easy to use, even with my slow internet connection.',
            image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=150&h=150&fit=crop&crop=faces',
            dataAiHint: 'male student',
        },
        {
            id: 3,
            name: 'Sarah Cooper',
            text: 'I love the community aspect. I connected with other students, and we formed study groups that were incredibly helpful.',
            image: 'https://images.unsplash.com/photo-1596245305333-2a44c59b35b4?q=80&w=150&h=150&fit=crop&crop=faces',
            dataAiHint: 'female student smiling',
        },
    ]);

    await db.insert(learningFeatures).values([
        { id: 1, title: 'Learn at Your Pace', description: 'Access course materials 24/7 and learn on your own schedule.'},
        { id: 2, title: 'Practice & Assessment', description: 'Reinforce learning with quizzes, assignments, and practical projects.'},
        { id: 3, title: 'Certification on Completion', description: 'Earn a certificate to showcase your new skills to employers.'}
    ]);

    await db.insert(upcomingSessions).values([
        { id: 1, title: 'Data Visualization Live Q&A', date: 'April 25, 2024', time: '10:00 AM' },
        { id: 2, title: 'Machine Learning Workshop', date: 'April 28, 2024', time: '2:00 PM' },
    ]);

    await db.insert(paymentDue).values([
        { id: 1, amount: 150.00, dueDate: 'May 1, 2024', course: 'Intro to ML' },
    ]);

    await db.insert(recentAssignments).values([
        { id: 1, title: 'Project Proposal', status: 'Graded: A', statusColor: 'text-green-600' },
        { id: 2, title: 'Data Analysis Report', status: 'Pending', statusColor: 'text-muted-foreground' },
    ]);

    await db.insert(assignments).values([
        { id: 1, title: 'Project Proposal', course: 'Intro to Machine Learning', dueDate: '2024-05-01', status: 'Submitted', grade: 'A' },
        { id: 2, title: 'Data Analysis Report', course: 'Data Visualization', dueDate: '2024-05-10', status: 'Pending', grade: '-' },
        { id: 3, title: 'Final Project', course: 'Intro to Machine Learning', dueDate: '2024-06-01', status: 'Pending', grade: '-' },
    ]);

    await db.insert(recentSubmissions).values([
        { id: 1, student: 'John Doe', assignment: 'Project Proposal', course: 'Machine Learning A-Z'},
        { id: 2, student: 'Jane Smith', assignment: 'Final Component Library', course: 'Advanced React & GraphQL' },
        { id: 3, student: 'Peter Jones', assignment: 'Project Proposal', course: 'Machine Learning A-Z' },
    ]);

    await db.insert(upcomingClasses).values([
        { id: 1, topic: 'Live Q&A: ML Basics', course: 'Machine Learning A-Z', time: '2:00 PM'},
        { id: 2, topic: 'Workshop: State Management', course: 'Advanced React & GraphQL', time: '4:00 PM' },
    ]);

    await db.insert(teacherApplications).values([
        { id: 1, name: 'Alex Johnson', email: 'alex.johnson@example.com', status: 'Approved' },
        { id: 2, name: 'Sarah Williams', email: 'sarah.williams@example.com', status: 'Approved' },
        { id: 3, name: 'Mark Davis', email: 'mark.davis@example.com', status: 'Pending' },
        { id: 4, name: 'Jennifer Lee', email: 'jennifer.lee@example.com', status: 'Pending' },
    ]);

    await db.insert(studentProgress).values([
        { id: 1, month: 'Jan', progress: 45 },
        { id: 2, month: 'Feb', progress: 50 },
        { id: 3, month: 'Mar', progress: 70 },
        { id: 4, month: 'Apr', progress: 48 },
        { id: 5, month: 'May', progress: 51 },
        { id: 6, month: 'Jun', progress: 55 },
        { id: 7, month: 'Jul', progress: 42 },
    ]);

    await db.insert(financialOverview).values([
        { id: 1, name: 'Installments', value: 400 },
        { id: 2, name: 'Full', value: 600 },
    ]);

    await db.insert(enrollments).values([
        { id: 1, student: 'Emma Wilson', course: 'Machine Learning A...', status: 'In Progress', payment: 'Full Payment' },
        { id: 2, student: 'Liam Brown', course: 'React for Beginners', status: 'Completed', payment: 'Full Payment' },
        { id: 3, student: 'Olivia Taylor', course: 'Data Science with R', status: 'Payment Failed', payment: 'Installments' },
        { id: 4, student: 'Noah Miller', course: 'Advanced CSS Techniques', status: 'In Progress', payment: 'Full Payment' },
    ]);

    await db.insert(certificates).values([
        { id: 1, student: "Liam Brown", course: "React for Beginners", status: "Issued", date: "2024-02-20" },
        { id: 2, student: "Sophia Garcia", course: "UX/UI Design", status: "Issued", date: "2023-12-01" },
        { id: 3, student: "Emma Wilson", course: "Machine Learning", status: "Pending Completion", date: "-" },
    ]);

    await db.insert(payments).values([
        { id: 1, student: "Emma Wilson", course: "Machine Learning", amount: 150.00, status: "Paid", method: "Orange Money", date: "2024-03-01" },
        { id: 2, student: "Liam Brown", course: "React for Beginners", amount: 350.00, status: "Paid", method: "Visa", date: "2024-02-20" },
        { id: 3, student: "Olivia Taylor", course: "Data Science with R", amount: 125.00, status: "Failed", method: "MTN MoMo", date: "2024-01-15" },
        { id: 4, student: "Noah Miller", course: "Advanced CSS", amount: 75.00, status: "Paid", method: "Orange Money", date: "2024-03-05" },
    ]);

    await db.insert(reports).values([
        { id: 1, month: 'Jan', revenue: 4000, expenses: 2400, enrollments: 65 },
        { id: 2, month: 'Feb', revenue: 3000, expenses: 1398, enrollments: 59 },
        { id: 3, month: 'Mar', revenue: 9800, expenses: 2000, enrollments: 80 },
        { id: 4, month: 'Apr', revenue: 3908, expenses: 2780, enrollments: 81 },
        { id: 5, month: 'May', revenue: 4800, expenses: 1890, enrollments: 56 },
        { id: 6, month: 'Jun', revenue: 3800, expenses: 2390, enrollments: 55 },
    ]);

    await db.insert(students).values([
        { id: 1, name: "Emma Wilson", email: "emma.w@example.com", courses: 2, status: "Active", joined: "2024-03-10" },
        { id: 2, name: "Liam Brown", email: "liam.b@example.com", courses: 1, status: "Active", joined: "2024-02-20" },
        { id: 3, name: "Olivia Taylor", email: "olivia.t@example.com", courses: 1, status: "Locked", joined: "2024-01-15" },
        { id: 4, name: "Noah Miller", email: "noah.m@example.com", courses: 3, status: "Active", joined: "2024-03-05" },
    ]);
    console.log('Seeding completed.');
}

main();
