import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Filter, MoreHorizontal } from 'lucide-react';
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
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';


const mockStudents = [
  { id: 1, name: 'John Doe', course: 'Machine Learning A-Z', progress: 85, grade: 'A-' },
  { id: 2, name: 'Jane Smith', course: 'Advanced React & GraphQL', progress: 92, grade: 'A' },
  { id: 3, name: 'Peter Jones', course: 'Machine Learning A-Z', progress: 76, grade: 'B+' },
  { id: 4, name: 'Mary Johnson', course: 'Advanced React & GraphQL', progress: 65, grade: 'B' },
];

export default function TeacherStudentsPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold font-headline">Students</h1>
            <p className="text-muted-foreground">
                Track student progress and grades across your courses.
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
              </DropdownMenuContent>
            </DropdownMenu>
             <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export List
            </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Student List</CardTitle>
          <CardDescription>
            An overview of all students enrolled in your courses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Current Grade</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={student.progress} className="w-24"/>
                        <span>{student.progress}%</span>
                      </div>
                  </TableCell>
                  <TableCell>
                     <Badge variant="secondary">{student.grade}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Message Student</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Remove from Course
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
