import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const studyGroups = [
    { id: 1, name: 'Web Dev Warriors', course: 'Web Development Bootcamp', members: 12 },
    { id: 2, name: 'Data Dynamos', course: 'Introduction to Data Science', members: 8 },
    { id: 3, name: 'Marketing Mavericks', course: 'Diploma in Digital Marketing', members: 15 },
    { id: 4, name: 'Project Pros', course: 'Certificate in Project Management', members: 10 },
];

export default function StudyGroupsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Study Groups</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Collaborate with your peers to enhance your learning experience.
          </p>
        </div>

        <Card>
            <CardHeader className="flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <CardTitle>Find a Study Group</CardTitle>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <Input placeholder="Search groups..." className="flex-grow md:w-64" />
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by Course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="web-dev">Web Development Bootcamp</SelectItem>
                            <SelectItem value="data-science">Introduction to Data Science</SelectItem>
                            <SelectItem value="digital-marketing">Diploma in Digital Marketing</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                {studyGroups.map(group => (
                    <Card key={group.id} className="bg-secondary">
                        <CardHeader>
                            <CardTitle className="font-headline">{group.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                             <div className="flex items-center gap-2 text-muted-foreground">
                                <BookOpen className="w-5 h-5" />
                                <span>{group.course}</span>
                            </div>
                             <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="w-5 h-5" />
                                <span>{group.members} members</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Join Group</Button>
                        </CardFooter>
                    </Card>
                ))}
            </CardContent>
        </Card>

        <div className="text-center mt-12">
            <h2 className="text-2xl font-bold font-headline mb-4">Can't find a group?</h2>
            <Button size="lg"><PlusCircle className="mr-2 w-5 h-5"/>Create Your Own Study Group</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
