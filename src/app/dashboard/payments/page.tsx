
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const paymentHistory = [
    { id: 'inv001', course: 'Intro to Machine Learning', amount: 150.00, date: '2024-03-01', status: 'Paid' },
    { id: 'inv002', course: 'Intro to Machine Learning', amount: 150.00, date: '2024-04-01', status: 'Due' },
    { id: 'inv003', course: 'Data Visualization', amount: 200.00, date: '2024-03-15', status: 'Paid' },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-headline">Payments</h1>
        <p className="text-muted-foreground">View your payment history and upcoming due dates.</p>
      </div>
       <Card>
        <CardHeader>
          <CardTitle>Next Payment Due</CardTitle>
          <CardDescription>Your next installment for "Intro to Machine Learning" is due soon.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
            <div>
                <p className="text-2xl font-bold">$150.00</p>
                <p className="text-sm text-muted-foreground">Due on April 1, 2024</p>
            </div>
            <Button>Pay Now</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.course}</TableCell>
                  <TableCell>${payment.amount.toFixed(2)}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>
                    <Badge variant={payment.status === 'Paid' ? 'default' : 'secondary'}>
                      {payment.status}
                    </Badge>
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
