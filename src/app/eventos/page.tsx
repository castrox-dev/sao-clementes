import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { formatPrice } from "@/lib/utils";
import {
  CalendarDays,
  Clock,
  MapPin,
  Music,
  Utensils,
  Theater,
  Ticket,
  Sparkles,
} from "lucide-react";

const allEvents = [
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
    spots: 120,
  },
  {
    id: 3,
    title: "Noite de Samba",
    date: "3 Ago 2026",
    time: "19:00",
    location: "Quadra da São Clemente",
    description: "Noite especial com roda de samba e convidados especiais.",
    price: 39.90,
    type: "show",
    icon: Theater,
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
    spots: 30,
  },
  {
    id: 5,
    title: "Visita ao Barracão",
    date: "17 Ago 2026",
    time: "10:00",
    location: "Cidade do Samba",
    description: "Conheça os bastidores da produção do Carnaval 2026.",
    price: 59.90,
    type: "evento",
    icon: Theater,
    spots: 25,
  },
  {
    id: 6,
    title: "Roda de Samba Especial",
    date: "24 Ago 2026",
    time: "18:00",
    location: "Quadra da São Clemente",
    description: "Roda de samba com convidados especiais e muito pagode.",
    price: 19.90,
    type: "show",
    icon: Music,
    spots: 100,
  },
];

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection animation="fade-in-up" className="mb-12">
          <div className="flex items-center gap-2 text-primary text-sm mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Eventos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Viva o <span className="gradient-text">Samba</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Ensaios, feijoadas, shows e eventos especiais. Garanta seu ingresso digital e faça parte.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents.map((event, i) => (
            <AnimatedSection
              key={event.id}
              animation="fade-in-up"
              delay={i * 0.1}
            >
              <Card hover className="overflow-hidden border-dark-500 h-full group">
                <div className="p-6 bg-gradient-to-r from-primary/10 to-transparent border-b border-dark-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-dark-300 border border-dark-500 flex items-center justify-center">
                      <event.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white">{event.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="gold" className="text-[10px]">{event.spots} vagas</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5 space-y-4">
                  <div className="space-y-2">
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
                  <p className="text-sm text-gray-400">{event.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-dark-500">
                    <div>
                      <span className="text-2xl font-bold text-primary">{formatPrice(event.price)}</span>
                      <p className="text-xs text-gray-500">Ingresso digital</p>
                    </div>
                    <Button variant="gold" size="sm">
                      <Ticket className="w-4 h-4" /> Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
