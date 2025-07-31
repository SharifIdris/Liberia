
import Image from 'next/image';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase, Smartphone, DollarSign, Globe, Eye, Handshake } from 'lucide-react';

const teamMembers = [
  {
    name: 'Aaisha Nyandoro',
    role: 'Community Coordinator',
    image: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=150&h=150&fit=crop&crop=faces',
    dataAiHint: 'woman community coordinator',
  },
  {
    name: 'Dr. Koffi Mensah',
    role: 'Curriculum Lead',
    image: 'https://images.unsplash.com/photo-1613959953633-d642aff2a19b?q=80&w=150&h=150&fit=crop&crop=faces',
    dataAiHint: 'man curriculum lead',
  },
  {
    name: 'Alsha Nyandoro',
    role: 'Community Coordinator',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&fit=crop&crop=faces',
    dataAiHint: 'woman community coordinator smiling',
  },
];

const offerings = [
  {
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    title: 'Career-Focused Programs',
    description: 'Web Dev, Data, Design – built for real world jobs',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-accent" />,
    title: 'Mobile-Friendly Learning',
    description: 'Seamless experience on phones & tablets',
  },
  {
    icon: <DollarSign className="w-8 h-8 text-accent" />,
    title: 'Local Payment Options',
    description: 'MTN, Orange Money, and flexible installments',
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: 'Online Access, Anytime',
    description: 'No borders, just bandwidth',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-secondary py-20 md:py-32">
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
                Empowering Liberia Through Digital Education
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Bridging global knowledge with local opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Card className="p-8 bg-secondary border-border/50">
                        <div className="flex items-start gap-6">
                            <Handshake className="w-12 h-12 text-primary flex-shrink-0" />
                            <div>
                                <h2 className="text-3xl font-bold font-headline mb-3">Our Mission</h2>
                                <p className="text-muted-foreground">Make high-quality, tech-driven education accessible to all, using flexible tools and local payment systems.</p>
                            </div>
                        </div>
                    </Card>
                     <Card className="p-8 bg-secondary border-border/50">
                        <div className="flex items-start gap-6">
                            <Eye className="w-12 h-12 text-primary flex-shrink-0" />
                            <div>
                                <h2 className="text-3xl font-bold font-headline mb-3">Our Vision</h2>
                                <p className="text-muted-foreground">A future where every Liberian learner thrives in the global digital economy.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>


        {/* What We Offer */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerings.map((item, index) => (
                <Card key={index} className="text-left p-6 bg-card border-border/50">
                    {item.icon}
                    <h3 className="text-xl font-bold font-headline mt-4 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              Meet the Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center p-4 rounded-lg bg-secondary">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
