
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

export default function TeacherApplicationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Become an Instructor</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Join our team of experts and share your knowledge with learners across Liberia.
                </p>
            </div>
          <Card>
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <CardDescription>
                Fill out the details below to apply. Our team will review your application and get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="e.g. Evelyn Carter" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input id="title" placeholder="e.g. Lead Instructor, Machine Learning & AI" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="bio">Biography / Cover Letter</Label>
                    <Textarea
                    id="bio"
                    placeholder="Tell us about your experience and why you want to teach with us..."
                    rows={6}
                    />
                </div>
                <div className="grid gap-3">
                    <Label>Resume / Credentials</Label>
                    <Card className="border-2 border-dashed">
                        <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                            <Upload className="h-10 w-10 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground mb-2">Drag & drop or click to upload your CV (PDF)</p>
                            <Button variant="outline" size="sm">Select File</Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex justify-end gap-2">
                  <Button size="lg">Submit Application</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
