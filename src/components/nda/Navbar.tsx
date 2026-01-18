"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("nda_user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("nda_user");
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tighter text-white">NDA PREP</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Features</Link>
          <Link href="/mock-tests" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Mock Tests</Link>
          <Link href="/syllabus" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Syllabus</Link>
          <Link href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" className="text-white hover:bg-white/10">Dashboard</Button>
              </Link>
              <Button onClick={handleLogout} className="bg-white text-black hover:bg-zinc-200">Sign Out</Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:bg-white/10">Log in</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-white text-black hover:bg-zinc-200">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/#features" className="block text-sm font-medium text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="/mock-tests" className="block text-sm font-medium text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Mock Tests</Link>
            <Link href="/syllabus" className="block text-sm font-medium text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Syllabus</Link>
            <Link href="/pricing" className="block text-sm font-medium text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <div className="pt-4 border-t border-white/10 space-y-2">
              {user ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full text-white hover:bg-white/10">Dashboard</Button>
                  </Link>
                  <Button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full bg-white text-black hover:bg-zinc-200">Sign Out</Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full text-white hover:bg-white/10">Log in</Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-white text-black hover:bg-zinc-200">Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
