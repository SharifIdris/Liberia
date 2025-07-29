'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Video, Upload, Paperclip, Plus, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const courseContent = [
    { id: 1, title: 'Intro to Machine Learning', href: "/teacher/courses" },
    { id: 2, title: 'Data Visualization', href: "/teacher/courses" },
    { id: 3, title: 'Neural Networks', href: "/teacher/courses" },
    { id: 4, title: 'Deep Learning Fundamentals', href: "/teacher/courses" },
    { id: 5, title: 'Python for AI', href: "/teacher/courses" },
];

const assignments = [
    { id: 1, title: 'Assignment 1', submissions: 9, href: "/teacher/assignments" },
    { id: 2, title: 'Assignment 2', submissions: 8, href: "/teacher/assignments" },
    { id: 3, title: 'Assignment 3', submissions: 12, href: "/teacher/assignments" },
];


export default function TeacherDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
      {/* Column 1 */}
      <div className="flex flex-col gap-6 xl:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Record or Upload</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <Video className="w-16 h-16 text-muted-foreground" />
            </div>
            <Button className="w-full" asChild>
                <Link href="/teacher/sessions">
                    <Video className="mr-2" />
                    Record Video
                </Link>
            </Button>
            <Button variant="outline" className="w-full">
              <Upload className="mr-2" />
              Upload Video
            </Button>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Lesson Notes</CardTitle>
            </CardHeader>
            <CardContent>
                <Button variant="outline" className="w-full">
                    <Paperclip className="mr-2"/>
                    Attach File
                </Button>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Upcoming Live Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Zoom - Intro to Machine Learning</p>
                        <Button size="sm" variant="ghost" asChild>
                            <Link href="/teacher/sessions">Edit</Link>
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">April 28, 2024</p>
                    <p className="text-sm text-muted-foreground">4:00 PM - 5:00 PM</p>
                </div>
                 <Button variant="link" className="w-full p-0" asChild>
                    <Link href="/teacher/sessions">Edit</Link>
                </Button>
            </CardContent>
        </Card>
      </div>

      {/* Column 2 & 3 */}
      <div className="lg:col-span-2 xl:col-span-2">
         <Card className="h-full">
            <CardHeader>
                <CardTitle>Manage Course Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {courseContent.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                            <span className="font-medium">{item.title}</span>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href={item.href}>Edit <ChevronRight className="ml-2 h-4 w-4"/></Link>
                            </Button>
                        </div>
                        {index < courseContent.length - 1 && <Separator />}
                    </React.Fragment>
                ))}
            </CardContent>
        </Card>
      </div>
      
      {/* Column 4 */}
      <div className="flex flex-col gap-6 xl:col-span-1">
        <Card>
            <CardHeader>
                <CardTitle>Upload Assignment</CardTitle>
            </CardHeader>
            <CardContent>
                <Button variant="outline" className="w-full mb-4" asChild>
                   <Link href="/teacher/assignments">
                    <Plus className="mr-2" />
                    Add Assignment
                   </Link>
                </Button>
                <div className="space-y-2">
                     {assignments.map((assignment, index) => (
                        <React.Fragment key={assignment.id}>
                            <Link href={assignment.href} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                                <div>
                                    <p className="font-medium">{assignment.title}</p>
                                    <p className="text-sm text-muted-foreground">{assignment.submissions} Submissions</p>
                                </div>
                                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            </Link>
                             {index < assignments.length - 1 && <Separator />}
                        </React.Fragment>
                    ))}
                </div>
            </CardContent>
        </Card>
         <Card className="text-center">
            <CardHeader>
                <CardTitle>Teacher Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
                 <Avatar className="w-24 h-24 mb-2">
                    <AvatarImage src="https://placehold.co/96x96.png" data-ai-hint="teacher woman"/>
                    <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <p className="font-bold text-lg">Evelyn Carter</p>
                <p className="text-sm text-muted-foreground">Position</p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="w-full">Manage Profile</Button>
            </CardFooter>
        </Card>
      </div>

    </div>
  );
}
