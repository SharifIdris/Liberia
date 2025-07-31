
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/icons';
import Link from 'next/link';
import { Briefcase, Video, CreditCard, Award, BookOpen, Smartphone, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        title: 'Course Previews',
        description: 'Sample any course before enrolling to ensure it meets your learning goals.'
    },
    {
        icon: <CreditCard className="w-8 h-8 text-primary" />,
        title: 'Local Payment Support',
        description: 'Pay with MTN Mobile Money, Orange Money, or local bank transfers easily and securely.'
    },
    {
        icon: <Video className="w-8 h-8 text-primary" />,
        title: 'Live & Recorded Learning',
        description: 'Attend live interactive classes or watch recordings anytime, anywhere.'
    },
    {
        icon: <CreditCard className="w-8 h-8 text-primary" />,
        title: 'Installment Plans',
        description: 'Make education affordable with flexible payment options that fit your budget.'
    },
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: 'Diploma Programs',
        description: 'Earn recognized diplomas in tech and business to advance your career prospects.'
    },
    {
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        title: 'Low-Bandwidth Options',
        description: 'Access course materials smoothly even with limited internet connectivity.'
    },
]

export default function OnboardingPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <Logo className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Welcome to Liberia Learn</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Your gateway to quality education designed specifically for Liberian students.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center p-6 bg-card border hover:shadow-lg transition-shadow">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </Card>
                    ))}
                </div>

                <Card className="bg-primary text-primary-foreground overflow-hidden">
                   <div className="grid md:grid-cols-2 items-center">
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold font-headline mb-4">Ready to start your learning journey?</h2>
                            <p className="text-primary-foreground/80 mb-6">
                                Join thousands of Liberian students already improving their skills and career prospects through Liberia Learn.
                            </p>
                            <div className="flex gap-4">
                                <Button asChild variant="secondary" size="lg">
                                    <Link href="/dashboard">Get Started</Link>
                                </Button>
                                 <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                                    <Link href="/">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                             <Image 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&fit=crop"
                                alt="Students learning"
                                width={800}
                                height={600}
                                className="object-cover w-full h-full"
                                data-ai-hint="students learning together"
                             />
                        </div>
                   </div>
                </Card>
            </div>
        </div>
    );
}
