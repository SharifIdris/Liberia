import Image from 'next/image';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const communityFeatures = [
    {
        icon: <MessageSquare className="w-12 h-12 text-primary" />,
        title: 'Community Forum',
        description: 'Ask questions, share knowledge, and connect with fellow learners and instructors in our dedicated forum.',
        link: '/community/forum',
        linkLabel: 'Go to Forum',
    },
    {
        icon: <Calendar className="w-12 h-12 text-primary" />,
        title: 'Upcoming Events',
        description: 'Join virtual workshops, Q&A sessions, and networking events. See what’s happening this month.',
        link: '/community/events',
        linkLabel: 'View Events',
    },
    {
        icon: <Users className="w-12 h-12 text-primary" />,
        title: 'Study Groups',
        description: 'Form or join study groups for your courses to collaborate on projects and prepare for exams together.',
        link: '/community/groups',
        linkLabel: 'Find a Group',
    },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-secondary py-20 md:py-32">
           <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1594497643195-f823a3134377?q=80&w=1200&h=600&fit=crop"
                    alt="Community of learners"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                    data-ai-hint="diverse students collaborating"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>
          <div className="container mx-auto px-4 relative text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
              Join Our Learning Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect, collaborate, and grow with a network of passionate learners and expert instructors.
            </p>
          </div>
        </section>

        {/* Community Hub Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                 <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
                    Community Hub
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                   {communityFeatures.map((feature, index) => (
                     <Card key={index} className="flex flex-col text-center items-center p-8 bg-card border-border/50 hover:shadow-xl transition-shadow">
                        <div className="mb-6">{feature.icon}</div>
                        <h3 className="text-2xl font-bold font-headline mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground flex-grow mb-6">{feature.description}</p>
                        <Button asChild variant="outline">
                            <Link href={feature.link}>{feature.linkLabel} <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </Card>
                   ))}
                </div>
            </div>
        </section>
        
        {/* Guidelines Section */}
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Community Guidelines</h2>
                        <p className="text-muted-foreground mb-6">We strive to create a welcoming and respectful environment for everyone. Please follow these guidelines to ensure a positive experience for all members.</p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" /><span>Be respectful and courteous to others.</span></li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" /><span>Share knowledge and help others learn.</span></li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" /><span>No spam, self-promotion, or inappropriate content.</span></li>
                             <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" /><span>Stay on topic within channels and discussions.</span></li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <Image 
                            src="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?q=80&w=500&h=400&fit=crop"
                            alt="Community guidelines"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="friendly diverse group discussion"
                        />
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// Dummy icon for checkmark
const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
