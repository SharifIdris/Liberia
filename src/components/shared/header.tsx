
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Search } from "lucide-react";
import { Logo } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";

const navLinks = [
  { href: "/courses", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Support" },
  { href: "/apply/teacher", label: "Teach with Us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Liberia Learn
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
           <div className="flex-1 md:hidden">
             <Link href="/" className="flex items-center space-x-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="font-bold font-headline">Liberia Learn</span>
            </Link>
           </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <Logo className="h-8 w-8 text-primary" />
                  <span className="font-bold font-headline">Liberia Learn</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-lg hover:text-foreground/80">
                      {link.label}
                    </Link>
                  ))}
                   <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                       <button className="text-lg hover:text-foreground/80 flex items-center">
                          Dashboards <ChevronDown className="ml-2 h-4 w-4" />
                       </button>
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
                 <div className="mt-6 pt-6 border-t">
                    <Button asChild className="w-full mb-2">
                        <Link href="/login">Join Now</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                        <Link href="/login">Sign In</Link>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                <Input placeholder="Search" className="w-full md:w-[200px] lg:w-[300px] pl-9" />
            </div>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                     <DropdownMenuItem asChild>
                        <Link href="/login">Sign In</Link>
                    </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="/login">Join Now</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {navLinks.map(link => (
                        <DropdownMenuItem key={link.href} asChild>
                            <Link href={link.href}>{link.label}</Link>
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                             <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                Dashboards <ChevronDown className="ml-auto h-4 w-4" />
                            </DropdownMenuItem>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent sideOffset={8} alignOffset={-5}>
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

                </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
