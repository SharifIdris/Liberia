
'use client';

import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const termsSections = [
    {
        title: '1. Introduction',
        content: "Welcome to eSchola Liberia. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service."
    },
    {
        title: '2. Enrollment and Payments',
        content: "To enroll in a course, you must complete the registration process and provide accurate information. We offer both full and installment payment plans. For installment plans, you are required to make payments by the due dates specified. Failure to make timely payments will result in the automatic revocation of course access until the outstanding balance is paid. All payments are processed through secure third-party gateways like Orange Money, Lonestar Cell MTN MoMo, and Stripe."
    },
    {
        title: '3. Course Access and Content',
        content: "Upon successful payment, you will receive access to all course materials, including recorded sessions, notes, and assignments, through your student dashboard. All content provided is for your personal and non-commercial use only. You may not distribute, modify, or reproduce any course materials without our prior written consent."
    },
    {
        title: '4. Student Conduct',
        content: "You agree to use our platform for lawful purposes only and to not engage in any conduct that could damage, disable, or impair the platform. You are expected to interact with instructors and other students respectfully. We reserve the right to terminate your access for any violation of our community guidelines or these terms."
    },
    {
        title: '5. Limitation of Liability',
        content: "Our platform and its content are provided 'as is' without any warranties, express or implied. eSchola Liberia will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the service."
    },
    {
        title: '6. Changes to Terms',
        content: "We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms and Conditions on this page. You are advised to review this page periodically for any changes. Changes to these terms are effective when they are posted on this page."
    },
    {
        title: '7. Contact Us',
        content: "If you have any questions about these Terms and Conditions, please contact us via the information provided on our Contact page."
    }
]

export default function TermsPage() {
    const [lastUpdated, setLastUpdated] = useState('');

    useEffect(() => {
        setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-secondary py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Terms and Conditions</h1>
                {lastUpdated && <p className="text-lg text-muted-foreground">Last updated: {lastUpdated}</p>}
            </div>

            <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8 md:p-12 space-y-8">
                {termsSections.map(section => (
                    <div key={section.title}>
                        <h2 className="text-2xl font-bold font-headline mb-3">{section.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                ))}
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
