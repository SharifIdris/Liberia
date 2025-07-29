import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Clock, BarChart, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

const featuredCourses = [
  {
    title: 'Diploma in Digital Marketing',
    description: 'Master SEO, content marketing, social media, and analytics.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'digital marketing',
    link: '/courses/1',
  },
  {
    title: 'Certificate in Project Management',
    description: 'Learn to manage projects, from initiation to completion.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'project management',
    link: '/courses/2',
  },
  {
    title: 'Professional Graphic Design',
    description: 'Unlock your creative potential with our hands-on design course.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'graphic design',
    link: '/courses/3',
  },
];

const whyChooseUs = [
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: 'Expert-Led Courses',
    description: 'Learn from industry professionals with real-world experience.',
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: 'Flexible Learning',
    description: 'Study at your own pace with recorded sessions and 24/7 access.',
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: 'Career Growth',
    description: 'Gain certified skills that are in high demand in the job market.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'Secure Payments',
    description: 'Easy and secure local & international payment options, including installments.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32 text-center bg-secondary">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
              Unlock Your Potential.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              EduLiberia offers accredited online Certificate and Diploma programs for adult learners. Start your journey to success today.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="why-us" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              Why Choose EduLiberia?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <Card key={course.title} className="overflow-hidden flex flex-col">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={course.dataAiHint}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <CardTitle className="font-headline text-xl mb-2">{course.title}</CardTitle>
                    <p className="text-muted-foreground flex-grow">{course.description}</p>
                    <CardFooter className="p-0 pt-6">
                      <Button asChild variant="link" className="p-0 h-auto text-primary">
                        <Link href={course.link}>
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
