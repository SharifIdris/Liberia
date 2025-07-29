
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

export default function StudentProfilePage() {
  return (
    <div className="grid gap-6">
        <div className="mb-2">
            <h1 className="text-2xl font-bold font-headline">Profile</h1>
            <p className="text-muted-foreground">Manage your personal information and preferences.</p>
        </div>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Update your public profile information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop&crop=faces" alt="Jane Doe" data-ai-hint="student woman" />
                <AvatarFallback>JD</AvatarFallback>
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
                    <Input id="name" defaultValue="Jane Doe" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                </div>
            </div>
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
       <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
             <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
            </div>
             <div className="flex justify-end">
              <Button>Update Password</Button>
            </div>
          </form>
        </CardContent>
      </Card>
        <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
           <CardDescription>
            Choose how you want to be notified.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="flex items-center justify-between p-4 rounded-lg border">
             <div>
                <Label htmlFor="email-notifications" className="font-medium">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive updates and reminders via email.</p>
             </div>
             <Switch id="email-notifications" defaultChecked />
           </div>
           <div className="flex items-center justify-between p-4 rounded-lg border">
             <div>
                <Label htmlFor="sms-notifications" className="font-medium">SMS Notifications</Label>
                 <p className="text-sm text-muted-foreground">Receive critical alerts on your mobile.</p>
             </div>
             <Switch id="sms-notifications" />
           </div>
           <div className="flex justify-end">
              <Button>Save Preferences</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Dummy Switch component
const Switch = (props: React.ComponentProps<'input'>) => (
    <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" {...props} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
    </label>
)
