'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, FileText, Receipt, ArrowRight, Video, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ZoomMeeting = dynamic(() => import('@/components/shared/zoom-meeting'), { ssr: false });

interface Course {
  id: number;
  title: string;
  progress: number;
  href: string;
}

interface Session {
  title: string;
  date: string;
  time: string;
}

interface PaymentDue {
  amount: number;
  dueDate: string;
  course: string;
}

interface Assignment {
  id: number;
  title: string;
  status: string;
  statusColor: string;
}

export default function DashboardPage() {
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  const [upcomingSessions, setUpcomingSessions] = useState<Session[]>([]);
  const [paymentDue, setPaymentDue] = useState<PaymentDue | null>(null);
  const [recentAssignments, setRecentAssignments] = useState<Assignment[]>([]);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomSignature, setZoomSignature] = useState('');
  const [meetingNumber, setMeetingNumber] = useState('');

  const handleJoinMeeting = async (meetingId: string) => {
    setMeetingNumber(meetingId);
    const res = await fetch('/api/zoom/signature', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ meetingNumber: meetingId, role: 0 }),
    });
    const { signature } = await res.json();
    setZoomSignature(signature);
    setShowZoom(true);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setMyCourses(data.map((course: any) => ({ ...course, href: `/dashboard/courses/${course.id}` })));
    };

    const fetchSessions = async () => {
      const res = await fetch('/api/sessions');
      const data = await res.json();
      setUpcomingSessions(data);
    };

    const fetchPaymentDue = async () => {
      const res = await fetch('/api/payments/due');
      const data = await res.json();
      setPaymentDue(data);
    };

    const fetchRecentAssignments = async () => {
      const res = await fetch('/api/assignments/recent');
      const data = await res.json();
      setRecentAssignments(data);
    };

    fetchCourses();
    fetchSessions();
    fetchPaymentDue();
    fetchRecentAssignments();
  }, []);

  if (showZoom) {
    return (
      <ZoomMeeting
        signature={zoomSignature}
        meetingNumber={meetingNumber}
        userName="Student"
        userEmail="student@example.com"
        apiKey={process.env.NEXT_PUBLIC_ZOOM_SDK_KEY!}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
            <CardHeader>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Continue your learning journey.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {myCourses.map((course) => (
                    <Card key={course.id} className="p-4 flex items-center justify-between">
                        <div>
                            <h3 className="font-bold">{course.title}</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <Progress value={course.progress} className="w-32" />
                                <span className="text-sm text-muted-foreground">{course.progress}%</span>
                            </div>
                        </div>
                        <Button asChild size="sm">
                            <Link href={course.href}>Resume <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                    </Card>
                ))}
            </CardContent>
            <CardFooter>
                 <Button variant="outline" className="w-full" asChild>
                    <Link href="/courses">Explore More Courses</Link>
                </Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Live Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               {upcomingSessions.map(session => (
                 <div key={session.title} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                    <div>
                        <p className="font-semibold">{session.title}</p>
                        <p className="text-sm text-muted-foreground">{session.date} at {session.time}</p>
                    </div>
                    <Button variant="secondary" size="sm" onClick={() => handleJoinMeeting(session.title)}><Video className="mr-2 h-4 w-4"/>Join</Button>
                 </div>
               ))}
            </CardContent>
        </Card>
      </div>
      
      {/* Right Column */}
      <div className="space-y-6">
        {paymentDue && (
          <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2"><AlertCircle/>Payment Due</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-3xl font-bold">${paymentDue.amount.toFixed(2)}</p>
                  <p className="text-primary-foreground/80">Next installment for {paymentDue.course} is due on {paymentDue.dueDate}.</p>
              </CardContent>
              <CardFooter>
                  <Button variant="secondary" className="w-full" asChild><Link href="/dashboard/payments">Pay Now</Link></Button>
              </CardFooter>
          </Card>
        )}
         <Card>
            <CardHeader>
                <CardTitle>Recent Assignments</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm">
                    {recentAssignments.map((assignment) => (
                        <li key={assignment.id} className="flex justify-between">
                            <span>{assignment.title}</span>
                            <span className={`font-bold ${assignment.statusColor}`}>{assignment.status}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
             <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                    <Link href="/dashboard/assignments">View All Assignments</Link>
                </Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full" asChild>
                   <Link href="/dashboard/chat"> <MessageSquare className="mr-2"/>Chat with Support</Link>
                </Button>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}
