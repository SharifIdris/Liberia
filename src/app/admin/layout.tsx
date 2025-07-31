
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
import { Card, CardContent } from '@/components/ui/card';


const navLinks = [
    { href: "/admin", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { href: "/admin/courses", label: "Courses", icon: <Book className="h-5 w-5" /> },
    { href: "/admin/enrollments", label: "Enrollments", icon: <FileText className="h-5 w-5" /> },
    { href: "/admin/teachers", label: "Teachers", icon: <User className="h-5 w-5" /> },
    { href: "/admin/students", label: "Students", icon: <Users className="h-5 w-5" /> },
    { href: "/admin/payments", label: "Payments", icon: <CreditCard className="h-5 w-5" /> },
    { href: "/admin/reports", label: "Reports", icon: <BarChart3 className="h-5 w-5" /> },
    { href: "/admin/notifications", label: "Notifications", icon: <BellRing className="h-5 w-5" /> },
    { href: "/admin/certificates", label: "Certificates", icon: <Award className="h-5 w-5" /> },
    { href: "/admin/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-slate-900 text-white px-4 md:px-6">
         <div className="flex items-center gap-2">
            <Link
                href="/admin"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-headline">ADMIN PANEL</span>
            </Link>
         </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden text-slate-900"
            >
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-slate-900 text-white border-r-slate-700">
            <nav className="grid gap-6 text-lg font-medium">
               <Link
                href="/admin"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-headline">ADMIN</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/70 transition-all hover:text-white"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
           <div className="ml-auto flex-1 sm:flex-initial">
             {/* Future search bar can go here */}
          </div>
           <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white/70 hover:text-white hover:bg-slate-800"
          >
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
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
                 <button className="w-full text-left">Logout</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
       <div className="flex flex-1">
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="p-4">
            <Card>
                <CardContent className="p-2">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Button key={link.href} variant="ghost" className="justify-start gap-2" asChild>
                                <Link href={link.href}>
                                    {link.icon}
                                    {link.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </CardContent>
            </Card>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-8 bg-muted/40">
          {children}
        </main>
      </div>
    </div>
  );
}
