import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, MoreHorizontal, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu';

const mockSubmissions = [
  { id: 1, student: 'John Doe', assignment: 'Project Proposal', submittedOn: '2024-10-25', status: 'Graded' },
  { id: 2, student: 'Jane Smith', assignment: 'Final Component Library', submittedOn: '2024-11-10', status: 'Pending' },
  { id: 3, student: 'Peter Jones', assignment: 'Project Proposal', submittedOn: '2024-10-26', status: 'Graded' },
  { id: 4, student: 'Mary Johnson', assignment: 'Final Component Library', submittedOn: '2024-11-12', status: 'Pending' },
];

export default function TeacherSubmissionsPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold font-headline">Submissions</h1>
            <p className="text-muted-foreground">
                View and grade student assignment submissions.
            </p>
        </div>
        <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter by Course
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select Course</DropdownMenuLabel>
                <DropdownMenuCheckboxItem>Machine Learning A-Z</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Advanced React & GraphQL</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>The Complete Web Developer Course 3.0</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
             <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export All
            </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Assignment Submissions</CardTitle>
          <CardDescription>
            A list of all student submissions for your assignments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Assignment</TableHead>
                <TableHead>Submitted On</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.student}</TableCell>
                  <TableCell>{submission.assignment}</TableCell>
                  <TableCell>{submission.submittedOn}</TableCell>
                  <TableCell>
                     <Badge variant={submission.status === 'Graded' ? 'default' : 'secondary'}>
                        {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                      <Button variant="outline" size="sm">
                        {submission.status === 'Graded' ? 'View Grade' : 'Grade'}
                      </Button>
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
