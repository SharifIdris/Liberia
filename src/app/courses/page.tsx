

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Badge } from '@/components/ui/badge';
import { courses as allCourses } from '@/lib/mock-data';

// Define the Course type based on your database schema
interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  type: string;
  rating: number;
  reviews: number;
  image: string;
  dataAiHint: string;
}

async function getCourses(): Promise<Course[]> {
    // Reverting to mock data
    return allCourses;
}


export default async function CoursesPage() {
  const courses: Course[] = await getCourses();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Our Courses</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find the perfect program to advance your career and skills.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <Link href={`/courses/${course.id}`} className="block">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={course.dataAiHint}
                />
              </Link>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                   <Badge variant="secondary">{course.category}</Badge>
                   <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-accent text-accent"/>
                    <span>{course.rating} ({course.reviews})</span>
                   </div>
                </div>
                <CardTitle className="font-headline text-xl h-14">
                  <Link href={`/courses/${course.id}`} className="hover:text-primary transition-colors">{course.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                 <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2"/>
                    <span>{course.duration}</span>
                 </div>
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={`/courses/${course.id}`}>View Details <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
