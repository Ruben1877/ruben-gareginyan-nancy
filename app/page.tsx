import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { GallerySection } from "@/components/gallery-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteData } from "@/lib/site-data";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, HeartHandshake, Sparkles } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteData.business.name,
    "image": siteData.gallery[0].url,
    "description": siteData.business.description,
    "@id": "https://ruben-renovation-nancy.fr",
    "url": "https://ruben-renovation-nancy.fr",
    "telephone": siteData.business.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Place Stanislas",
      "addressLocality": "Nancy",
      "postalCode": "54000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.6936,
      "longitude": 6.1836
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Hero />
      <TrustBar />
      
      {/* Reassurance Pain-Points Section (New) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Pourquoi la majorité de nos clients viennent sur recommandation ?
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Parce que nous avons éliminé tout ce qui rend les travaux stressants.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.reassurance.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 100} direction="up">
                  <div className="bg-white p-8 rounded-[2rem] shadow-soft-sm border border-slate-100 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesSection />
      
      {/* Process Section - Upgraded */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Notre Méthodologie</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                3 étapes vers votre nouvel intérieur
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-1 bg-gradient-to-r from-slate-200 via-primary/30 to-slate-200 rounded-full -z-10"></div>
            
            {[
              { step: "1", title: "Visite & Devis (Gratuit)", desc: "Nous écoutons vos besoins sur place et vous envoyons un devis détaillé, ferme et définitif sous 48h." },
              { step: "2", title: "Travaux sans stress", desc: "Nos artisans interviennent selon un planning strict. Votre chef de chantier vous tient informé chaque semaine." },
              { step: "3", title: "Livraison impeccable", desc: "Nettoyage complet du chantier, inspection détaillée et remise des clés avec garantie décennale." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 200} direction="up">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-soft-md border border-slate-100 text-center relative group hover:-translate-y-2 transition-transform duration-500 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white font-black text-2xl flex items-center justify-center mx-auto mb-8 shadow-soft-lg group-hover:bg-primary transition-colors duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}