

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Logo } from '@/components/icons';

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.519-3.317-11.284-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
        <path fill="#1976D2" d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.49 44 30.823 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02c5.5 0 10-4.5 10-10.02C22 6.53 17.5 2.04 12 2.04zM16.5 8.25h-2.25c-.28 0-.5.22-.5.5v1.5h2.75l-.35 2.5h-2.4v7.5H11v-7.5H8.5V9.25H11V7.5c0-1.38 1.12-2.5 2.5-2.5h3v3.25z"></path>
    </svg>
);

export default function HomePage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="relative flex-1 hidden bg-muted lg:block">
         <Image
            src="https://images.unsplash.com/photo-1523240795610-5717136769e4?q=80&w=1200&h=1600&fit=crop"
            alt="Students learning together"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            data-ai-hint="students learning together"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/20" />
        <div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold font-headline">
                <Logo className="h-8 w-8 text-primary" />
                <span>eSchola Liberia</span>
            </Link>
            <div className="w-full max-w-md">
                 <h1 className="text-5xl font-bold font-headline leading-tight tracking-tight">
                    Unlock Knowledge.
                    <br/>
                    Anytime. Anywhere.
                </h1>
                <p className="mt-4 text-lg text-white/80">
                    Join a community of learners and experts to advance your career.
                </p>
            </div>
             <div className="text-sm text-white/60">
                © {new Date().getFullYear()} eSchola Liberia. All Rights Reserved.
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
            <div className="flex flex-col items-center text-center lg:hidden mb-4">
                 <Logo className="h-10 w-10 text-primary mb-2" />
                 <h1 className="text-3xl font-bold">Welcome to eSchola</h1>
                <p className="text-balance text-muted-foreground">Start your learning journey today</p>
            </div>
          <Tabs defaultValue="sign-in" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in">
                <Card>
                    <CardHeader>
                        <CardTitle>Sign In</CardTitle>
                        <CardDescription>Enter your credentials to access your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email-signin">Email</Label>
                            <Input id="email-signin" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                            <Label htmlFor="password-signin">Password</Label>
                            <Link href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </Link>
                            </div>
                            <Input id="password-signin" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">Sign in</Button>
                        <div className="relative my-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                or continue with
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button variant="outline" size="icon" className="rounded-full"><GoogleIcon/></Button>
                            <Button variant="outline" size="icon" className="rounded-full"><FacebookIcon/></Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="sign-up">
                <Card>
                     <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription>Create an account to start your learning journey.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name-signup">Full Name</Label>
                            <Input id="name-signup" placeholder="John Doe" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email-signup">Email</Label>
                            <Input id="email-signup" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password-signup">Password</Label>
                            <Input id="password-signup" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">Create an account</Button>
                         <div className="mt-4 text-center text-xs text-muted-foreground">
                            By clicking continue, you agree to our{' '}
                            <Link href="/terms" className="underline underline-offset-2">
                            Terms of Service
                            </Link>
                            {' '}and{' '}
                            <Link href="/privacy" className="underline underline-offset-2">
                            Privacy Policy
                            </Link>
                            .
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
