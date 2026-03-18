import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";

export function GallerySection() {
  // Take only 4 images for preview
  const previewImages = siteData.gallery.slice(0, 4);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos dernières réalisations
            </h2>
            <p className="text-lg text-muted-foreground">
              Découvrez la qualité de nos finitions à travers quelques-uns de nos récents chantiers de rénovation.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex min-h-[44px]">
            <Link href="/gallery">
              Voir toute la galerie
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-soft-md"
            >
              <Image 
                src={image.url} 
                alt={image.alt} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:hidden flex justify-center">
          <Button asChild variant="outline" className="w-full min-h-[44px]">
            <Link href="/gallery">
              Voir toute la galerie
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}