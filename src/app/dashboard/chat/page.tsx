import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Slack, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ChatPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
            <Card className="h-[600px] flex flex-col">
                <CardHeader>
                    <CardTitle>Class Chat</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4 overflow-y-auto">
                   {/* Chat messages would go here */}
                    <div className="flex items-start gap-3">
                        <Avatar>
                            <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="teacher woman" />
                            <AvatarFallback>EC</AvatarFallback>
                        </Avatar>
                        <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                            <p className="font-semibold text-sm">Evelyn Carter</p>
                            <p className="text-sm">Hi everyone! Just a reminder that the project proposal is due this Friday. Let me know if you have questions!</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3 justify-end">
                         <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                             <p className="font-semibold text-sm">You</p>
                            <p className="text-sm">Thanks for the reminder! I'll be sure to submit it.</p>
                        </div>
                        <Avatar>
                            <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="student woman" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                     <div className="relative w-full">
                        <Input placeholder="Type a message..." className="pr-12"/>
                        <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2">
                            <Send className="w-5 h-5"/>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Other Channels</CardTitle>
                </CardHeader>
                 <CardContent className="space-y-3">
                    <Button className="w-full justify-start" asChild>
                       <Link href="#"><Slack className="mr-2 h-5 w-5"/>Join Slack Community</Link>
                    </Button>
                     <Button className="w-full justify-start" asChild>
                       <Link href="#"><MessageSquare className="mr-2 h-5 w-5"/>Support Chat</Link>
                    </Button>
                 </CardContent>
            </Card>
        </div>
    </div>
  );
}
