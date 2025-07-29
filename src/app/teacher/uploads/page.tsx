'use client'
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud, Video, FileText } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function UploadsPage() {
  return (
    <div>
        <div className="mb-6">
            <h1 className="text-2xl font-bold font-headline">Upload Center</h1>
            <p className="text-muted-foreground">Upload video lessons and attach course notes.</p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Upload New Content</CardTitle>
                <CardDescription>Select a course and upload your materials.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                     <label className="text-sm font-medium">Select Course</label>
                     <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Choose a course to upload to" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ml-az">Machine Learning A-Z</SelectItem>
                            <SelectItem value="react-graphql">Advanced React & GraphQL</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-dashed">
                        <CardContent className="flex flex-col items-center justify-center gap-2 p-6 text-center">
                            <UploadCloud className="h-12 w-12 text-muted-foreground" />
                            <h3 className="font-bold">Upload Video Lesson</h3>
                            <p className="text-sm text-muted-foreground">Drag & drop or click to select a video file.</p>
                            <Button variant="outline" size="sm" className="mt-2"><Video className="mr-2 h-4 w-4"/>Select Video</Button>
                        </CardContent>
                    </Card>
                    <Card className="border-2 border-dashed">
                         <CardContent className="flex flex-col items-center justify-center gap-2 p-6 text-center">
                            <UploadCloud className="h-12 w-12 text-muted-foreground" />
                            <h3 className="font-bold">Attach Lesson Notes</h3>
                            <p className="text-sm text-muted-foreground">Drag & drop or click to select a PDF/document.</p>
                            <Button variant="outline" size="sm" className="mt-2"><FileText className="mr-2 h-4 w-4"/>Select File</Button>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Upload Content</Button>
            </CardFooter>
        </Card>
    </div>
  );
}
