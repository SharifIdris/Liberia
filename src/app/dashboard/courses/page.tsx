import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

const enrolledCourses = [
  {
    id: 1,
    title: 'Intro to Machine Learning',
    progress: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'machine learning',
  },
  {
    id: 2,
    title: 'Data Visualization',
    progress: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'data visualization',
  },
];

export default function StudentCoursesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold font-headline mb-6">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map(course => (
          <Card key={course.id}>
            <CardHeader className="p-0">
               <Image src={course.image} data-ai-hint={course.dataAiHint} alt={course.title} width={600} height={400} className="rounded-t-lg aspect-video object-cover"/>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-4">{course.title}</CardTitle>
              <div className="space-y-2">
                <Progress value={course.progress} />
                <p className="text-sm text-muted-foreground">{course.progress}% Complete</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue Learning</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
