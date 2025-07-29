import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';

const forumThreads = [
    { id: 1, title: 'Getting started with Web Development', replies: 25, lastReply: '2 hours ago', author: 'John Doe' },
    { id: 2, title: 'Best resources for learning React?', replies: 15, lastReply: '5 hours ago', author: 'Jane Smith' },
    { id: 3, title: 'Showcase your final project!', replies: 42, lastReply: '1 day ago', author: 'Admin' },
    { id: 4, title: 'Questions about the Data Science program', replies: 8, lastReply: '3 days ago', author: 'Emily White' },
]

export default function CommunityForumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Community Forum</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Engage with fellow students, ask questions, and share your knowledge.
          </p>
        </div>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Threads</CardTitle>
                <div className="flex gap-4">
                    <Input placeholder="Search forum..." className="w-64" />
                    <Button><PlusCircle className="w-4 h-4 mr-2"/>New Thread</Button>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {forumThreads.map(thread => (
                        <li key={thread.id} className="p-4 bg-secondary rounded-lg flex items-center justify-between hover:bg-secondary/80 transition-colors">
                            <div className="flex items-center gap-4">
                                <MessageSquare className="w-8 h-8 text-primary" />
                                <div>
                                    <h3 className="font-semibold text-lg">{thread.title}</h3>
                                    <p className="text-sm text-muted-foreground">by {thread.author}</p>
                                </div>
                            </div>
                            <div className="text-right text-sm">
                                <p>{thread.replies} replies</p>
                                <p className="text-muted-foreground">Last reply {thread.lastReply}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
