"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ end, suffix = "", duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrame: number;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutQuart easing function
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * end));
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(step);
            }
          };
          animationFrame = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}