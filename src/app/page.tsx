import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { CheckCircle, PlayCircle, BookOpen, Calendar, Zap, Users, ShieldCheck, FileText, BarChart, Clock } from 'lucide-react';

const popularPrograms = [
  {
    title: 'Web Development Certificate',
    duration: '6 months',
    icon: <PlayCircle className="w-8 h-8 text-accent" />,
    link: '/courses/1',
  },
  {
    title: 'Business Administration Diploma',
    duration: '12 months',
    icon: <BarChart className="w-8 h-8 text-accent" />,
    link: '/courses/2',
  },
  {
    title: 'Cybersecurity Certificate',
    duration: '8 months',
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    link: '/courses/3',
  },
];

const howItWorks = [
  {
    icon: <CheckCircle className="w-10 h-10 text-accent" />,
    title: 'Enroll in a Program',
    description: 'Choose your program and select a payment plan that fits your budget.',
  },
  {
    icon: <PlayCircle className="w-10 h-10 text-primary" />,
    title: 'Learn at Your Pace',
    description: 'Access course materials anytime, from anywhere, and join live sessions.',
  },
  {
    icon: <FileText className="w-10 h-10 text-accent" />,
    title: 'Get Certified',
    description: 'Submit assignments and complete your program to earn a certificate or diploma.',
  },
];

const whyChooseUs = [
  {
    icon: <Calendar className="w-10 h-10 text-accent" />,
    title: 'Installment Plans',
    description: 'Flexible payment options available for all programs.',
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: 'Live & Recorded Classes',
    description: 'Attend live classes or watch recordings at your convenience.',
  },
  {
    icon: <Users className="w-10 h-10 text-accent" />,
    title: 'Experienced Instructors',
    description: 'Learn from industry professionals with real world expertise.',
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: 'Student Support',
    description: 'Receive guidance and assistance throughout your learning journey.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
                Earn Your Certificate or Diploma Online
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
                Advance your career with flexible online programs designed for adult learners.
              </p>
              <Button asChild size="lg">
                <Link href="/courses">Browse Programs</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1611214298194-27e1b21a7127?q=80&w=600&h=400&fit=crop"
                alt="Student learning online"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full"
                data-ai-hint="smiling student online"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="ghost" size="icon" className="w-20 h-20 bg-primary/50 rounded-full hover:bg-primary/70">
                   <PlayCircle className="w-12 h-12 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="popular-programs" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              Popular Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularPrograms.map((program) => (
                <Card key={program.title} className="bg-card border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-6 flex flex-col items-start gap-4">
                        {program.icon}
                        <div>
                            <h3 className="text-xl font-bold font-headline mb-1">{program.title}</h3>
                            <p className="text-muted-foreground">{program.duration}</p>
                        </div>
                    </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild variant="link" size="lg" className="text-accent text-lg">
                    <Link href="/courses">View All Programs</Link>
                </Button>
            </div>
          </div>
        </section>
        
        <section id="how-it-works" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howItWorks.map((item, index) => (
                    <Card key={index} className="text-left p-6 bg-card border-border/50">
                        {item.icon}
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                ))}
                </div>
            </div>
        </section>

        <section id="why-choose-us" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-left p-6 bg-card border-border/50">
                    {item.icon}
                    <h3 className="text-xl font-bold font-headline mt-4 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
