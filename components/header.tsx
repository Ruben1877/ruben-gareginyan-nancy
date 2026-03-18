"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Hammer } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/90 backdrop-blur-lg shadow-soft-sm border-b border-border py-2" 
          : "bg-transparent border-b border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2.5 rounded-xl group-hover:bg-accent group-hover:scale-105 transition-all duration-300 shadow-soft-md">
            <Hammer className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-bold text-lg leading-tight transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-foreground lg:text-slate-900"
            )}>
              Ruben Gareginyan
            </span>
            <span className={cn(
              "text-xs font-medium transition-colors duration-300",
              isScrolled ? "text-muted-foreground" : "text-muted-foreground lg:text-slate-700"
            )}>
              Rénovation & Bâtiment
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-border/50 shadow-soft-sm">
          {siteData.navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-all hover:text-primary relative group",
                pathname === item.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left",
                pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-white shadow-soft-md min-h-[44px] btn-shine rounded-full px-6">
            <a href={`tel:${siteData.business.phone.replace(/\s/g, '')}`}>
              <Phone className="mr-2 h-4 w-4" />
              <span className="font-semibold">{siteData.business.phone}</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl transition-colors backdrop-blur-md",
            isScrolled ? "bg-muted text-foreground" : "bg-white/50 text-foreground"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu principal"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b shadow-soft-xl px-4 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-2">
            {siteData.navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "p-4 rounded-xl text-base font-semibold transition-colors flex items-center justify-between",
                  pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t mt-2">
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white min-h-[56px] text-base rounded-xl btn-shine">
              <a href={`tel:${siteData.business.phone.replace(/\s/g, '')}`}>
                <Phone className="mr-2 h-5 w-5" />
                Appeler le {siteData.business.phone}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}