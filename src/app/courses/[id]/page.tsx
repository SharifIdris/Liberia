

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Check, ChevronRight, Award } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Define your types
interface Instructor {
  name: string;
  title: string;
  image: string;
  dataAiHint: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  dataAiHint: string;
  type: string;
  duration: string;
  whatYouWillLearn: string[];
  instructors: Instructor[];
  faq: FAQ[];
}

async function getCourseById(id: string): Promise<Course | undefined> {
  // In a real app, you'd fetch from `/api/courses/${id}`
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        return undefined;
    }
    return res.json();
  } catch (error) {
    console.error("Failed to fetch course", error);
    return undefined;
  }
}


export default async function CourseDetailsPage({ params }: { params: { id: string } }) {
  const course = await getCourseById(params.id);

  if (!course) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold">Course not found</h1>
          <p className="text-muted-foreground mt-4">The course you are looking for does not exist.</p>
          <Button asChild className="mt-8">
            <Link href="/courses">Back to Courses</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              {course.description}
            </p>
            <div className="flex flex-col items-start gap-4">
                <Button asChild size="lg">
                    <Link href="/register">Enroll Now</Link>
                </Button>
                <p className="text-sm text-muted-foreground">Flexible payment options available</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={course.image}
              alt={course.title}
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full"
              data-ai-hint={course.dataAiHint}
            />
          </div>
        </section>
        
        {/* Details Bar */}
        <div className="bg-secondary rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
            <div className="flex items-center gap-4">
                <Award className="w-10 h-10 text-primary"/>
                <div>
                    <p className="text-muted-foreground">{course.type}</p>
                    <p className="font-bold text-lg">{course.duration}</p>
                </div>
            </div>
            <Button asChild>
                <Link href="/register">Enroll Now</Link>
            </Button>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <section id="overview" className="mb-12">
                    <h2 className="text-3xl font-bold font-headline mb-4">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">{course.overview}</p>
                </section>

                <section id="instructors" className="mb-12">
                    <h2 className="text-3xl font-bold font-headline mb-6">Instructors</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {course.instructors.map((instructor) => (
                        <Card key={instructor.name} className="bg-secondary border-border/50 text-center p-6">
                            <Avatar className="w-24 h-24 mx-auto mb-4">
                                <AvatarImage src={instructor.image} alt={instructor.name} data-ai-hint={instructor.dataAiHint} />
                                <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h3 className="font-bold text-lg">{instructor.name}</h3>
                            <p className="text-muted-foreground">{instructor.title}</p>
                        </Card>
                    ))}
                    </div>
                </section>
            </div>

            <div className="md:col-span-1">
                <section id="what-you-will-learn" className="bg-secondary p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold font-headline mb-4">What You Will Learn</h3>
                    <ul className="space-y-3">
                        {course.whatYouWillLearn.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                </section>

                <section id="faq">
                    <h3 className="text-2xl font-bold font-headline mb-4">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                        {course.faq.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className="bg-secondary rounded-lg mb-2 px-4">
                            <AccordionTrigger className="hover:no-underline text-left">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
