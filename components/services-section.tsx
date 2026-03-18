import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ServicesSection() {
  const previewServices = siteData.services.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">Nos Compétences</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Une expertise globale pour des finitions parfaites
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Fini le stress de coordonner plusieurs artisans. Nous couvrons l'ensemble des corps de métier pour vous offrir une prestation clé en main, réalisée dans les règles de l'art.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex min-h-[56px] rounded-xl border-2 hover:bg-slate-50 font-bold text-slate-900 group">
              <Link href="/services">
                Voir tous nos services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {previewServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 150} direction="up">
                <Link href={`/services#${service.id}`} className="block h-full">
                  <div className="group relative bg-slate-50 border-2 border-transparent hover:border-primary/20 rounded-[2.5rem] p-8 md:p-10 shadow-soft-sm hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden flex flex-col bg-white">
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 rounded-full bg-primary/5 transition-transform duration-700 ease-out group-hover:scale-[3] -z-10"></div>
                    
                    <div className="relative z-10 flex-grow">
                      <div className="bg-white border border-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-primary shadow-soft-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                        <Icon className="h-8 w-8" />
                      </div>
                      
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm font-bold text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="relative z-10 mt-auto pt-6 border-t border-slate-200 flex items-center font-extrabold text-primary group-hover:text-accent transition-colors">
                      Découvrir ce service
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
          <Button asChild variant="outline" className="w-full min-h-[60px] rounded-xl border-2 text-lg font-extrabold">
            <Link href="/services">
              Voir tous nos services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}