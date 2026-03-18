import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-slate-900 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/20 text-accent font-bold text-sm mb-8 border border-accent/30 shadow-soft-md backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Artisans disponibles ce mois-ci
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Donnez vie à vos idées avec des experts certifiés.
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl">
              Obtenez une estimation gratuite et détaillée pour vos travaux à {siteData.business.city}. Nous vous accompagnons de A à Z avec la garantie d'un travail parfait.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center mb-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white min-h-[60px] text-lg px-8 shadow-soft-xl btn-shine rounded-xl">
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-slate-900 min-h-[60px] text-lg px-8 backdrop-blur-md rounded-xl font-bold">
                <a href={`tel:${siteData.business.phone.replace(/\s/g, '')}`}>
                  <PhoneCall className="mr-2 h-5 w-5" />
                  {siteData.business.phone}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2 text-white/80 font-semibold">
                <ShieldCheck className="h-6 w-6 text-green-400" />
                Garantie Décennale
              </div>
              <div className="flex items-center gap-2 text-white/80 font-semibold">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                Devis Transparent
              </div>
              <div className="flex items-center gap-2 text-white/80 font-semibold">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                Respect des Délais
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}