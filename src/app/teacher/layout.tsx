
import Link from 'next/link';
import {
  Book,
  FileText,
  Clapperboard,
  Users,
  PanelLeft,
  User,
  UploadCloud,
  LayoutDashboard,
  Bell,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Card, CardContent } from '@/components/ui/card';


const navLinks = [
  { href: '/teacher', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
  { href: '/teacher/courses', label: 'My Courses', icon: <Book className="h-5 w-5" /> },
  { href: '/teacher/uploads', label: 'Uploads', icon: <UploadCloud className="h-5 w-5" /> },
  { href: '/teacher/assignments', label: 'Assignments', icon: <FileText className="h-5 w-5" /> },
  { href: '/teacher/sessions', label: 'Live Classes', icon: <Clapperboard className="h-5 w-5" /> },
  { href: '/teacher/students', label: 'Students', icon: <Users className="h-5 w-5" /> },
];

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-slate-900 text-white px-4 md:px-6">
        <div className="flex items-center gap-2">
            <Link
                href="/teacher"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-headline">TEACHER DASHBOARD</span>
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
                href="/teacher"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-headline">TEACHER</span>
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
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=40&h=40&fit=crop&crop=faces" alt="Evelyn Carter" data-ai-hint="teacher woman" />
                  <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Evelyn Carter</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/teacher/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
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
