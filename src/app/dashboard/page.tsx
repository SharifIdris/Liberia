'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, FileText, Receipt } from 'lucide-react';
import Image from 'next/image';

const myCourses = [
  { id: 1, title: 'Intro to Machine Learning', inProgress: true },
  { id: 2, title: 'Data Visualization', inProgress: false },
  { id: 3, title: 'Neural Networks', inProgress: false },
  { id: 4, title: 'Python for AI', inProgress: false },
];

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
      {/* Column 1 */}
      <div className="flex flex-col gap-6 xl:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Register for Course</CardTitle>
          </CardHeader>
          <CardContent>
             <Image src="https://placehold.co/600x400.png" data-ai-hint="online course video" alt="Course" width={600} height={400} className="rounded-lg aspect-video mb-4"/>
            <Button className="w-full">Enroll Course</Button>
          </CardContent>
        </Card>
        <Card className="flex items-center justify-center p-6">
            <Button variant="ghost" className="text-lg">
                <MessageSquare className="mr-2"/>
                Chat
            </Button>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Assignments</CardTitle>
            </CardHeader>
            <CardContent>
                <Button variant="outline" className="w-full">
                    <FileText className="mr-2"/>
                    Download Certificate
                </Button>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Payments</CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full">
                    <Receipt className="mr-2"/>
                    Make Payment
                </Button>
            </CardContent>
        </Card>
      </div>

      {/* Column 2 & 3 */}
      <div className="lg:col-span-2 xl:col-span-2 space-y-6">
         <Card className="h-full">
            <CardHeader>
                <CardTitle>My Courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {myCourses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-3 rounded-md border">
                        <span className="font-medium">{course.title}</span>
                        {course.inProgress && <Button size="sm">Resume</Button>}
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
      
      {/* Column 4 */}
      <div className="flex flex-col gap-6 xl:col-span-1">
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Live Session</CardTitle>
            </CardHeader>
            <CardContent className="bg-muted/50 p-4 rounded-lg text-center">
                <p className="font-semibold text-lg">Data Visualization</p>
                <p className="text-sm text-muted-foreground">April 25, 2024</p>
                <p className="text-sm text-muted-foreground">10:00 AM - 11:00 AM</p>
            </CardContent>
        </Card>
        <Card className="text-center">
            <CardHeader>
                <CardTitle>Teacher</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
                 <Avatar className="w-24 h-24 mb-2">
                    <AvatarImage src="https://placehold.co/96x96.png" data-ai-hint="teacher woman"/>
                    <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <p className="font-bold text-lg">Evelyn Carter</p>
                <p className="text-sm text-muted-foreground">Teacher</p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="w-full">View Profile</Button>
            </CardFooter>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Payments</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-medium">Next Payment</p>
                        <p className="text-sm text-muted-foreground">Amount $150.00</p>
                    </div>
                    <p className="text-lg font-bold">$150</p>
                </div>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}
