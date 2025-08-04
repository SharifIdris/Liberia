
'use client';
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
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ZoomMeeting = dynamic(() => import('@/components/shared/zoom-meeting'), { ssr: false });

interface Submission {
    id: number;
    student: string;
    assignment: string;
    course: string;
}

interface Class {
    id: number;
    topic: string;
    course: string;
    time: string;
}

export default function TeacherDashboardPage() {
    const [recentSubmissions, setRecentSubmissions] = useState<Submission[]>([]);
    const [upcomingClasses, setUpcomingClasses] = useState<Class[]>([]);
    const [coursesTaught, setCoursesTaught] = useState(0);
    const [activeStudents, setActiveStudents] = useState(0);
    const [showZoom, setShowZoom] = useState(false);
    const [zoomSignature, setZoomSignature] = useState('');
    const [meetingNumber, setMeetingNumber] = useState('');

    const handleStartMeeting = async (meetingId: number) => {
        setMeetingNumber(meetingId.toString());
        const res = await fetch('/api/zoom/signature', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ meetingNumber: meetingId.toString(), role: 1 }),
        });
        const { signature } = await res.json();
        setZoomSignature(signature);
        setShowZoom(true);
    };

    useEffect(() => {
        const fetchSubmissions = async () => {
            const res = await fetch('/api/teacher/submissions');
            const data = await res.json();
            setRecentSubmissions(data);
        };

        const fetchClasses = async () => {
            const res = await fetch('/api/teacher/classes');
            const data = await res.json();
            setUpcomingClasses(data);
        };

        const fetchCoursesTaught = async () => {
            const res = await fetch('/api/teacher/courses');
            const data = await res.json();
            setCoursesTaught(data.length);
        };

        const fetchActiveStudents = async () => {
            const res = await fetch('/api/teacher/students');
            const data = await res.json();
            setActiveStudents(data.length);
        };

        fetchSubmissions();
        fetchClasses();
        fetchCoursesTaught();
        fetchActiveStudents();
    }, []);

    if (showZoom) {
        return (
            <ZoomMeeting
                signature={zoomSignature}
                meetingNumber={meetingNumber}
                userName="Teacher"
                userEmail="teacher@example.com"
                apiKey={process.env.NEXT_PUBLIC_ZOOM_SDK_KEY!}
            />
        );
    }

    return (
        <div className="grid auto-rows-max items-start gap-4 md:gap-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Courses Taught</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{coursesTaught}</div>
                        <p className="text-xs text-muted-foreground">Active Courses</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Active Students</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activeStudents}</div>
                         <p className="text-xs text-muted-foreground">Across all courses</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Grading To-Do</CardTitle>
                        <Edit className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{recentSubmissions.length}</div>
                         <p className="text-xs text-muted-foreground">Submissions pending</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{upcomingClasses.length}</div>
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
                                     <TableRow key={submission.id}>
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
                                     <TableRow key={session.id}>
                                        <TableCell>{session.topic}</TableCell>
                                        <TableCell>{session.time}</TableCell>
                                        <TableCell>
                                            <Button variant="secondary" size="sm" onClick={() => handleStartMeeting(session.id)}>Start</Button>
                                        </TableCell>
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
