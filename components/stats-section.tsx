import { siteData } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {siteData.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div className="flex flex-col items-center text-center px-4 group">
                  <div className="bg-white/10 p-4 rounded-2xl mb-5 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-white/20">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight drop-shadow-md">
                    <CountUp end={stat.value as number} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/90 font-semibold text-sm md:text-base uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}