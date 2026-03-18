"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir avant de lancer votre projet de rénovation.
          </p>
        </div>

        <div className="space-y-4">
          {siteData.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={cn(
                  "border rounded-xl overflow-hidden transition-colors duration-200",
                  isOpen ? "border-primary bg-primary/5" : "border-border bg-white hover:border-primary/50"
                )}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground pr-8">{item.question}</span>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-primary shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180" : ""
                    )} 
                  />
                </button>
                <div 
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}