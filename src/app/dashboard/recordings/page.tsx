import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Download } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const recordings = [
  { id: 1, title: 'Live Session: Data Visualization', course: 'Data Visualization', date: '2024-04-25' },
  { id: 2, title: 'Workshop: Machine Learning Basics', course: 'Intro to Machine Learning', date: '2024-04-18' },
  { id: 3, title: 'Q&A with Instructor', course: 'Intro to Machine Learning', date: '2024-04-11' },
];

export default function RecordingsPage() {
  return (
    <div>
        <div className="mb-6">
            <h1 className="text-2xl font-bold font-headline">Session Recordings</h1>
            <p className="text-muted-foreground">Catch up on any live sessions you missed.</p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>My Recordings</CardTitle>
                <CardDescription>A list of all available recordings from your courses.</CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Session Title</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {recordings.map((rec) => (
                    <TableRow key={rec.id}>
                        <TableCell className="font-medium">{rec.title}</TableCell>
                        <TableCell>{rec.course}</TableCell>
                        <TableCell>{rec.date}</TableCell>
                        <TableCell className="flex gap-2">
                           <Button size="sm" variant="secondary"><PlayCircle className="mr-2 h-4 w-4"/>Play</Button>
                           <Button size="sm" variant="outline"><Download className="mr-2 h-4 w-4"/>Download</Button>
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
