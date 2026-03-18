"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`tel:${siteData.business.phone.replace(/\s/g, '')}`}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-accent text-white rounded-full shadow-soft-xl transition-all duration-500 hover:bg-accent/90 md:hidden focus:outline-none focus:ring-4 focus:ring-accent/30 animate-gentle-pulse group px-4 py-3",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      )}
      aria-label="Appeler maintenant"
    >
      <Phone className="h-6 w-6" />
      <span className="font-bold text-sm tracking-wide">Devis Rapide</span>
    </a>
  );
}