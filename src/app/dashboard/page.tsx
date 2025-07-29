import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Clock, PlayCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const inProgressCourses = [
  { id: 1, title: 'Diploma in Digital Marketing', progress: 60, nextLesson: 'SEO Best Practices' },
  { id: 2, title: 'Certificate in Project Management', progress: 25, nextLesson: 'Intro to Agile' },
];

const upcomingSessions = [
  { id: 1, title: 'Live Q&A: Digital Marketing', time: 'Tomorrow at 2:00 PM' },
  { id: 2, title: 'Workshop: Project Risk Management', time: 'Oct 28, 2024 at 10:00 AM' },
];

export default function DashboardPage() {
  const paymentOverdue = true;

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold font-headline">Welcome back, Jane!</h1>
        <p className="text-muted-foreground">Here's a summary of your learning journey.</p>
      </div>

      {paymentOverdue && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Payment Overdue</AlertTitle>
          <AlertDescription>
            Your access to 'Diploma in Digital Marketing' is suspended. Please make a payment to regain access.
            <Button asChild variant="link" className="p-0 h-auto ml-2">
                <Link href="/dashboard/payments">Make Payment</Link>
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>In Progress Courses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {inProgressCourses.map(course => (
              <div key={course.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{course.title}</h3>
                  <Badge variant={course.id === 1 && paymentOverdue ? "destructive" : "secondary"}>
                    {course.id === 1 && paymentOverdue ? 'Locked' : `${course.progress}%`}
                  </Badge>
                </div>
                <Progress value={course.progress} className="mb-2 h-2" />
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Next: {course.nextLesson}</span>
                  <Button variant="ghost" size="sm" asChild className={paymentOverdue && course.id === 1 ? 'pointer-events-none text-muted-foreground' : ''}>
                    <Link href={`/dashboard/courses/${course.id}`}>
                      {paymentOverdue && course.id === 1 ? 'Access Revoked' : 'Continue'} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Live Sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingSessions.map(session => (
              <div key={session.id} className="flex items-start gap-4 p-3 bg-secondary/50 rounded-lg">
                <PlayCircle className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">{session.title}</p>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Clock className="w-3 h-3 mr-1.5" />
                    {session.time}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">Join</Button>
              </div>
            ))}
             <Button variant="link" className="w-full">View all sessions</Button>
          </CardContent>
        </Card>
      </div>

       <Card>
          <CardHeader>
            <CardTitle>Payment Status</CardTitle>
            <CardDescription>Review your payment history and upcoming installments.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="flow-root">
              <ul className="-mb-8">
                <li>
                  <div className="relative pb-8">
                    <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                          <svg className="h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-foreground">Payment received for <span className="font-medium">Digital Marketing Diploma (1/3)</span></p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-muted-foreground">
                          <time dateTime="2024-09-20">Sep 20</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-destructive flex items-center justify-center ring-8 ring-background">
                           <AlertTriangle className="h-5 w-5 text-destructive-foreground"/>
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-foreground">Installment due for <span className="font-medium">Digital Marketing Diploma (2/3)</span></p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-muted-foreground">
                          <time dateTime="2024-10-20">Oct 20</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <Button asChild>
                <Link href="/dashboard/payments">Manage Payments</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
    </div>
  );
}
