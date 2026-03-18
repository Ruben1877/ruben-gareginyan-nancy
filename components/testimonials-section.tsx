import { Star, Quote } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Premium dark pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-bold text-white tracking-wide">Noté 5.0/5 par nos clients</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ne nous croyez pas sur parole.
            </h2>
            <p className="text-lg text-slate-300 font-medium leading-relaxed">
              La meilleure preuve de notre sérieux, ce sont les clients qui dorment sur leurs deux oreilles dans leur intérieur fraîchement rénové.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.testimonials.slice(0,3).map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 150} direction="up">
              <div className="bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-8 border border-white/10 hover:bg-white/10 transition-colors duration-500 flex flex-col h-full relative">
                <Quote className="absolute top-8 right-8 h-12 w-12 text-white/5" />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-accent text-accent" : "fill-white/20 text-white/20"}`} 
                    />
                  ))}
                </div>
                
                <p className="text-slate-200 italic mb-8 flex-grow font-medium leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg shadow-inner">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-extrabold text-white">{testimonial.name}</div>
                    <div className="text-sm font-semibold text-slate-400">{testimonial.city}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}