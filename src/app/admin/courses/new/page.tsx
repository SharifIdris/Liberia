
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';

export default function AdminAddCoursePage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
       <div className="flex items-center justify-between">
         <Button variant="outline" asChild>
            <Link href="/admin/courses">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
            </Link>
         </Button>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Create New Course</CardTitle>
            <CardDescription>
              Fill out the details below to add a new course to the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="title">Course Title</Label>
                <Input
                  id="title"
                  type="text"
                  className="w-full"
                  placeholder="e.g. Web Development Bootcamp"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="A comprehensive course covering..."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="category">Category</Label>
                    <Input
                    id="category"
                    type="text"
                    placeholder="e.g. Technology"
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input id="price" type="number" placeholder="e.g. 500.00" />
                </div>
               </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="teacher">Assign Teacher</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a teacher" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="alex-johnson">Alex Johnson</SelectItem>
                                <SelectItem value="sarah-williams">Sarah Williams</SelectItem>
                                <SelectItem value="emily-white">Emily White</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="grid gap-3">
                        <Label>Payment Structure</Label>
                        <RadioGroup defaultValue="full" className="flex items-center gap-4 pt-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="full" id="r1" />
                                <Label htmlFor="r1">Full Payment Only</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="installments" id="r2" />
                                <Label htmlFor="r2">Allow Installments</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
               <div className="grid gap-3">
                <Label>Course Image</Label>
                <Card className="border-2 border-dashed">
                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                        <Upload className="h-10 w-10 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">Drag & drop or click to upload</p>
                        <Button variant="outline" size="sm">Select File</Button>
                    </CardContent>
                </Card>
               </div>
              <div className="flex justify-end gap-2">
                 <Button variant="outline">Save as Draft</Button>
                <Button>Publish Course</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
