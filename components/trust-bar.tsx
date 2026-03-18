import { ShieldCheck, Award, FileText, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function TrustBar() {
  return (
    <section className="py-10 bg-slate-900 text-white border-y border-slate-800">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 max-w-5xl mx-auto">
            
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm uppercase tracking-wider text-slate-300">Assurance</span>
                <span className="font-extrabold text-lg">Garantie Décennale</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-700"></div>

            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-xl">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm uppercase tracking-wider text-slate-300">Transparence</span>
                <span className="font-extrabold text-lg">Devis Clair & Détaillé</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-700"></div>

            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-xl">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm uppercase tracking-wider text-slate-300">Fiabilité</span>
                <span className="font-extrabold text-lg">Délais Respectés</span>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}