import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
  Search,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const mockTeachers = [
  { id: "1", name: "Alex Johnson", email: "alex.j@example.com", status: "Approved", courses: 5, joined: "2023-01-15" },
  { id: "2", name: "Sarah Williams", email: "sarah.w@example.com", status: "Approved", courses: 3, joined: "2022-11-20" },
  { id: "3", name: "Mark Davis", email: "mark.d@example.com", status: "Pending", courses: 0, joined: "2024-02-10" },
  { id: "4", name: "Emily White", email: "emily.w@example.com", status: "Approved", courses: 8, joined: "2021-05-30" },
  { id: "5", name: "David Garcia", email: "david.g@example.com", status: "Rejected", courses: 1, joined: "2024-01-05" },
];

export default function AdminTeachersPage() {
  return (
     <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="flex items-center gap-4">
             <div className="relative flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Search teachers..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
            </div>
            <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                    </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Teacher
                    </span>
                </Button>
            </div>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Teacher Management</CardTitle>
                <CardDescription>
                Approve, view, and manage all teacher accounts.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Courses</TableHead>
                    <TableHead className="hidden md:table-cell">Joined Date</TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockTeachers.map(teacher => (
                    <TableRow key={teacher.id}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell>{teacher.email}</TableCell>
                        <TableCell>
                            <Badge variant={
                                teacher.status === 'Approved' ? 'default' :
                                teacher.status === 'Pending' ? 'secondary' : 'destructive'
                            }>
                                {teacher.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{teacher.courses}</TableCell>
                        <TableCell className="hidden md:table-cell">{teacher.joined}</TableCell>
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
                            {teacher.status === 'Pending' && <DropdownMenuItem>Approve</DropdownMenuItem>}
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                                Delete
                            </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
             <CardFooter>
                <div className="flex w-full justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                    Showing <strong>1-5</strong> of <strong>{mockTeachers.length}</strong> teachers
                    </div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                            <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#" isActive>2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
              </div>
            </CardFooter>
        </Card>
     </div>
  );
}
