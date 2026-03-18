import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Contactez-nous",
  description: "Contactez Ruben Gareginyan pour un devis gratuit de rénovation à Nancy. Téléphone, email et formulaire de contact."
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Contact */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact & Devis</h1>
          <p className="text-xl text-slate-300">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Direct Info Banner */}
      <section className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">
            Intervention rapide sur {siteData.business.city} et 50km aux alentours. 
            <span className="block sm:inline sm:ml-2 font-bold text-accent">Devis gratuit sous 48h.</span>
          </p>
        </div>
      </section>

      {/* Main Contact Section (Form + Info) */}
      <ContactSection />

      {/* Map / Area Section (Visual placeholder) */}
      <section className="py-20 bg-background border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Notre zone d'intervention</h2>
          <div className="max-w-4xl mx-auto bg-slate-200 rounded-2xl h-[400px] flex items-center justify-center shadow-inner relative overflow-hidden">
             {/* Fallback pattern for map */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#2563EB 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
             <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-soft-lg z-10 max-w-sm">
                <p className="font-bold text-xl text-foreground mb-2">Grand Nancy & Alentours</p>
                <p className="text-muted-foreground">Nous couvrons Nancy, Vandœuvre-lès-Nancy, Villers-lès-Nancy, Laxou, et jusqu'à 50km autour pour tous vos projets de rénovation.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </>
  );
}