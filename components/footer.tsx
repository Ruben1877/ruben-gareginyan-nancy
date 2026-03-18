import Link from "next/link";
import { Hammer, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteData } from "@/lib/site-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">
                  Ruben Gareginyan
                </span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              {siteData.business.description}
            </p>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={`tel:${siteData.business.phone.replace(/\s/g, '')}`} className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Phone className="h-5 w-5 text-primary group-hover:text-accent transition-colors shrink-0 mt-0.5" />
                  <span>{siteData.business.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteData.business.email}`} className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Mail className="h-5 w-5 text-primary group-hover:text-accent transition-colors shrink-0 mt-0.5" />
                  <span>{siteData.business.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{siteData.business.address}</span>
              </li>
            </ul>
          </div>

          {/* Navigation Col */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Liens Rapides</h3>
            <ul className="flex flex-col gap-3">
              {siteData.navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-primary transition-colors inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Col */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Horaires</h3>
            <div className="flex items-start gap-3 text-slate-400">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col gap-2">
                <p>{siteData.business.hours}</p>
                <div className="mt-2 inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30">
                  {siteData.business.emergency}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} {siteData.business.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <span>|</span>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}