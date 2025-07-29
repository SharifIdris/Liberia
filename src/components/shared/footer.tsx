import Link from "next/link";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo className="h-8 w-8 mr-2 text-primary" />
            <span className="font-bold text-lg font-headline">eSchola Liberia</span>
          </div>
          <nav className="flex gap-4 mb-4 md:mb-0 text-sm text-white/60 flex-wrap justify-center">
            <Link href="/courses" className="hover:text-white">Programs</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/community" className="hover:text-white">Community</Link>
            <Link href="/support" className="hover:text-white">Support</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </nav>
        </div>
        <div className="text-center text-sm text-white/60 mt-4 pt-4 border-t border-slate-700">
          © {new Date().getFullYear()} eSchola Liberia. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
