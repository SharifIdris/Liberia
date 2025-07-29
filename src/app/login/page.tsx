
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const GoogleIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.519-3.317-11.284-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
        <path fill="#1976D2" d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.49 44 30.823 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02c5.5 0 10-4.5 10-10.02C22 6.53 17.5 2.04 12 2.04zM16.5 8.25h-2.25c-.28 0-.5.22-.5.5v1.5h2.75l-.35 2.5h-2.4v7.5H11v-7.5H8.5V9.25H11V7.5c0-1.38 1.12-2.5 2.5-2.5h3v3.25z"></path>
    </svg>
);


export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Welcome Back</CardTitle>
          <CardDescription>Continue your learning journey with eSchola Liberia</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Input id="email" type="email" placeholder="you@example.com" required className="h-12"/>
            </div>
            <div className="grid gap-2 relative">
               <Input id="password" type="password" placeholder="Password" required className="h-12 pr-16"/>
               <Button variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-auto py-1 px-3 text-muted-foreground hover:bg-transparent hover:text-accent">Show</Button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember-me" className="border-muted-foreground data-[state=checked]:bg-accent data-[state=checked]:text-white"/>
                    <Label htmlFor="remember-me" className="text-sm text-muted-foreground">Remember me</Label>
                </div>
                 <Link href="#" className="text-sm text-accent hover:underline">
                  Forgot password?
                </Link>
            </div>

            <Button type="submit" className="w-full h-12 text-lg">
              Sign In
            </Button>
            
            <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                    or
                    </span>
                </div>
            </div>

            <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 hover:bg-secondary">
                    <GoogleIcon />
                    <span className="sr-only">Continue with Google</span>
                </Button>
                 <Button variant="outline" size="icon" className="rounded-full h-12 w-12 hover:bg-secondary">
                    <FacebookIcon />
                    <span className="sr-only">Continue with Facebook</span>
                </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
