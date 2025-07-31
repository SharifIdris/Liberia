
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Star, ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const popularCourses = [
  {
    id: '1',
    title: 'Diploma in Digital Marketing',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=300&h=200&fit=crop',
    dataAiHint: 'digital marketing',
    rating: 4.8,
    reviews: 120,
  },
  {
    id: '2',
    title: 'Certificate in Project Management',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=300&h=200&fit=crop',
    dataAiHint: 'project management',
    rating: 4.9,
    reviews: 250,
  },
  {
    id: '3',
    title: 'Professional Graphic Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=300&h=200&fit=crop',
    dataAiHint: 'graphic design',
    rating: 4.7,
    reviews: 95,
  },
  {
    id: '4',
    title: 'Web Development Bootcamp',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=300&h=200&fit=crop',
    dataAiHint: 'web development',
    rating: 4.9,
    reviews: 450,
  },
   {
    id: '5',
    title: 'Introduction to Data Science',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=300&h=200&fit=crop',
    dataAiHint: 'data science',
    rating: 4.8,
    reviews: 310,
  },
];

const teachers = [
  {
    name: 'Professor James Wilson',
    title: 'Mathematics Department',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&h=150&fit=crop&crop=faces',
    dataAiHint: 'male teacher',
  },
  {
    name: 'Dr. Mary Johnson',
    title: 'Science Department',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop&crop=faces',
    dataAiHint: 'female teacher',
  },
  {
    name: 'Mr. Robert Taylor',
    title: 'Technology Department',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=faces',
    dataAiHint: 'male teacher smiling',
  },
];

const testimonials = [
  {
    name: 'Grace Williams',
    text: "The interactive lessons and dedicated teachers at Liberia Learn helped me excel in my final exams. I couldn't have done it without them!",
    image: 'https://images.unsplash.com/photo-1521252659862-dECbe784c62f?q=80&w=150&h=150&fit=crop&crop=faces',
    dataAiHint: 'female student',
  },
  {
    name: 'Michael Brown',
    text: 'Being able to learn at my own pace was a game-changer. The platform is easy to use, even with my slow internet connection.',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=150&h=150&fit=crop&crop=faces',
    dataAiHint: 'male student',
  },
  {
    name: 'Sarah Cooper',
    text: 'I love the community aspect. I connected with other students, and we formed study groups that were incredibly helpful.',
    image: 'https://images.unsplash.com/photo-1596245305333-2a44c59b35b4?q=80&w=150&h=150&fit=crop&crop=faces',
    dataAiHint: 'female student smiling',
  },
];

const learningFeatures = [
    { title: 'Learn at Your Pace', description: 'Access course materials 24/7 and learn on your own schedule.'},
    { title: 'Practice & Assessment', description: 'Reinforce learning with quizzes, assignments, and practical projects.'},
    { title: 'Certification on Completion', description: 'Earn a certificate to showcase your new skills to employers.'}
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center text-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&h=900&fit=crop"
            alt="Liberian students learning"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="african students learning"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="container mx-auto px-4 z-20">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
              Welcome to Liberia Learn
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Your gateway to quality education designed specifically for Liberian students.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="/login">Get Started</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/courses">Explore Courses</Link>
                </Button>
            </div>
             <div className="mt-8 flex justify-center gap-6 text-sm">
                <Link href="/dashboard" className="hover:underline">Student Portal</Link>
                <Link href="/support" className="hover:underline">Support</Link>
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Popular Courses</h2>
              <Button variant="outline" asChild>
                <Link href="/courses">View all courses <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <Carousel opts={{ align: 'start', loop: true }} className="w-full">
              <CarouselContent>
                {popularCourses.map((course) => (
                  <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/4">
                    <Card className="overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover"
                        data-ai-hint={course.dataAiHint}
                      />
                      <CardHeader>
                        <CardTitle className="font-headline text-lg h-12">
                          <Link href={`/courses/${course.id}`} className="hover:text-primary transition-colors">{course.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="font-bold">{course.rating}</span>
                          <span>({course.reviews} reviews)</span>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex"/>
              <CarouselNext className="hidden lg:flex"/>
            </Carousel>
          </div>
        </section>

        {/* Meet Our Teachers */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">Meet Our Teachers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teachers.map(teacher => (
                <Card key={teacher.name} className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={teacher.image} alt={teacher.name} data-ai-hint={teacher.dataAiHint} />
                    <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{teacher.name}</h3>
                  <p className="text-muted-foreground mb-4">{teacher.title}</p>
                   <Button variant="link" asChild><Link href="/about">View Profile <ArrowRight className="ml-2 w-4 h-4"/></Link></Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Learning Experience */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                 <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-blue-800 dark:text-blue-300">An Engaging & Flexible Learning Experience</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto mb-8">We combine quality content with interactive tools to create an effective learning environment that fits your life.</p>
                     <div className="grid md:grid-cols-3 gap-8 mb-8">
                         {learningFeatures.map(feature => (
                             <div key={feature.title}>
                                 <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                 <p className="text-muted-foreground text-sm">{feature.description}</p>
                             </div>
                         ))}
                     </div>
                    <Button size="lg" asChild><Link href="/login">Join Now</Link></Button>
                </div>
            </div>
        </section>


        {/* Student Testimonials */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(testimonial => (
                <Card key={testimonial.name} className="p-6 text-left">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-1 text-accent mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground mb-4 h-24">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                             <h4 className="font-bold">{testimonial.name}</h4>
                             <p className="text-sm text-muted-foreground">High School Graduate</p>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Begin Your Learning Journey Today</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Join thousands of students across Liberia who are building a brighter future with Liberia Learn. Your next chapter starts now.</p>
                <Button size="lg" asChild><Link href="/login">Start Learning</Link></Button>
            </div>
        </section>
        
         {/* Featured Course Preview */}
        <section className="py-16 md:py-24 bg-secondary">
             <div className="container mx-auto px-4">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div>
                         <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Preview a Lesson</h2>
                         <p className="text-muted-foreground mb-6">Get a feel for our platform. Watch a sample lesson from our "Introduction to Computer Science" course and see how easy it is to learn with us.</p>
                         <Button asChild><Link href="/courses/4">Explore the Full Course <ArrowRight className="ml-2 w-4 h-4"/></Link></Button>
                     </div>
                      <Card className="overflow-hidden shadow-xl">
                          <div className="relative aspect-video">
                            <Image 
                                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&h=450&fit=crop"
                                alt="Code on a screen"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="computer code"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <PlayCircle className="w-20 h-20 text-white/80 hover:text-white transition-colors cursor-pointer"/>
                            </div>
                          </div>
                     </Card>
                 </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

    