'use client';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, Users, BookOpen, UserCheck, ArrowUp, Activity } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F'];

interface TeacherApplication {
    id: number;
    name: string;
    email: string;
    status: string;
}

interface StudentProgress {
    id: number;
    month: string;
    progress: number;
}

interface FinancialOverview {
    id: number;
    name: string;
    value: number;
}

interface Enrollment {
    id: number;
    student: string;
    course: string;
    status: string;
    payment: string;
}

export default function AdminDashboard() {
  const [teacherData, setTeacherData] = useState<TeacherApplication[]>([]);
  const [studentProgressData, setStudentProgressData] = useState<StudentProgress[]>([]);
  const [financialOverviewData, setFinancialOverviewData] = useState<FinancialOverview[]>([]);
  const [enrollmentsData, setEnrollmentsData] = useState<Enrollment[]>([]);

  useEffect(() => {
    const fetchTeacherApplications = async () => {
        const res = await fetch('/api/admin/teachers/applications');
        const data = await res.json();
        setTeacherData(data);
    };

    const fetchStudentProgress = async () => {
        const res = await fetch('/api/admin/students/progress');
        const data = await res.json();
        setStudentProgressData(data);
    };

    const fetchFinancialOverview = async () => {
        const res = await fetch('/api/admin/financials/overview');
        const data = await res.json();
        setFinancialOverviewData(data);
    };

    const fetchEnrollments = async () => {
        const res = await fetch('/api/admin/enrollments');
        const data = await res.json();
        setEnrollmentsData(data);
    };

    fetchTeacherApplications();
    fetchStudentProgress();
    fetchFinancialOverview();
    fetchEnrollments();
  }, []);

  const handleTeacherStatusChange = async (id: number, newStatus: 'Approved' | 'Rejected') => {
    const teacher = teacherData.find(t => t.id === id);
    if (!teacher) return;

    const updatedTeacher = { ...teacher, status: newStatus };

    await fetch(`/api/admin/teachers/applications?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTeacher),
    });

    setTeacherData(teacherData.map(t => t.id === id ? updatedTeacher : t));
  };

  const pendingTeachers = teacherData.filter(t => t.status === 'Pending');


  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
       <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,450</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Enrollments Today</CardTitle>
            <ArrowUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue This Month</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,250</div>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingTeachers.length}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Teacher Applications</CardTitle>
            <CardDescription>Review and approve new teacher applications.</CardDescription>
          </CardHeader>
          <CardContent>
             {pendingTeachers.length > 0 ? (
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pendingTeachers.map((teacher) => (
                    <TableRow key={teacher.id}>
                        <TableCell>{teacher.name}</TableCell>
                        <TableCell>
                            <div className="flex gap-2">
<Button size="sm" onClick={() => handleTeacherStatusChange(teacher.id, 'Approved')}>Approve</Button>
<Button size="sm" variant="destructive" onClick={() => handleTeacherStatusChange(teacher.id, 'Rejected')}>Reject</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            ) : (
                <p className="text-sm text-muted-foreground">No pending applications.</p>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Student Progress Report</CardTitle>
             <CardDescription>Monthly student progress overview.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={studentProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="progress" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
         <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Enrollments & Payments</CardTitle>
                <CardDescription>Monitor student enrollments and payment status.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Student</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Payment</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {enrollmentsData.map((enrollment) => (
                            <TableRow key={enrollment.id}>
                                <TableCell>{enrollment.student}</TableCell>
                                <TableCell>{enrollment.course}</TableCell>
                                <TableCell>
                                    <Badge variant={enrollment.status === 'Payment Failed' ? 'destructive' : 'secondary'}>
                                        {enrollment.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{enrollment.payment}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
         </Card>
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Payment distribution between installments and full payments.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={financialOverviewData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {financialOverviewData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                 <Tooltip />
                 <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
       </div>
    </div>
  );
}
