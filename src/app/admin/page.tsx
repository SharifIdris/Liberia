'use client';
import React, { useState } from 'react';
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

const initialTeacherData = [
  { name: 'Alex Johnson', email: 'alex.johnson@example.com', status: 'Approved' },
  { name: 'Sarah Williams', email: 'sarah.williams@example.com', status: 'Approved' },
  { name: 'Mark Davis', email: 'mark.davis@example.com', status: 'Pending' },
];

const courseManagementData = [
  { name: 'Intro to Python', status: 'Published', price: '$49.00' },
  { name: 'Web Development', status: 'Draft', price: '$129.00' },
];

const studentProgressData = [
  { name: 'Jan', progress: 45 },
  { name: 'Feb', progress: 50 },
  { name: 'Mar', progress: 70 },
  { name: 'Apr', progress: 48 },
  { name: 'May', progress: 51 },
  { name: 'Jun', progress: 55 },
  { name: 'Jul', progress: 42 },
];

const financialOverviewData = [
  { name: 'Installments', value: 400 },
  { name: 'Full', value: 600 },
];
const COLORS = ['#0088FE', '#00C49F'];

const enrollmentsData = [
    { student: 'Emma Wilson', course: 'Machine Learning A...', status: 'In Progress', payment: 'Full Payment' },
    { student: 'Liam Brown', course: 'React for Beginners', status: 'Completed', payment: 'Full Payment' },
    { student: 'Olivia Taylor', course: 'Data Science with R', status: 'Payment Failed', payment: 'Installments' },
    { student: 'Noah Miller', course: 'Advanced CSS Techniques', status: 'In Progress', payment: 'Full Payment' },
]


export default function AdminDashboard() {
  const [teacherData, setTeacherData] = useState(initialTeacherData);

  const handleTeacherStatusChange = (email: string, newStatus: 'Approved' | 'Rejected') => {
    setTeacherData(teacherData.map(teacher => 
      teacher.email === email ? { ...teacher, status: newStatus } : teacher
    ));
  };


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
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacherData.filter(t => t.status === 'Pending').length}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Teacher Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teacherData.map((teacher, index) => (
                  <TableRow key={index}>
                    <TableCell>{teacher.name}</TableCell>
                    <TableCell>{teacher.email}</TableCell>
                    <TableCell>
                      {teacher.status === 'Pending' ? (
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => handleTeacherStatusChange(teacher.email, 'Approved')}>Approve</Button>
                          <Button size="sm" variant="destructive" onClick={() => handleTeacherStatusChange(teacher.email, 'Rejected')}>Reject</Button>
                        </div>
                      ) : (
                         <Badge variant={teacher.status === 'Approved' ? 'default' : 'destructive'}>{teacher.status}</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
                        {enrollmentsData.map((enrollment, index) => (
                            <TableRow key={index}>
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
