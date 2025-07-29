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

const mockPayments = [
  { id: "txn_1", student: "Emma Wilson", course: "Machine Learning", amount: 150.00, status: "Paid", method: "Orange Money", date: "2024-03-01" },
  { id: "txn_2", student: "Liam Brown", course: "React for Beginners", amount: 350.00, status: "Paid", method: "Visa", date: "2024-02-20" },
  { id: "txn_3", student: "Olivia Taylor", course: "Data Science with R", amount: 125.00, status: "Failed", method: "MTN MoMo", date: "2024-01-15" },
  { id: "txn_4", student: "Noah Miller", course: "Advanced CSS", amount: 75.00, status: "Paid", method: "Orange Money", date: "2024-03-05" },
];

export default function AdminPaymentsPage() {
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Paid</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Failed</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <CardTitle>Payment Center</CardTitle>
          <CardDescription>
            View and manage all transactions on the platform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Method</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPayments.map(payment => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.student}</TableCell>
                  <TableCell>{payment.course}</TableCell>
                  <TableCell>${payment.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={payment.status === 'Paid' ? 'default' : 'destructive'}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{payment.method}</TableCell>
                  <TableCell className="hidden md:table-cell">{payment.date}</TableCell>
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
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Issue Refund</DropdownMenuItem>
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
                    Showing <strong>1-4</strong> of <strong>{mockPayments.length}</strong> payments
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
