import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { CTASection } from "@/components/cta-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export const metadata = {
  title: "Galerie de Réalisations",
  description: "Parcourez nos photos de chantiers de rénovation à Nancy. Avant/Après, aménagement intérieur, salles de bain, cuisines."
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Gallery */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Notre Galerie</h1>
          <p className="text-xl text-slate-300">
            Découvrez nos plus belles transformations et laissez-vous inspirer pour votre propre projet.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque image témoigne de notre engagement envers la qualité et les finitions soignées. Explorez nos réalisations dans la région de {siteData.business.city}.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {siteData.gallery.map((image, index) => (
              <div key={index} className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-soft-md bg-white">
                <Image 
                  src={image.url} 
                  alt={image.alt} 
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <CTASection />
    </>
  );
}