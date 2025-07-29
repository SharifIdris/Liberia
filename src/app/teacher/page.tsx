
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Edit, Clock, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const recentSubmissions = [
    { student: 'John Doe', assignment: 'Project Proposal', course: 'Machine Learning A-Z'},
    { student: 'Jane Smith', assignment: 'Final Component Library', course: 'Advanced React & GraphQL' },
    { student: 'Peter Jones', assignment: 'Project Proposal', course: 'Machine Learning A-Z' },
];

const upcomingClasses = [
    { topic: 'Live Q&A: ML Basics', course: 'Machine Learning A-Z', time: '2:00 PM'},
    { topic: 'Workshop: State Management', course: 'Advanced React & GraphQL', time: '4:00 PM' },
];

export default function TeacherDashboardPage() {
    return (
        <div className="grid auto-rows-max items-start gap-4 md:gap-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Courses Taught</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Active Courses</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Active Students</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">195</div>
                         <p className="text-xs text-muted-foreground">Across all courses</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Grading To-Do</CardTitle>
                        <Edit className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                         <p className="text-xs text-muted-foreground">Submissions pending</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                         <p className="text-xs text-muted-foreground">Scheduled this week</p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Submissions</CardTitle>
                        <CardDescription>Latest assignments waiting for your review.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Student</TableHead>
                                    <TableHead>Assignment</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentSubmissions.map(submission => (
                                     <TableRow key={submission.student}>
                                        <TableCell>{submission.student}</TableCell>
                                        <TableCell>{submission.assignment}</TableCell>
                                        <TableCell><Button variant="outline" size="sm">Grade</Button></TableCell>
                                     </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Live Classes</CardTitle>
                        <CardDescription>Your scheduled sessions for today.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Topic</TableHead>
                                    <TableHead>Time</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {upcomingClasses.map(session => (
                                     <TableRow key={session.topic}>
                                        <TableCell>{session.topic}</TableCell>
                                        <TableCell>{session.time}</TableCell>
                                        <TableCell><Button variant="secondary" size="sm">Start</Button></TableCell>
                                     </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
