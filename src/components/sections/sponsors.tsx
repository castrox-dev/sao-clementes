"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Handshake, ArrowRight, Sparkles, Shield } from "lucide-react";

const sponsors = [
  "LIESA",
  "Riotur",
  "Prefeitura RJ",
  "Governo RJ",
  "Carnaval 2026",
  "Sapucaí",
];

export function Sponsors() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-dark">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,212,0,0.03)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Patrocinadores
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Quem Acredita no <span className="gradient-text">Samba</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Empresas e instituições que apoiam a cultura e mantêm viva a tradição do samba.
          </p>
        </AnimatedSection>

        {/* Sponsor Logos */}
        <AnimatedSection animation="fade-in-up" delay={0.2} className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12">
          {sponsors.map((sponsor, i) => (
            <AnimatedSection
              key={sponsor}
              animation="scale-in"
              delay={0.3 + i * 0.1}
              className="group hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-28 md:w-36 h-16 md:h-20 rounded-xl bg-dark-300/50 border border-dark-500 flex items-center justify-center px-6 group-hover:border-primary/30 group-hover:bg-dark-300 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                <span className="text-sm md:text-base text-gray-600 group-hover:text-gray-400 font-medium tracking-wider transition-colors">
                  {sponsor}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </AnimatedSection>

        {/* Divider */}
        <div className="relative h-[1px] bg-gradient-to-r from-transparent via-dark-500 to-transparent mb-12" />

        {/* Become a Sponsor CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.4} className="text-center max-w-2xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-dark-300/80 to-dark-200/80 border border-dark-500">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
              Seja um Patrocinador
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Associe sua marca à magia do Carnaval carioca. A São Clemente oferece oportunidades únicas de patrocínio com visibilidade nacional e internacional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contato">
                <Button variant="gold" size="lg">
                  <Shield className="w-5 h-5" />
                  Quero Patrocinar
                </Button>
              </Link>
              <Link href="/socios">
                <Button variant="outline" size="lg">
                  Ver Planos de Patrocínio
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              Cuotas a partir de R$ 99,90/mês para pessoas físicas e planos personalizados para empresas.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
