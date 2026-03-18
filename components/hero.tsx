import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-32">
      {/* Premium subtle background glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8 lg:col-span-7 relative z-10 lg:pr-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 w-fit">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                  </span>
                  <span className="text-sm font-bold text-green-800 tracking-wide">Disponible à {siteData.business.city}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-700 ml-1">5.0</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                La rénovation sans stress. <span className="text-primary relative inline-block whitespace-nowrap">
                  L'excellence garantie.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent"/></svg>
                </span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={300}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
                Oubliez les artisans injoignables et les chantiers qui s'éternisent. Depuis {siteData.business.yearsOfExperience} ans, nous transformons les habitats nancéiens avec une rigueur absolue et des devis transparents.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white min-h-[64px] text-lg px-8 shadow-soft-xl btn-shine rounded-2xl group">
                  <Link href="/contact">
                    Obtenir mon devis gratuit
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-2xl border border-border shadow-soft-sm">
                  <div className="bg-accent/10 p-2.5 rounded-xl text-accent">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-extrabold text-slate-900">Réponse rapide</span>
                    <span className="text-sm text-slate-500 font-medium">Devis envoyé sous 48h</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500}>
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 mt-4 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  Garantie Décennale
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Prix ferme et définitif
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Nettoyage quotidien
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image Grid */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            <ScrollReveal direction="left" delay={300}>
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft-2xl group">
                <Image 
                  src={siteData.gallery[0].url}
                  alt="Rénovation intérieure haut de gamme à Nancy"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                
                {/* Floating Trust Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-soft-xl border border-white/50 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150" 
                        alt="Ruben Gareginyan" 
                        width={48} 
                        height={48} 
                        className="rounded-full border-2 border-white shadow-sm object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 leading-tight">"Mon engagement : votre tranquillité d'esprit."</p>
                      <p className="text-sm font-semibold text-primary mt-1">Ruben G. - Artisan Fondateur</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}