import Link from "next/link";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-bold text-lg font-headline">Liberia Learn</span>
                </Link>
                <p className="text-muted-foreground text-sm">
                    Your gateway to quality education designed specifically for Liberian students.
                </p>
            </div>
             <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <Link href="/about" className="hover:text-primary">About</Link>
                    <Link href="/courses" className="hover:text-primary">Courses</Link>
                    <Link href="/community" className="hover:text-primary">Community</Link>
                    <Link href="/contact" className="hover:text-primary">Contact</Link>
                </nav>
             </div>
             <div>
                <h4 className="font-semibold mb-3">For Instructors</h4>
                <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                     <Link href="/apply/teacher" className="hover:text-primary">Teach with Us</Link>
                    <Link href="/teacher" className="hover:text-primary">Teacher Login</Link>
                </nav>
             </div>
              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                     <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
                </nav>
             </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t">
          © {new Date().getFullYear()} Liberia Learn. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
