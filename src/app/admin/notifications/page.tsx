'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AdminNotificationsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-8">
             <Card>
                <CardHeader>
                    <CardTitle>Send Notification</CardTitle>
                    <CardDescription>Send a bulk message to a group of users.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="recipient">Recipient Group</Label>
                        <Select>
                            <SelectTrigger id="recipient">
                                <SelectValue placeholder="Select a group" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all-students">All Students</SelectItem>
                                <SelectItem value="all-teachers">All Teachers</SelectItem>
                                <SelectItem value="course-ml">Students in Machine Learning</SelectItem>
                                <SelectItem value="late-payments">Students with Late Payments</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="e.g. Upcoming Maintenance" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message..." rows={6} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Send Message</Button>
                </CardFooter>
            </Card>
        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Automated Reminders</CardTitle>
                    <CardDescription>Configure automatic payment reminders.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="first-reminder">First Reminder</Label>
                        <Select defaultValue="7">
                            <SelectTrigger id="first-reminder">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="3">3 days before due date</SelectItem>
                                <SelectItem value="7">7 days before due date</SelectItem>
                                <SelectItem value="14">14 days before due date</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="second-reminder">Second Reminder (After Due)</Label>
                        <Select defaultValue="1">
                            <SelectTrigger id="second-reminder">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1 day after due date</SelectItem>
                                <SelectItem value="3">3 days after due date</SelectItem>
                                <SelectItem value="5">5 days after due date</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                 <CardFooter>
                    <Button>Save Settings</Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
}
