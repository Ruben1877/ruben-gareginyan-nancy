import { 
  Hammer, 
  PaintRoller, 
  Ruler, 
  Wrench, 
  Shield, 
  Clock, 
  ThumbsUp, 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  HardHat,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Sparkles
} from "lucide-react";

export const siteData = {
  business: {
    name: "Ruben Gareginyan",
    trade: "Rénovation & Bâtiment",
    city: "Nancy",
    region: "Meurthe-et-Moselle",
    phone: "03 83 00 00 00",
    email: "contact@ruben-renovation-nancy.fr",
    address: "15 Place Stanislas, 54000 Nancy",
    hours: "Lun-Ven : 8h-18h",
    emergency: "Devis sous 48h garanti",
    yearsOfExperience: 15,
    tagline: "La rénovation sans stress. L'excellence garantie.",
    description: "Oubliez les chantiers interminables et les devis obscurs. Depuis 15 ans, nous transformons les habitats nancéiens avec une rigueur absolue, des délais respectés et une propreté irréprochable."
  },
  reassurance: [
    {
      title: "Devis ferme et détaillé",
      description: "Aucun surcoût caché. Vous savez exactement ce que vous payez.",
      icon: Zap
    },
    {
      title: "Garantie Décennale",
      description: "Vos travaux sont couverts et assurés pendant 10 ans.",
      icon: ShieldCheck
    },
    {
      title: "Interlocuteur unique",
      description: "Un seul chef de chantier joignable en permanence.",
      icon: HeartHandshake
    },
    {
      title: "Chantier impeccable",
      description: "Nettoyage quotidien pour minimiser votre inconfort.",
      icon: Sparkles
    }
  ],
  services: [
    {
      id: "renovation-complete",
      title: "Rénovation Complète",
      description: "Transformation intégrale de votre espace. Nous coordonnons tous les corps d'état pour une livraison clé en main, sans que vous ayez à gérer le moindre artisan.",
      icon: Home,
      features: ["Coordination totale", "Respect strict du planning", "Finitions haut de gamme"]
    },
    {
      id: "peinture-revetement",
      title: "Peinture & Revêtements",
      description: "Préparation minutieuse des supports et application de peintures professionnelles pour un rendu lisse, durable et sans aucun défaut visible.",
      icon: PaintRoller,
      features: ["Protection totale du mobilier", "Peintures écologiques", "Zéro trace garantie"]
    },
    {
      id: "revetement-sol",
      title: "Revêtements de Sol",
      description: "Pose millimétrée de parquets massifs, carrelages grands formats ou bétons cirés. Une planéité parfaite pour sublimer vos volumes.",
      icon: Ruler,
      features: ["Ragréage parfait", "Joints invisibles", "Matériaux premium"]
    },
    {
      id: "menuiserie",
      title: "Menuiserie sur Mesure",
      description: "Optimisation de chaque mètre carré avec la création de dressings, bibliothèques et rangements parfaitement intégrés à votre intérieur.",
      icon: Hammer,
      features: ["Design personnalisé", "Matériaux durables", "Ajustement au millimètre"]
    },
    {
      id: "isolation",
      title: "Isolation Thermique",
      description: "Réduisez vos factures d'énergie et gagnez en confort thermique et acoustique grâce à des isolants performants posés dans les règles de l'art.",
      icon: Shield,
      features: ["Bilan thermique inclus", "Matériaux biosourcés", "Confort immédiat"]
    },
    {
      id: "plomberie-electricite",
      title: "Plomberie & Électricité",
      description: "Mise en sécurité totale de vos installations. Création de réseaux fiables et invisibles pour vos nouvelles cuisines et salles de bain.",
      icon: Wrench,
      features: ["Norme NF C 15-100", "Tableaux sécurisés", "Matériel certifié"]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sophie Laurent",
      city: "Nancy Centre",
      rating: 5,
      text: "Quel soulagement ! Après une mauvaise expérience avec un autre artisan, l'équipe de Ruben a repris notre appartement. Ponctuels, polis, et un chantier laissé propre tous les soirs. Le résultat est parfait."
    },
    {
      id: 2,
      name: "Marc Dubois",
      city: "Vandœuvre-lès-Nancy",
      rating: 5,
      text: "Un devis clair reçu en 48h, aucune mauvaise surprise à la facturation, et des délais respectés au jour près pour notre salle de bain. C'est rare dans le bâtiment. Je recommande à 100%."
    },
    {
      id: 3,
      name: "Claire & Thomas",
      city: "Villers-lès-Nancy",
      rating: 5,
      text: "Nous avions peur de nous lancer dans une rénovation complète. Ruben a su nous rassurer, nous conseiller sur les matériaux, et a géré tout le stress à notre place. Notre maison est transformée."
    }
  ],
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200",
      alt: "Cuisine moderne rénovée avec îlot central et finitions parfaites"
    },
    {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200",
      alt: "Salon lumineux avec parquet massif fraîchement posé"
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
      alt: "Salle de bain contemporaine avec douche à l'italienne"
    },
    {
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
      alt: "Chambre parentale après travaux de peinture et d'aménagement"
    }
  ],
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/gallery" },
    { name: "Notre Approche", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  stats: [
    { value: 15, suffix: "+", label: "Années d'expertise", icon: Clock },
    { value: 500, suffix: "+", label: "Chantiers livrés", icon: CheckCircle },
    { value: 100, suffix: "%", label: "Garantie Décennale", icon: ShieldCheck },
    { value: 48, suffix: "h", label: "Pour votre devis", icon: Zap }
  ],
  faq: [
    {
      question: "Combien de temps a l'avance faut-il reserver ?",
      answer: "Je recommande de reserver entre 6 et 18 mois a l'avance, surtout pour les mariages en haute saison (mai-septembre). Contactez-moi le plus tot possible pour verifier la disponibilite de votre date."
    },
    {
      question: "Combien de photos recevrons-nous ?",
      answer: "Pour un reportage mariage complet, vous recevrez entre 400 et 600 photos retouchees avec soin, livrees via une galerie en ligne privee accessible pendant 1 an."
    },
    {
      question: "Vous deplacez-vous en dehors de Nancy ?",
      answer: "Oui, je me deplace partout en Lorraine et dans toute la France. Les frais de deplacement sont integres au devis selon la distance."
    },
    {
      question: "Dans quel delai recevrons-nous nos photos ?",
      answer: "La galerie complete est livree sous 4 a 6 semaines apres votre mariage. Pour la seance engagement, comptez 2 a 3 semaines."
    },
    {
      question: "Proposez-vous des albums photo ?",
      answer: "Oui, je propose des albums photo haut de gamme imprimes en Italie, disponibles en option. Contactez-moi pour les tarifs et les modeles disponibles."
    },
    {
      question: "Que se passe-t-il si la meteo est mauvaise ?",
      answer: "La lumiere douce et les cieux couverts donnent souvent de tres belles photos. En cas de pluie intense, nous nous adaptons : interieur, parapluies, ou report si votre planning le permet."
    }
  ]
};