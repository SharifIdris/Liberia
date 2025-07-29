"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/icons';
import { X, Send } from 'lucide-react';

export function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={`fixed bottom-4 right-4 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'scale-0' : 'scale-100'}`}>
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-primary shadow-lg hover:bg-primary/90"
          onClick={() => setIsOpen(true)}
        >
          <Logo className="w-8 h-8 text-primary-foreground" />
        </Button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-4 right-4 z-50 w-80 h-[450px] shadow-2xl flex flex-col transition-all duration-300 ease-in-out origin-bottom-right data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
               <Logo className="w-6 h-6 text-primary" />
               <CardTitle className="text-lg font-headline">AI Assistant</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
             {/* Chat messages will go here */}
             <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                     <Logo className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Hello! How can I help you today?</p>
                </div>
             </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <div className="relative w-full">
                <Input placeholder="Ask a question..." className="pr-12"/>
                <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2">
                    <Send className="w-5 h-5"/>
                </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
