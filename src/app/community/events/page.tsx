import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

const events = [
    { 
        id: 1, 
        title: 'Virtual Workshop: Intro to UI/UX', 
        date: 'July 25, 2024', 
        time: '2:00 PM - 4:00 PM', 
        location: 'Online (Zoom)', 
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&h=400&fit=crop',
        dataAiHint: 'UI UX design'
    },
    { 
        id: 2, 
        title: 'Q&A Session with Instructors', 
        date: 'August 5, 2024', 
        time: '6:00 PM - 7:00 PM', 
        location: 'Online (Jitsi)', 
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&h=400&fit=crop',
        dataAiHint: 'online meeting'
    },
    { 
        id: 3, 
        title: 'Student Networking Mixer', 
        date: 'August 15, 2024', 
        time: '5:00 PM onwards', 
        location: 'Monrovia Campus', 
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&h=400&fit=crop',
        dataAiHint: 'students networking'
    },
];

export default function CommunityEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our events to learn, network, and connect with the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
                <Card key={event.id} className="flex flex-col">
                    <CardHeader className="p-0">
                        <Image 
                            src={event.image} 
                            alt={event.title}
                            width={600}
                            height={400}
                            className="rounded-t-lg aspect-video object-cover"
                            data-ai-hint={event.dataAiHint}
                        />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                        <CardTitle className="mb-4 font-headline text-xl h-14">{event.title}</CardTitle>
                        <div className="space-y-2 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">RSVP</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
