
import Link from 'next/link';
import {
  Bell,
  Home,
  Users,
  Book,
  User,
  FileText,
  CreditCard,
  BarChart3,
  PanelLeft,
  Settings,
  BellRing,
  Award,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { logout } from '@/app/login/actions';

const navLinks = [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/courses", label: "Courses", icon: Book },
    { href: "/admin/enrollments", label: "Enrollments", icon: FileText },
    { href: "/admin/teachers", label: "Teachers", icon: User },
    { href: "/admin/students", label: "Students", icon: Users },
    { href: "/admin/payments", label: "Payments", icon: CreditCard },
    { href: "/admin/reports", label: "Reports", icon: BarChart3 },
    { href: "/admin/notifications", label: "Notifications", icon: BellRing },
    { href: "/admin/certificates", label: "Certificates", icon: Award },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
       <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Logo className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">eSchola Liberia</span>
          </Link>
          <TooltipProvider>
            {navLinks.map(link => (
                <Tooltip key={link.href}>
                    <TooltipTrigger asChild>
                        <Link
                        href={link.href}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.label}</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{link.label}</TooltipContent>
                </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-slate-900 text-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-slate-900 sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden text-slate-900">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs bg-slate-900 text-white border-r-slate-700">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Logo className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">eSchola Liberia</span>
                </Link>
                {navLinks.map(link => (
                     <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-4 px-2.5 text-white/70 hover:text-white"
                    >
                        <link.icon className="h-5 w-5" />
                        {link.label}
                    </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
           <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-2xl font-headline">Admin Panel</h1>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full bg-transparent text-white hover:bg-slate-800 hover:text-white border-slate-700"
          >
           <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full bg-slate-800 hover:bg-slate-700">
                <User className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
               <DropdownMenuItem>
                 <form action={logout}>
                  <button type="submit" className="w-full text-left">Logout</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
