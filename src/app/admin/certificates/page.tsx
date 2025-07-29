import {
  File,
  ListFilter,
  MoreHorizontal,
  Search,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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

const mockCertificates = [
  { id: "cert_01", student: "Liam Brown", course: "React for Beginners", status: "Issued", date: "2024-02-20" },
  { id: "cert_02", student: "Sophia Garcia", course: "UX/UI Design", status: "Issued", date: "2023-12-01" },
  { id: "cert_03", student: "Emma Wilson", course: "Machine Learning", status: "Pending Completion", date: "-" },
];

export default function AdminCertificatesPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by student or course..."
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
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Certificate Management</CardTitle>
          <CardDescription>
            Issue, view, and manage student certificates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Issued</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCertificates.map(cert => (
                <TableRow key={cert.id}>
                  <TableCell className="font-medium">{cert.student}</TableCell>
                  <TableCell>{cert.course}</TableCell>
                  <TableCell>
                    <Badge variant={cert.status === 'Issued' ? 'default' : 'secondary'}>
                      {cert.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{cert.date}</TableCell>
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
                         {cert.status === 'Issued' ? (
                             <DropdownMenuItem>View Certificate</DropdownMenuItem>
                         ) : (
                             <DropdownMenuItem>Manually Issue</DropdownMenuItem>
                         )}
                        <DropdownMenuItem>Revoke Certificate</DropdownMenuItem>
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
