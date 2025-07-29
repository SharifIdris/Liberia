import Link from "next/link";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold text-lg font-headline">Online School</span>
          </div>
          <nav className="flex gap-4 mb-4 md:mb-0 text-sm text-muted-foreground">
            <Link href="/courses" className="hover:text-primary">Programs</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          </nav>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-4 pt-4 border-t border-border/40">
          © {new Date().getFullYear()} Online School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
