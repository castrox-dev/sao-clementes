"use client";

import { useRef, useEffect, useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { Calendar, Star, Music, Trophy, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    year: "1961",
    title: "Fundação",
    description:
      "O Grêmio Recreativo Escola de Samba São Clemente foi fundado no bairro de Botafogo, Rio de Janeiro, por um grupo de apaixonados pelo samba.",
    icon: Star,
    color: "from-primary to-yellow-500",
  },
  {
    year: "1970",
    title: "Primeiros Carnavais",
    description:
      "A escola faz seus primeiros desfiles no Carnaval carioca, conquistando a comunidade com sua bateria vibrante e alegria contagiante.",
    icon: Music,
    color: "from-primary to-yellow-500",
  },
  {
    year: "1980",
    title: "Crescimento",
    description:
      "A São Clemente se consolida no cenário do samba, expandindo sua quadra e aumentando sua participação nos desfiles oficiais.",
    icon: Users,
    color: "from-primary to-yellow-500",
  },
  {
    year: "1990",
    title: "Era de Ouro",
    description:
      "A escola vive momentos memoráveis na Sapucaí, com desfiles emocionantes que marcam a história do Carnaval carioca.",
    icon: Trophy,
    color: "from-primary to-yellow-500",
  },
  {
    year: "2000",
    title: "Reconhecimento",
    description:
      "A São Clemente ganha destaque nacional, sendo reconhecida como uma das escolas mais autênticas e queridas do Rio de Janeiro.",
    icon: Star,
    color: "from-primary to-yellow-500",
  },
  {
    year: "2024",
    title: "O Futuro",
    description:
      "Com mais de 60 anos de história, a São Clemente segue inovando e levando a magia do samba para o mundo, unindo tradição e modernidade.",
    icon: Trophy,
    color: "from-primary to-yellow-500",
  },
];

function TimelineEvent({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={cn(
        "relative flex items-center w-full mb-16",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Content */}
      <AnimatedSection
        animation={isLeft ? "slide-in-left" : "slide-in-right"}
        delay={index * 0.15}
        duration={0.8}
        className={cn("w-full md:w-5/12", isLeft ? "md:pr-12" : "md:pl-12")}
      >
        <div className="relative p-6 md:p-8 rounded-2xl bg-dark-200/80 backdrop-blur-sm border border-dark-500 hover:border-primary/30 transition-all duration-500 group">
          {/* Year Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-heading font-bold mb-4">
            <Calendar className="w-3.5 h-3.5" />
            {event.year}
          </div>

          <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
            {event.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            {event.description}
          </p>

          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </AnimatedSection>

      {/* Center Dot (visible on md+) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark border-4 border-primary/50 shadow-lg shadow-primary/20 items-center justify-center z-10">
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>

      {/* Empty space for other side */}
      <div className="hidden md:block md:w-5/12" />
    </div>
  );
}

export function History() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-dark to-dark-100"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6">
            <Star className="w-3.5 h-3.5" />
            Nossa História
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Uma <span className="gradient-text">História</span> de Paixão
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Desde 1961, a São Clemente escreve sua trajetória com samba no pé e amor no coração.
            Conheça os momentos que marcaram nossa história.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          {/* Events */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="relative">
                {isMobile ? (
                  <div className="flex items-start gap-6 mb-12 ml-0">
                    {/* Mobile Dot */}
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
                    </div>
                    {/* Mobile Content */}
                    <AnimatedSection
                      animation="slide-in-right"
                      delay={index * 0.15}
                      duration={0.8}
                      className="flex-1 p-5 rounded-xl bg-dark-200/80 backdrop-blur-sm border border-dark-500 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-heading font-bold mb-3">
                        <Calendar className="w-3 h-3" />
                        {event.year}
                      </div>
                      <h3 className="text-lg font-heading font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </AnimatedSection>
                  </div>
                ) : (
                  <TimelineEvent event={event} index={index} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.5} className="text-center mt-16">
          <Link href="/escola">
            <Button variant="gold" size="lg" className="text-base">
              Conheça Mais da Nossa História
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
