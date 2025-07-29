import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LiberiaFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 11 6" className="mr-2">
        <rect width="11" height="6" fill="#FFF"/>
        <rect width="11" height="0.545" y="0.545" fill="#C00"/>
        <rect width="11" height="0.545" y="1.636" fill="#C00"/>
        <rect width="11" height="0.545" y="2.727" fill="#C00"/>
        <rect width="11" height="0.545" y="3.818" fill="#C00"/>
        <rect width="11" height="0.545" y="4.909" fill="#C00"/>
        <rect width="3" height="3.273" fill="#002868"/>
        <polygon points="1.5,1.26 1.7,1.8 2.25,1.8 1.85,2.15 2,2.7 1.5,2.35 1,2.7 1.15,2.15 0.75,1.8 1.3,1.8" fill="#FFF"/>
    </svg>
);


export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md border-border/30 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-accent">Join Online School</CardTitle>
          <CardDescription>Start learning today - it's free to register!</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Input id="full-name" placeholder="Full Name" required  className="bg-secondary/50 border-border/50 h-12"/>
            </div>
            <div className="grid gap-2">
              <Input id="email" type="email" placeholder="Email Address" required className="bg-secondary/50 border-border/50 h-12" />
            </div>
            <div className="flex gap-2">
                 <Select defaultValue="+231">
                    <SelectTrigger className="w-[120px] bg-secondary/50 border-border/50 h-12">
                        <SelectValue>
                            <div className="flex items-center">
                                <LiberiaFlag />
                                +231
                            </div>
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="+231">
                            <div className="flex items-center">
                                <LiberiaFlag />
                                +231
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Input id="mobile-number" placeholder="Mobile Number" required className="bg-secondary/50 border-border/50 h-12 flex-1"/>
            </div>
            <div className="grid gap-2">
              <Input id="password" type="password" placeholder="Password" required className="bg-secondary/50 border-border/50 h-12" />
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:text-white"/>
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the <Link href="/privacy" className="underline text-accent hover:text-accent/80">Terms and Conditions</Link>
                </Label>
            </div>
            <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
              Register
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-accent hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
