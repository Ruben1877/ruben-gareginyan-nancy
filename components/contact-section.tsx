import { MapPin, Phone, Mail, Clock, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden" id="contact">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 rounded-l-[100px] -z-10 hidden lg:block"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Contact Info */}
          <ScrollReveal direction="right">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 uppercase tracking-wider">
                <Zap className="h-4 w-4" /> Action Rapide
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                Votre projet mérite un artisan de confiance.
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Ne laissez pas votre rénovation au hasard. Appelez-nous directement ou décrivez votre projet en 2 minutes via le formulaire. Nous vous répondons avec une estimation précise.
              </p>
              
              <div className="space-y-6">
                <a href={`tel:${siteData.business.phone.replace(/\s/g, '')}`} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-soft-md border border-border group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-primary p-4 rounded-xl text-white shadow-soft-md group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl mb-1 group-hover:text-primary transition-colors">Ligne Directe</h3>
                    <p className="text-slate-500 font-medium">Réponse immédiate aux horaires d'ouverture</p>
                    <p className="text-primary font-black text-2xl mt-1">{siteData.business.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-soft-md border border-border">
                  <div className="bg-slate-100 p-4 rounded-xl text-slate-600">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl mb-1">Zone d'intervention</h3>
                    <p className="text-slate-600 font-medium text-lg">{siteData.business.city} et métropole (50km)</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form Card */}
          <ScrollReveal direction="left" delay={200}>
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-soft-2xl border border-slate-100 relative">
              <div className="absolute -top-6 -right-6 bg-accent text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-soft-lg transform rotate-12">
                <span className="font-black text-2xl leading-none">48h</span>
                <span className="text-xs font-bold uppercase tracking-wider">Devis</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-2 mt-2">Détaillez votre besoin</h3>
              <p className="text-slate-500 font-medium mb-8">Nous vous rappelons sous 2 heures ouvrées.</p>
              
              <form className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-bold text-slate-700">Votre nom</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-slate-900 placeholder:text-slate-400"
                    placeholder="Ex: Jean Dupont"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-slate-900 placeholder:text-slate-400"
                      placeholder="jean@exemple.fr"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700">Téléphone (Recommandé)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-slate-900 placeholder:text-slate-400"
                      placeholder="06 00 00 00 00"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Que souhaitez-vous réaliser ?</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none font-medium text-slate-900 placeholder:text-slate-400"
                    placeholder="Ex: Rénovation complète d'un appartement de 60m², peinture et sols..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white min-h-[64px] text-lg font-extrabold rounded-xl btn-shine mt-6 shadow-soft-lg group">
                  Demander mon devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <div className="flex items-center justify-center gap-2 mt-5 text-xs font-bold text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Vos informations sont strictement confidentielles.
                </div>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}