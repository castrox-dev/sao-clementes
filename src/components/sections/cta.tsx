"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ShoppingBag, Heart, ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-100 via-dark to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,212,0,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />

      {/* Decorative Rings - CSS animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[300px] h-[300px] border border-primary/10 rounded-full animate-ping-slow opacity-20" />
        <div className="w-[400px] h-[400px] border border-primary/5 rounded-full absolute -top-[50px] -left-[50px] animate-ping-slower opacity-20" />
        <div className="w-[500px] h-[500px] border border-primary/5 rounded-full absolute -top-[100px] -left-[100px] animate-ping-slowest opacity-10" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <AnimatedSection animation="fade-in-up" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          Junte-se a Nós
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection animation="fade-in-up" delay={0.2} className="text-5xl sm:text-6xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
          Faça Parte Dessa{" "}
          <span className="gradient-text">História</span>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection animation="fade-in-up" delay={0.3} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Vista a camisa, venha para a quadra, sinta a bateria na pele. A São Clemente é sua casa. 
          O samba espera por você.
        </AnimatedSection>

        {/* Buttons */}
        <AnimatedSection animation="fade-in-up" delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/loja">
            <Button
              variant="gold"
              size="xl"
              className="text-base px-12 shadow-2xl shadow-primary/25 hover:shadow-primary/40"
            >
              <ShoppingBag className="w-5 h-5" />
              Loja Oficial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/socios">
            <Button
              variant="outline-white"
              size="xl"
              className="text-base px-12 backdrop-blur-md"
            >
              <Heart className="w-5 h-5" />
              Seja Sócio
            </Button>
          </Link>
        </AnimatedSection>

        {/* Bottom Text */}
        <AnimatedSection animation="fade-in" delay={0.6} className="text-sm text-gray-500 mt-8">
          Junte-se a mais de 1.000 pessoas que já fazem parte da nossa comunidade
        </AnimatedSection>
      </div>
    </section>
  );
}
