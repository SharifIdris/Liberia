import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Repeat, Users, ShieldCheck, Settings, RefreshCw, Mail, ArrowRight } from 'lucide-react';

const policySections = [
    {
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: 'Information We Collect',
        content: (
            <ul className="space-y-4">
                <li>
                    <h4 className="font-semibold">Personal Information:</h4>
                    <ul className="list-disc list-inside text-muted-foreground ml-4">
                        <li>Personal identification details</li>
                        <li>Contact information (e.g., email, phone number)</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-semibold">Usage Data:</h4>
                    <ul className="list-disc list-inside text-muted-foreground ml-4">
                        <li>Login history, pages viewed</li>
                        <li>Courses enrolled in</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-semibold">Payment Information:</h4>
                    <ul className="list-disc list-inside text-muted-foreground ml-4">
                        <li>Transaction details (e.g., account number, payment references)</li>
                    </ul>
                </li>
            </ul>
        )
    },
    {
        icon: <Repeat className="w-8 h-8 text-primary" />,
        title: 'How We Use Your Information',
        content: (
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide and improve our services.</li>
                <li>To process transactions and manage enrollments.</li>
                <li>To communicate updates and promotional materials.</li>
            </ul>
        )
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: 'How We Share Your Information',
        content: (
            <div className="text-muted-foreground space-y-2">
                <p>We do not share your personal information with third parties, except in the following cases:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>With service providers (e.g., payment processors, analytics).</li>
                    <li>To comply with legal obligations.</li>
                </ul>
            </div>
        )
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: 'Data Security',
        content: (
             <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>We employ industry-standard security measures to protect your data.</li>
                <li>However, no method of transmission over the Internet is 100% secure.</li>
            </ul>
        )
    },
    {
        icon: <Settings className="w-8 h-8 text-primary" />,
        title: 'Your Choices and Rights',
        content: (
            <p className="text-muted-foreground">You may access, update, or request to delete your personal information by contacting us.</p>
        )
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-primary" />,
        title: 'Changes to This Policy',
        content: (
            <div className="text-muted-foreground space-y-2">
                <p>We may update this policy periodically. We encourage you to review it regularly.</p>
                <p><strong>Effective date:</strong> January 1, 2024</p>
            </div>
        )
    }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policySections.map((section, index) => (
                <Card key={index} className="bg-secondary border-border/50">
                    <CardHeader className="flex flex-row items-center gap-4">
                        {section.icon}
                        <CardTitle className="font-headline text-2xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {section.content}
                    </CardContent>
                </Card>
            ))}
             <Card className="bg-secondary border-border/50 md:col-span-2 lg:col-span-3">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Mail className="w-8 h-8 text-primary" />
                    <CardTitle className="font-headline text-2xl">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">If you have any questions or inquiries about our Privacy Policy, please contact us at:</p>
                    <a href="mailto:support@example.com" className="text-accent font-semibold text-lg hover:underline">support@example.com</a>
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
