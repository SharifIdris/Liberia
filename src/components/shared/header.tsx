import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Programs" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-slate-900 text-white">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              eSchola Liberia
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white/80 text-white/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
           <div className="flex-1 md:hidden">
             <Link href="/" className="flex items-center space-x-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="font-bold font-headline">eSchola Liberia</span>
            </Link>
           </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-slate-800 hover:text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-slate-900 text-white border-r-slate-700">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <Logo className="h-8 w-8 text-primary" />
                  <span className="font-bold font-headline">eSchola Liberia</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-lg hover:text-white/80">
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/about" className="text-lg hover:text-white/80">About</Link>
                  <Link href="/contact" className="text-lg hover:text-white/80">Contact</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" className="hover:bg-slate-800 hover:text-white">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
