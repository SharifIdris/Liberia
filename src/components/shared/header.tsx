import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { Logo } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Programs" },
  { href: "/apply/teacher", label: "Teach with Us" },
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
             {/* Dev-only Dashboard Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-slate-800 hover:text-white text-white/60 hover:text-white/80 transition-colors">
                  Dashboards
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Student</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teacher">Teacher</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin">Admin</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                   <Link href="/dashboard" className="text-lg hover:text-white/80">Student Dashboard</Link>
                   <Link href="/teacher" className="text-lg hover:text-white/80">Teacher Dashboard</Link>
                   <Link href="/admin" className="text-lg hover:text-white/80">Admin Dashboard</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" className="hover:bg-slate-800 hover:text-white">
              <Link href="/login">Log in</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
