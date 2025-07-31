
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Star, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const popularCourses = [
  { id: '1', title: 'Advanced Mathematics for Secondary School', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=300&h=200&fit=crop', rating: 4.8, reviews: 120 },
  { id: '2', title: 'Integrated Science: Biology & Chemistry', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=300&h=200&fit=crop', rating: 4.9, reviews: 250 },
  { id: '3', title: 'Liberian History & Cultural Heritage', image: 'https://images.unsplash.com/photo-1604238292858-31de04a29a43?q=80&w=300&h=200&fit=crop', rating: 4.7, reviews: 95 },
  { id: '4', title: 'Introduction to Computer Science', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=300&h=200&fit=crop', rating: 4.9, reviews: 450 },
];

const teachers = [
    { name: 'Professor James Wilson', department: 'Mathematics Department', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&h=150&fit=crop&crop=faces' },
    { name: 'Dr. Mary Johnson', department: 'Science Department', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop&crop=faces' },
    { name: 'Mr. Robert Taylor', department: 'Technology Department', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=faces' },
]

const testimonials = [
    { name: 'Grace Williams', text: 'The interactive lessons and dedicated teachers at Liberia Learn helped me excel in my final exams. I couldn\'t have done it without them!' },
    { name: 'Michael Brown', text: 'Being able to learn at my own pace was a game-changer. The platform is easy to use, even with my slow internet connection.' },
    { name: 'Sarah Cooper', text: 'I love the community aspect. I connected with other students, and we formed study groups that were incredibly helpful.' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary/10 py-20 md:py-32">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
                Transform Your Learning Journey
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Our platform combines video lessons, interactive exercises, and real-time feedback to create an engaging learning environment for students across Liberia.
              </p>
              <Button size="lg" asChild>
                <Link href="/courses">Get Started</Link>
              </Button>
            </div>
            <div className="relative">
                <Image 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=600&fit=crop"
                    alt="Students celebrating graduation"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl"
                    data-ai-hint="african students learning"
                />
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                 <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Popular Courses</h2>
                    <Button variant="outline" asChild>
                        <Link href="/courses">View all courses <ArrowRight className="ml-2 w-4 h-4"/></Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {popularCourses.map((course) => (
                         <Card key={course.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={300}
                                height={200}
                                className="w-full h-40 object-cover"
                            />
                            <CardHeader>
                                <CardTitle className="font-headline text-lg h-12">
                                <Link href={`/courses/${course.id}`} className="hover:text-primary transition-colors">{course.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Star className="w-4 h-4 fill-amber-400 text-amber-400"/>
                                    <span className="font-bold">{course.rating}</span> 
                                    <span>({course.reviews} reviews)</span>
                                </div>
                            </CardContent>
                             <CardFooter>
                                <Button asChild className="w-full" variant="secondary">
                                    <Link href={`/courses/${course.id}`}>View Details</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Meet Our Teachers */}
        <section className="py-16 md:py-24 bg-secondary">
             <div className="container mx-auto px-4">
                 <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Teachers</h2>
                    <Button variant="outline" asChild>
                        <Link href="/about">View all teachers <ArrowRight className="ml-2 w-4 h-4"/></Link>
                    </Button>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {teachers.map(teacher => (
                         <Card key={teacher.name} className="p-6 text-center">
                             <Avatar className="w-24 h-24 mx-auto mb-4">
                                <AvatarImage src={teacher.image} alt={teacher.name} />
                                <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                             <h3 className="text-xl font-bold">{teacher.name}</h3>
                             <p className="text-muted-foreground mb-2">{teacher.department}</p>
                              <div className="flex justify-center items-center gap-1 text-sm text-amber-500">
                                <Star className="w-4 h-4 fill-current"/>
                                <Star className="w-4 h-4 fill-current"/>
                                <Star className="w-4 h-4 fill-current"/>
                                <Star className="w-4 h-4 fill-current"/>
                                <Star className="w-4 h-4 fill-current"/>
                             </div>
                         </Card>
                     ))}
                 </div>
            </div>
        </section>

        {/* What Our Students Say */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                 <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">What Our Students Say</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {testimonials.map(testimonial => (
                         <Card key={testimonial.name} className="p-6 bg-secondary">
                            <CardContent className="p-0">
                                 <div className="flex items-center gap-1 text-amber-500 mb-4">
                                    <Star className="w-5 h-5 fill-current"/>
                                    <Star className="w-5 h-5 fill-current"/>
                                    <Star className="w-5 h-5 fill-current"/>
                                    <Star className="w-5 h-5 fill-current"/>
                                    <Star className="w-5 h-5 fill-current"/>
                                 </div>
                                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                                <h4 className="font-bold">{testimonial.name}</h4>
                            </CardContent>
                         </Card>
                     ))}
                 </div>
            </div>
        </section>


      </main>
      <Footer />
    </div>
  )
}
