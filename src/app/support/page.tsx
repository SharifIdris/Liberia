import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, LifeBuoy, BookOpen, CreditCard } from 'lucide-react';

const faqItems = [
  {
    question: 'How do I enroll in a course?',
    answer: 'To enroll, simply navigate to the course page, click "Enroll Now," and follow the on-screen instructions to complete the registration and payment process. You can choose between full payment or an installment plan.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept local Liberian payment methods including Orange Money and Lonestar Cell MTN MoMo, as well as Visa/Mastercard payments through our secure online gateway.',
  },
  {
    question: 'Can I get a refund if I am not satisfied?',
    answer: 'Please refer to our Terms and Conditions for detailed information on our refund policy. Generally, refunds are available within the first 7 days of enrollment, subject to certain conditions.',
  },
   {
    question: 'How do I access my course materials?',
    answer: 'Once you have successfully enrolled and your payment is confirmed, you can access all your course materials, including videos and notes, directly from your student dashboard.',
  },
];

const supportTopics = [
    {
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        title: 'Course & Content',
        description: 'Find help with course access, materials, and schedules.'
    },
    {
        icon: <CreditCard className="w-8 h-8 text-primary" />,
        title: 'Payments & Billing',
        description: 'Get support for payment issues, invoices, and installment plans.'
    },
    {
        icon: <LifeBuoy className="w-8 h-8 text-primary" />,
        title: 'Account & Profile',
        description: 'Manage your account settings, password, and profile information.'
    }
]

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Support Center</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column: Contact Form */}
          <div className="md:col-span-1">
            <Card className="bg-secondary border-border/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g., Payment Issue" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea id="message" placeholder="Describe your issue in detail..." rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: FAQ */}
          <div className="md:col-span-2">
            <div className="mb-8">
                 <h2 className="text-3xl font-bold font-headline mb-4">Frequently Asked Questions</h2>
                 <div className="relative">
                    <Input placeholder="Search for answers..." className="pl-10 h-12" />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                 </div>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-secondary/50 rounded-lg px-4 border">
                  <AccordionTrigger className="hover:no-underline text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-12">
                 <h3 className="text-2xl font-bold font-headline mb-6">Browse by Topic</h3>
                 <div className="grid sm:grid-cols-3 gap-4">
                     {supportTopics.map(topic => (
                         <Card key={topic.title} className="p-4 bg-secondary border-none text-center">
                            <div className="flex justify-center mb-3">{topic.icon}</div>
                            <h4 className="font-bold">{topic.title}</h4>
                            <p className="text-sm text-muted-foreground">{topic.description}</p>
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
