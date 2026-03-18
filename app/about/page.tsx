import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { CTASection } from "@/components/cta-section";
import { StatsSection } from "@/components/stats-section";
import { Shield, Target, Users } from "lucide-react";

export const metadata = {
  title: "À Propos",
  description: "Découvrez l'histoire et les valeurs de l'entreprise de rénovation Ruben Gareginyan, votre artisan de confiance à Nancy."
};

export default function AboutPage() {
  return (
    <>
      {/* Hero About */}
      <section className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Notre Histoire</h1>
          <p className="text-xl text-slate-300">
            L'artisanat de qualité au service de votre confort depuis plus de {siteData.business.yearsOfExperience} ans.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Une passion pour la belle ouvrage</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Fondée avec la volonté de redonner ses lettres de noblesse à l'artisanat local, l'entreprise <strong>Ruben Gareginyan Rénovation</strong> s'est imposée comme une référence incontournable à {siteData.business.city} et dans tout le Grand Est.
                </p>
                <p>
                  Notre approche est simple : chaque projet est unique et mérite une attention particulière. Nous refusons le travail à la chaîne pour privilégier le sur-mesure, l'écoute et le respect des règles de l'art.
                </p>
                <p>
                  Aujourd'hui, notre équipe rassemble des compagnons passionnés, couvrant tous les métiers de la rénovation, pour vous offrir une prestation globale sans faille.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft-xl">
              <Image 
                src="https://images.unsplash.com/photo-1541888086925-ebbc2c0b59b4?auto=format&fit=crop&q=80&w=800" 
                alt="Équipe d'artisans au travail" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-lg text-muted-foreground">Ce qui nous anime au quotidien sur nos chantiers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Intégrité</h3>
              <p className="text-muted-foreground">Des devis clairs, sans coûts cachés. Nous respectons nos engagements et assumons nos responsabilités.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-soft-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">Le souci du détail est notre marque de fabrique. Nous ne quittons un chantier que lorsque le résultat est parfait.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-soft-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proximité</h3>
              <p className="text-muted-foreground">Ancrés à {siteData.business.city}, nous privilégions une relation de confiance et de proximité avec nos clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}