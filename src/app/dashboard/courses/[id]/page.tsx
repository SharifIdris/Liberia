
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Download, PlayCircle, Award, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const courseDetails = {
    title: "Intro to Machine Learning",
    progress: 75,
    grade: "A-",
    certificateReady: true,
    modules: [
        { 
            title: "Module 1: Introduction to ML",
            lessons: [
                { title: "What is Machine Learning?", type: "video", completed: true },
                { title: "Types of Machine Learning", type: "video", completed: true },
                { title: "Reading: The ML Landscape", type: "reading", completed: true },
            ]
        },
        { 
            title: "Module 2: Supervised Learning",
            lessons: [
                { title: "Linear Regression", type: "video", completed: true },
                { title: "Logistic Regression", type: "video", completed: true },
                { title: "Live Session Recording - May 10th", type: "recording", completed: false },
            ]
        },
        { 
            title: "Module 3: Unsupervised Learning",
            lessons: [
                { title: "Clustering with K-Means", type: "video", completed: false },
                { title: "Dimensionality Reduction with PCA", type: "video", completed: false },
            ]
        }
    ]
}


export default function StudentCourseDetailPage() {
    return (
        <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-8">
                <div>
                    <h1 className="text-3xl font-bold font-headline mb-2">{courseDetails.title}</h1>
                    <div className="flex items-center gap-4">
                        <Progress value={courseDetails.progress} className="w-1/2" />
                        <span className="text-muted-foreground">{courseDetails.progress}% Complete</span>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Course Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible defaultValue="item-0">
                           {courseDetails.modules.map((module, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="font-bold text-lg">{module.title}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-3 pl-2">
                                        {module.lessons.map((lesson, lessonIndex) => (
                                            <li key={lessonIndex} className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
                                                        {lesson.completed ? <CheckCircle className="w-4 h-4"/> : <PlayCircle className="w-4 h-4"/>}
                                                    </div>
                                                    <span>{lesson.title}</span>
                                                    {lesson.type === 'recording' && <Badge variant="secondary">Recording</Badge>}
                                                </div>
                                                <Button variant="ghost" size="sm">
                                                    {lesson.type === 'video' || lesson.type === 'recording' ? 'Play' : 'Read'}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                           ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Award className="w-6 h-6 text-primary"/>
                            <span>Certificate</span>
                        </CardTitle>
                        <CardDescription>Your final grade and certificate status.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex justify-between items-center bg-muted/50 p-3 rounded-lg">
                            <span className="font-medium">Final Grade</span>
                            <span className="font-bold text-lg">{courseDetails.grade}</span>
                       </div>
                       {courseDetails.certificateReady ? (
                            <Button className="w-full">
                                <Download className="mr-2 h-4 w-4" />
                                Download Certificate
                            </Button>
                       ) : (
                            <Button className="w-full" disabled>Certificate Not Yet Available</Button>
                       )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
