"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import {
  Check,
  Users,
  Shield,
  Star,
  Crown,
  Diamond,
  Heart,
  ArrowRight,
  Sparkles,
  CreditCard,
} from "lucide-react";

const plans = [
  {
    id: "comunidade",
    name: "Comunidade",
    description: "Para quem quer fazer parte da nossa família",
    price: 0,
    period: "gratuito",
    icon: Heart,
    features: [
      "Newsletter exclusiva",
      "Acesso a conteúdo gratuito",
      "Notificações de eventos",
      "Participação em sorteios",
      "Acesso à área do torcedor",
    ],
    cta: "Entrar para Comunidade",
    popular: false,
  },
  {
    id: "torcedor",
    name: "Torcedor",
    description: "Para quem vive e respira São Clemente",
    price: 29.90,
    period: "mês",
    icon: Star,
    features: [
      "Todos os benefícios da Comunidade",
      "10% de desconto na loja oficial",
      "Pré-venda exclusiva de ingressos",
      "Carteirinha digital exclusiva",
      "Conteúdo exclusivo members-only",
      "Desconto em eventos",
    ],
    cta: "Assinar Plano",
    popular: true,
  },
  {
    id: "patrocinador",
    name: "Patrocinador",
    description: "Para quem quer apoiar nossa escola",
    price: 99.90,
    period: "mês",
    icon: Crown,
    features: [
      "Todos os benefícios do Torcedor",
      "20% de desconto na loja oficial",
      "Acesso VIP a eventos",
      "Nome no mural de patrocinadores",
      "Visitas guiadas ao barracão",
      "Kit exclusivo São Clemente",
      "Convite para ensaios técnicos",
    ],
    cta: "Seja Patrocinador",
    popular: false,
  },
  {
    id: "benemerito",
    name: "Benemérito",
    description: "Para quem faz parte da história",
    price: 499.90,
    period: "mês",
    icon: Diamond,
    features: [
      "Todos os benefícios do Patrocinador",
      "30% de desconto na loja oficial",
      "Acesso ilimitado a todos eventos",
      "Cadeira cativa na quadra",
      "Participação em decisões da escola",
      "Reconhecimento oficial como Benemérito",
      "Jantar anual com diretoria",
      "Placa de homenagem na quadra",
    ],
    cta: "Tornar-se Benemérito",
    popular: false,
  },
];

export function Membership() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-dark-100">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,212,0,0.05)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Seja Sócio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Faça Parte Dessa{" "}
            <span className="gradient-text">História</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Escolha o plano ideal para você e venha sambar com a gente. Cada plano oferece benefícios exclusivos para nossa comunidade.
          </p>
        </AnimatedSection>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center gap-3 p-1.5 rounded-xl bg-dark-300 border border-dark-500">
            <button
              onClick={() => setBilling("monthly")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                billing === "monthly"
                  ? "bg-primary text-dark shadow-lg"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Mensal
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                billing === "annual"
                  ? "bg-primary text-dark shadow-lg"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Anual
              <span className="ml-2 text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, i) => {
            const Icon = plan.icon;

            return (
              <AnimatedSection
                key={plan.id}
                animation="fade-in-up"
                delay={i * 0.1}
                className="relative"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge variant="gold" className="px-4 py-1.5 text-xs shadow-lg shadow-primary/25">
                      <Star className="w-3 h-3 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}

                <div
                  className={cn(
                    "relative h-full p-8 rounded-2xl border transition-all duration-500 group",
                    plan.popular
                      ? "bg-gradient-to-b from-dark-200 to-dark-300 border-primary/40 shadow-xl shadow-primary/10"
                      : "bg-dark-200/60 border-dark-500 hover:border-primary/30"
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-6 border transition-all duration-300",
                      plan.popular
                        ? "bg-primary/20 border-primary/30 text-primary"
                        : "bg-dark-300 border-dark-500 text-gray-400 group-hover:text-primary group-hover:border-primary/30"
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.price === 0 ? (
                      <span className="text-4xl font-heading font-black text-primary">Grátis</span>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-400">R$</span>
                        <span className="text-4xl font-heading font-black text-primary">
                          {plan.price.toFixed(0)}
                        </span>
                        <span className="text-sm text-gray-400">/{plan.period}</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={`/socios#${plan.id}`}>
                    <Button
                      variant={plan.popular ? "gold" : "outline"}
                      className="w-full"
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Extra Info */}
        <AnimatedSection animation="fade-in-up" className="text-center">
          <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-dark-300/50 border border-dark-500">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">
              Pagamento seguro via PIX, cartão de crédito ou boleto. Cancele quando quiser.
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
