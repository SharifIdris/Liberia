
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Upload, ArrowLeft, ArrowRight, PartyPopper, Briefcase, Lightbulb, PencilRuler, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/icons';
import Link from 'next/link';

const totalSteps = 4;

const interestCategories = [
    { id: 'tech', label: 'Technology', icon: <Code className="w-8 h-8" /> },
    { id: 'business', label: 'Business', icon: <Briefcase className="w-8 h-8" /> },
    { id: 'design', label: 'Creative & Design', icon: <PencilRuler className="w-8 h-8" /> },
    { id: 'personal-dev', label: 'Personal Development', icon: <Lightbulb className="w-8 h-8" /> },
];

export default function OnboardingPage() {
    const [step, setStep] = useState(1);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const progress = (step / totalSteps) * 100;

    const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps + 1));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

    const toggleInterest = (id: string) => {
        setSelectedInterests((prev) => 
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-muted/40 p-4">
            <div className="w-full max-w-2xl">
                 <div className="flex justify-center items-center gap-2 mb-4">
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl font-headline">eSchola Liberia</span>
                </div>
                <Card>
                    <CardHeader>
                        <Progress value={progress} className="mb-4" />
                        {step === 1 && <WelcomeStep />}
                        {step === 2 && <ProfileStep />}
                        {step === 3 && <InterestsStep selected={selectedInterests} onSelect={toggleInterest} />}
                        {step === 4 && <GoalsStep />}
                        {step === 5 && <CompletionStep />}
                    </CardHeader>
                    <CardContent>
                         {step === 1 && (
                            <div className="text-center text-muted-foreground">
                                <p>We're excited to have you. Let's set up your profile to personalize your learning experience.</p>
                            </div>
                        )}
                        {step === 2 && (
                             <form className="space-y-6">
                                <div className="flex items-center gap-6">
                                <Avatar className="w-24 h-24">
                                    <AvatarImage src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?q=80&w=150&h=150&fit=crop&crop=faces" data-ai-hint="student woman" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <Label>Profile Picture</Label>
                                    <Card className="border-2 border-dashed mt-2">
                                        <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
                                            <Upload className="h-8 w-8 text-muted-foreground" />
                                            <Button variant="outline" size="sm">Select File</Button>
                                        </CardContent>
                                    </Card>
                                </div>
                                </div>
                                <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="e.g. Jane Doe" />
                                    </div>
                            </form>
                        )}
                         {step === 3 && (
                            <div className="grid grid-cols-2 gap-4">
                                {interestCategories.map(cat => (
                                    <Card 
                                        key={cat.id}
                                        onClick={() => toggleInterest(cat.id)}
                                        className={cn("p-6 text-center cursor-pointer transition-all", selectedInterests.includes(cat.id) && "ring-2 ring-primary bg-primary/10")}
                                    >
                                        <div className="flex justify-center mb-3 text-primary">{cat.icon}</div>
                                        <h4 className="font-semibold">{cat.label}</h4>
                                    </Card>
                                ))}
                            </div>
                        )}
                        {step === 4 && (
                            <div className="space-y-4">
                                {[
                                    'Start a new career',
                                    'Improve my current skills',
                                    'Explore a new hobby',
                                    'Complete a specific project'
                                ].map(goal => (
                                     <Card key={goal} className="p-4 cursor-pointer hover:bg-muted/50">
                                        <p>{goal}</p>
                                     </Card>
                                ))}
                            </div>
                        )}
                        {step > 4 && (
                             <div className="text-center">
                                <PartyPopper className="w-16 h-16 text-accent mx-auto mb-4" />
                                <CardTitle>You're all set!</CardTitle>
                                <CardDescription className="mt-2">We've personalized your dashboard based on your interests. Enjoy your learning journey!</CardDescription>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        {step > 1 && step <= totalSteps ? (
                            <Button variant="outline" onClick={handlePrev}>
                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                            </Button>
                        ) : <div></div>}

                        {step <= totalSteps && (
                             <Button onClick={handleNext}>
                                {step === totalSteps ? 'Finish' : 'Next'} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                        {step > totalSteps && (
                            <Button asChild className="w-full">
                                <Link href="/dashboard">Go to Dashboard</Link>
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}


const WelcomeStep = () => (
    <div className="text-center">
        <CardTitle>Welcome to eSchola!</CardTitle>
        <CardDescription>Let's get your learning journey started.</CardDescription>
    </div>
)

const ProfileStep = () => (
     <div className="text-center">
        <CardTitle>Set Up Your Profile</CardTitle>
        <CardDescription>This information will be visible to instructors and peers.</CardDescription>
    </div>
)

const InterestsStep = ({ selected, onSelect }: { selected: string[], onSelect: (id: string) => void }) => (
    <div className="text-center">
        <CardTitle>What are you interested in?</CardTitle>
        <CardDescription>Select a few topics to help us recommend courses for you.</CardDescription>
    </div>
)

const GoalsStep = () => (
     <div className="text-center">
        <CardTitle>What's your main goal?</CardTitle>
        <CardDescription>This helps us understand how we can best support you.</CardDescription>
    </div>
)

const CompletionStep = () => (
    <div className="text-center">
    </div>
)
