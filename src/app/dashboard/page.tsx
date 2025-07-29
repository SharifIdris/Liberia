'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, FileText, Receipt, ArrowRight, Video, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const myCourses = [
  { id: 1, title: 'Intro to Machine Learning', progress: 75, href: '/dashboard/courses/1' },
  { id: 2, title: 'Data Visualization', progress: 45, href: '/dashboard/courses/2' },
];

const upcomingSessions = [
    { title: 'Data Visualization Live Q&A', date: 'April 25, 2024', time: '10:00 AM' },
    { title: 'Machine Learning Workshop', date: 'April 28, 2024', time: '2:00 PM' },
]

export default function DashboardPage() {
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
                    <Button variant="secondary" size="sm"><Video className="mr-2 h-4 w-4"/>Join</Button>
                 </div>
               ))}
            </CardContent>
        </Card>
      </div>
      
      {/* Right Column */}
      <div className="space-y-6">
         <Card className="bg-primary text-primary-foreground">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><AlertCircle/>Payment Due</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold">$150.00</p>
                <p className="text-primary-foreground/80">Next installment for Intro to ML is due on May 1, 2024.</p>
            </CardContent>
            <CardFooter>
                 <Button variant="secondary" className="w-full" asChild><Link href="/dashboard/payments">Pay Now</Link></Button>
            </CardFooter>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Recent Assignments</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm">
                    <li className="flex justify-between"><span>Project Proposal</span> <span className="font-bold text-green-600">Graded: A</span></li>
                    <li className="flex justify-between"><span>Data Analysis Report</span> <span className="text-muted-foreground">Pending</span></li>
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
