import { siteData } from "@/lib/site-data";
import { CTASection } from "@/components/cta-section";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Nos Services de Rénovation",
  description: "Découvrez tous les services de rénovation intérieure et extérieure proposés par Ruben Gareginyan à Nancy : peinture, menuiserie, isolation, etc."
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Services */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Nos Services de Rénovation</h1>
          <p className="text-xl text-slate-300">
            Une expertise complète pour tous vos projets d'aménagement et de rénovation à {siteData.business.city}.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Que vous souhaitiez rafraîchir une pièce ou entreprendre une rénovation totale de votre habitat, notre équipe maîtrise l'ensemble des corps de métier. Nous vous garantissons un interlocuteur unique et un résultat à la hauteur de vos exigences.
          </p>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {siteData.services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  
                  {/* Visual placeholder mapping to gallery to save assets */}
                  <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg bg-slate-200 relative">
                     <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                        <Icon className="w-32 h-32 text-primary/20" />
                     </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <h3 className="font-semibold text-foreground text-xl mb-4">Ce que cela inclut :</h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                          <span className="text-foreground/80 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Banner */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Un projet en tête ?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Nous nous déplaçons gratuitement sur {siteData.business.city} et ses alentours pour évaluer vos besoins.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}