"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({ 
  children, 
  className, 
  delay = 0, 
  direction = "up" 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case "up": return "translate-y-12";
      case "down": return "-translate-y-12";
      case "left": return "-translate-x-12";
      case "right": return "translate-x-12";
      case "none": return "";
      default: return "translate-y-12";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isRevealed ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getDirectionClass()}`,
        className
      )}
    >
      {children}
    </div>
  );
}