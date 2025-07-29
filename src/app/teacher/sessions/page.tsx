import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, MoreHorizontal, Video } from 'lucide-react';
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
} from '@/components/ui/dropdown-menu';

const mockSessions = [
  { id: 1, topic: 'Live Q&A: Machine Learning Basics', course: 'Machine Learning A-Z', dateTime: '2024-10-28 at 2:00 PM', platform: 'Zoom' },
  { id: 2, topic: 'Workshop: State Management in React', course: 'Advanced React & GraphQL', dateTime: '2024-11-05 at 4:00 PM', platform: 'Jitsi' },
  { id: 3, topic: 'Code Review: Portfolio Projects', course: 'The Complete Web Developer Course 3.0', dateTime: '2024-11-12 at 1:00 PM', platform: 'Zoom' },
];

export default function TeacherSessionsPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8">
       <div className="flex items-center justify-between">
         <div>
            <h1 className="text-2xl font-bold font-headline">Live Sessions</h1>
            <p className="text-muted-foreground">
                Schedule and manage your live video sessions.
            </p>
         </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Schedule Session
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>
            A list of your scheduled live sessions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell className="font-medium">{session.topic}</TableCell>
                  <TableCell>{session.course}</TableCell>
                  <TableCell>{session.dateTime}</TableCell>
                  <TableCell>{session.platform}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Video className="mr-2 h-4 w-4"/>
                        Start Session
                      </Button>
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
                          <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          <DropdownMenuItem>Cancel Session</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
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
