import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Badge } from '@/components/ui/badge';

const courses = [
  {
    id: '1',
    title: 'Diploma in Digital Marketing',
    category: 'Marketing',
    duration: '6 Months',
    rating: 4.8,
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&h=400&fit=crop',
    dataAiHint: 'digital marketing',
  },
  {
    id: '2',
    title: 'Certificate in Project Management',
    category: 'Business',
    duration: '3 Months',
    rating: 4.9,
    reviews: 250,
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=600&h=400&fit=crop',
    dataAiHint: 'project management',
  },
  {
    id: '3',
    title: 'Professional Graphic Design',
    category: 'Design',
    duration: '4 Months',
    rating: 4.7,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&h=400&fit=crop',
    dataAiHint: 'graphic design',
  },
  {
    id: '4',
    title: 'Web Development Bootcamp',
    category: 'Technology',
    duration: '8 Months',
    rating: 4.9,
    reviews: 450,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=400&fit=crop',
    dataAiHint: 'web development',
  },
  {
    id: '5',
    title: 'Introduction to Data Science',
    category: 'Data Science',
    duration: '5 Months',
    rating: 4.8,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&h=400&fit=crop',
    dataAiHint: 'data science',
  },
  {
    id: '6',
    title: 'Advanced Financial Accounting',
    category: 'Finance',
    duration: '6 Months',
    rating: 4.6,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1628260638379-a704b4c73295?q=80&w=600&h=400&fit=crop',
    dataAiHint: 'finance accounting',
  },
];

export default function CoursesPage() {
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
