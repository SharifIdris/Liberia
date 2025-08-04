'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useEffect, useState } from 'react';

interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  status: string;
  grade: string | null;
}

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const res = await fetch('/api/assignments');
      const data = await res.json();
      setAssignments(data);
    };

    fetchAssignments();
  }, []);

  return (
    <div>
        <div className="mb-6">
            <h1 className="text-2xl font-bold font-headline">Assignments</h1>
            <p className="text-muted-foreground">Track your assignments, submissions, and grades.</p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>My Assignments</CardTitle>
                <CardDescription>A list of all your assignments and their current status.</CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Assignment</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {assignments.map((assignment) => (
                    <TableRow key={assignment.id}>
                        <TableCell className="font-medium">{assignment.title}</TableCell>
                        <TableCell>{assignment.course}</TableCell>
                        <TableCell>{assignment.dueDate}</TableCell>
                        <TableCell>
                            <Badge variant={assignment.status === 'Submitted' ? 'default' : 'secondary'}>
                                {assignment.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="font-bold">{assignment.grade}</TableCell>
                        <TableCell>
                            {assignment.status === 'Pending' && <Button size="sm">Submit</Button>}
                            {assignment.status === 'Submitted' && <Button size="sm" variant="outline">View Submission</Button>}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </CardContent>
        </Card>
    </div>
  );
}
