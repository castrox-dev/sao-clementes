"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  CalendarDays,
  Clock,
  MapPin,
  Music,
  Utensils,
  Theater,
  Star,
  Ticket,
  QrCode,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Feijoada da São Clemente",
    date: "20 Jul 2026",
    time: "12:00",
    location: "Quadra da São Clemente",
    description: "Nossa tradicional feijoada com samba ao vivo. Venha celebrar conosco!",
    price: 79.90,
    type: "feijoada",
    icon: Utensils,
    image: null,
    featured: true,
    spots: 45,
  },
  {
    id: 2,
    title: "Ensaio Técnico - Carnaval 2026",
    date: "27 Jul 2026",
    time: "20:00",
    location: "Marquês de Sapucaí",
    description: "Ensaio técnico oficial na Sapucaí. Aberto para toda comunidade.",
    price: 49.90,
    type: "ensaio",
    icon: Music,
    image: null,
    featured: true,
    spots: 120,
  },
  {
    id: 3,
    title: "Noite de Samba",
    date: "3 Ago 2026",
    time: "19:00",
    location: "Quadra da São Clemente",
    description: "Noite especial com roda de samba, convidados especiais e muito mais.",
    price: 39.90,
    type: "show",
    icon: Theater,
    image: null,
    featured: false,
    spots: 80,
  },
  {
    id: 4,
    title: "Oficina de Bateria",
    date: "10 Ago 2026",
    time: "15:00",
    location: "Quadra da São Clemente",
    description: "Aprenda ritmos com nossos mestres bateristas. Aberto para iniciantes.",
    price: 29.90,
    type: "oficina",
    icon: Music,
    image: null,
    featured: false,
    spots: 30,
  },
];

const eventTypeColors: Record<string, string> = {
  feijoada: "from-orange-500/20 to-orange-600/10 border-orange-500/30",
  ensaio: "from-primary/20 to-yellow-600/10 border-primary/30",
  show: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
  oficina: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
};

function EventCard({ event, index }: { event: typeof upcomingEvents[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection
      animation="fade-in-up"
      delay={index * 0.1}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        hover
        className={cn(
          "overflow-hidden border-dark-500 h-full",
          isHovered && "border-primary/30"
        )}
      >
        {/* Header with Icon */}
        <div className={cn("p-6 border-b border-dark-500 bg-gradient-to-r", eventTypeColors[event.type])}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-dark-300/80 border border-dark-500 flex items-center justify-center">
                <event.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="gold" className="text-[10px]">
                    {event.spots} vagas
                  </Badge>
                  {event.featured && (
                    <Badge variant="premium" className="text-[10px]">Destaque</Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          {/* Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <CalendarDays className="w-4 h-4 text-primary" />
              {event.date}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Clock className="w-4 h-4 text-primary" />
              {event.time}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-primary" />
              {event.location}
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            {event.description}
          </p>

          {/* Price & Ticket */}
          <div className="flex items-center justify-between pt-4 border-t border-dark-500">
            <div>
              <span className="text-2xl font-heading font-bold text-primary">
                {formatPrice(event.price)}
              </span>
              <p className="text-xs text-gray-500">Ingresso digital com QR Code</p>
            </div>
            <Button variant="outline" size="sm" className="group/btn">
              <Ticket className="w-4 h-4" />
              Garantir Vaga
            </Button>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}

export function Events() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Eventos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Viva o <span className="gradient-text">Samba</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Ensaios, feijoadas, shows e eventos especiais. Garanta seu ingresso digital e faça parte da nossa comunidade.
          </p>
        </AnimatedSection>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {upcomingEvents.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: QrCode, title: "Ingresso Digital", desc: "QR Code exclusivo e seguro" },
            { icon: Ticket, title: "Compra Online", desc: "PIX, cartão ou boleto" },
            { icon: Star, title: "Pré-venda Exclusiva", desc: "Sócios têm descontos especiais" },
          ].map((feature, i) => (
            <AnimatedSection
              key={feature.title}
              animation="fade-in-up"
              delay={i * 0.1}
              className="flex items-center gap-4 p-4 rounded-xl bg-dark-300/30 border border-dark-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-semibold text-white">{feature.title}</h4>
                <p className="text-xs text-gray-400">{feature.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" className="text-center">
          <Link href="/eventos">
            <Button variant="gold" size="lg" className="text-base">
              Ver Todos os Eventos
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
