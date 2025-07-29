
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

export default function TeacherProfilePage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>
            Update your public profile information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=150&h=150&fit=crop&crop=faces" alt="Evelyn Carter" data-ai-hint="teacher woman" />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Label>Profile Picture</Label>
                <Card className="border-2 border-dashed mt-2">
                    <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Drop image or</p>
                        <Button variant="outline" size="sm">Select File</Button>
                    </CardContent>
                </Card>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Evelyn Carter" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input id="title" defaultValue="Lead Instructor, Machine Learning & AI" />
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea
                id="bio"
                rows={5}
                defaultValue="Evelyn is a passionate educator and a seasoned data scientist with over a decade of experience in the tech industry. She specializes in making complex topics like machine learning and artificial intelligence accessible to learners of all backgrounds."
              />
            </div>
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
