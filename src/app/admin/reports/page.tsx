'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download } from 'lucide-react';

const financialData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 9800, expenses: 2000 },
  { month: 'Apr', revenue: 3908, expenses: 2780 },
  { month: 'May', revenue: 4800, expenses: 1890 },
  { month: 'Jun', revenue: 3800, expenses: 2390 },
];

const enrollmentTrendsData = [
    { date: '2024-01', count: 65 },
    { date: '2024-02', count: 59 },
    { date: '2024-03', count: 80 },
    { date: '2024-04', count: 81 },
    { date: '2024-05', count: 56 },
    { date: '2024-06', count: 55 },
];

const coursePopularityData = [
  { name: 'Digital Marketing', value: 400 },
  { name: 'Project Management', value: 300 },
  { name: 'Graphic Design', value: 300 },
  { name: 'Web Development', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function AdminReportsPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
       <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold font-headline">Reports</h1>
            <p className="text-muted-foreground">Analytics and insights on platform performance.</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Reports
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Financial Report</CardTitle>
                <CardDescription>Monthly revenue and expenses overview.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={financialData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenue" />
                    <Bar dataKey="expenses" fill="hsl(var(--destructive))" name="Expenses" />
                </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Course Popularity</CardTitle>
                <CardDescription>Distribution of enrollments across courses.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={coursePopularityData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                    {coursePopularityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                    <Legend />
                </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
            <div className="flex justify-between items-center">
                <div>
                    <CardTitle>Enrollment Trends</CardTitle>
                    <CardDescription>Monthly new student enrollments.</CardDescription>
                </div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Last 6 Months" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="6m">Last 6 Months</SelectItem>
                        <SelectItem value="12m">Last 12 Months</SelectItem>
                        <SelectItem value="all">All Time</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={enrollmentTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" name="New Enrollments" />
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
