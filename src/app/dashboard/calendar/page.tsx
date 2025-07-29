'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import * as React from 'react';

const events = [
  { date: new Date(2024, 3, 25), title: 'Live Session: Data Visualization', time: '10:00 AM' },
  { date: new Date(2024, 4, 1), title: 'Assignment Due: ML Project Proposal', time: '11:59 PM' },
];

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
            <Card>
                 <CardContent className="p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border w-full"
                    />
                 </CardContent>
            </Card>
        </div>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {events.map((event, index) => (
                        <div key={index} className="bg-muted/50 p-3 rounded-lg">
                            <p className="font-semibold">{event.title}</p>
                            <p className="text-sm text-muted-foreground">{event.date.toLocaleDateString()} at {event.time}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
