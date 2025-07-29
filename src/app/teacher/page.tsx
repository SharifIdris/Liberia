
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';
import { ArrowRight, BookOpen, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const teacher = {
    name: 'Evelyn Carter',
    title: 'Lead Instructor, Machine Learning & AI',
    bio: 'Evelyn is a passionate educator and a seasoned data scientist with over a decade of experience in the tech industry. She specializes in making complex topics like machine learning and artificial intelligence accessible to learners of all backgrounds. Her teaching philosophy revolves around hands-on projects and real-world applications to ensure students not only learn the theory but also know how to apply it.',
    avatar: 'https://placehold.co/150x150.png',
    dataAiHint: 'teacher woman',
    stats: {
        students: '5,000+',
        reviews: '1,200+',
        courses: 8,
    },
};

const courses = [
  {
    id: '1',
    title: 'Machine Learning A-Z',
    category: 'Data Science',
    duration: '8 Months',
    rating: 4.9,
    reviews: 450,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'machine learning course'
  },
  {
    id: '2',
    title: 'Advanced React & GraphQL',
    category: 'Web Development',
    duration: '6 Months',
    rating: 4.8,
    reviews: 310,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'react code'
  },
  {
    id: '3',
    title: 'The Complete Web Developer Course 3.0',
    category: 'Web Development',
    duration: '12 Months',
    rating: 4.7,
    reviews: 88,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'web design'
  },
];

export default function TeacherProfilePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-muted/40">
                {/* Profile Header */}
                <section className="bg-card py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <Avatar className="w-32 h-32 border-4 border-primary">
                                <AvatarImage src={teacher.avatar} alt={teacher.name} data-ai-hint={teacher.dataAiHint} />
                                <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-4xl font-bold font-headline">{teacher.name}</h1>
                                <p className="text-lg text-primary font-semibold">{teacher.title}</p>
                                <div className="flex gap-6 mt-4 text-muted-foreground">
                                    <div className="text-center">
                                        <p className="font-bold text-2xl text-foreground">{teacher.stats.students}</p>
                                        <p>Students</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-2xl text-foreground">{teacher.stats.reviews}</p>
                                        <p>Reviews</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-2xl text-foreground">{teacher.stats.courses}</p>
                                        <p>Courses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column: Bio */}
                        <div className="lg:col-span-1">
                            <Card>
                                <CardHeader>
                                    <CardTitle>About Me</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{teacher.bio}</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column: Courses */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold font-headline mb-6">My Courses</h2>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
