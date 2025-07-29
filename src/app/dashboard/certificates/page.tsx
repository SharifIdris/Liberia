import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Download } from 'lucide-react';
import Image from 'next/image';

const certificates = [
  { id: 1, title: 'React for Beginners', date: '2024-02-20' },
  { id: 2, title: 'UX/UI Design Fundamentals', date: '2023-12-01' },
];

export default function CertificatesPage() {
  return (
    <div>
        <div className="mb-6">
            <h1 className="text-2xl font-bold font-headline">My Certificates</h1>
            <p className="text-muted-foreground">Download your earned certificates.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
                <Card key={cert.id}>
                    <CardHeader>
                        <Award className="w-10 h-10 text-primary mb-2" />
                        <CardTitle>{cert.title}</CardTitle>
                        <CardDescription>Issued on {cert.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image src="https://images.unsplash.com/photo-1593340099839-65a1e34a3833?q=80&w=400&h=250&fit=crop" alt="Certificate Preview" data-ai-hint="certificate document" width={400} height={250} className="rounded-md border-2 border-dashed" />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
  );
}
