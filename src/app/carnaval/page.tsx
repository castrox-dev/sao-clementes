import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Calendar, Music, Trophy, Shirt, Sparkles, ArrowRight, Clock } from "lucide-react";

const carnivalYears = [
  { year: "2025", theme: "A São Clemente no Carnaval 2025", classification: "Série Ouro" },
  { year: "2024", theme: "Carnaval 2024 - Homenagem", classification: "Série Ouro" },
  { year: "2023", theme: "Carnaval 2023 - Tradição", classification: "Série Ouro" },
  { year: "2022", theme: "Carnaval 2022 - Reencontro", classification: "Série Ouro" },
];

const infoLinks = [
  { title: "Barracão", description: "Conheça o barracão onde a magia acontece", cta: "Agendar Visita", href: "/contato" },
  { title: "Ensaios", description: "Ensaios abertos toda quinta-feira na quadra", cta: "Ver Agenda", href: "/eventos" },
  { title: "Fantasias", description: "Adquira sua fantasia oficial do Carnaval 2026", cta: "Comprar Agora", href: "/loja" },
];

export default function CarnavalPage() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection animation="fade-in-up" className="mb-16">
          <div className="flex items-center gap-2 text-primary text-sm mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Carnaval</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
            A <span className="gradient-text">Magia</span> do Carnaval
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg">
            A São Clemente na Marquês de Sapucaí. Desfiles memoráveis, emoção pura e a bateria que faz o chão tremer.
          </p>
        </AnimatedSection>

        {/* Destaque 2026 */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-dark-300 to-dark-400 border border-primary/30 p-8 md:p-12 mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium mb-4">
                <Clock className="w-3.5 h-3.5" />
                Carnaval 2026
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                É Tempo de Sambar
              </h2>
              <p className="text-gray-300 mb-6">
                O maior espetáculo da Terra está chegando. Prepare sua fantasia, afine seu instrumento e venha fazer parte dessa história na Sapucaí.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/loja/fantasias">
                  <Button variant="gold" size="lg">
                    <Shirt className="w-5 h-5" /> Comprar Fantasia
                  </Button>
                </Link>
                <Link href="/eventos">
                  <Button variant="outline" size="lg">
                    <Calendar className="w-5 h-5" /> Ver Ensaios
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block p-6 rounded-2xl bg-dark-300/50 border border-dark-500">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-4 shadow-xl shadow-primary/30">
                  <span className="text-3xl font-black text-dark font-heading">SC</span>
                </div>
                <p className="text-sm text-gray-400">28 de Fevereiro de 2026</p>
                <p className="text-sm text-primary font-semibold">Marquês de Sapucaí</p>
              </div>
            </div>
          </div>
        </div>

        {/* Histórico de Carnavais */}
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8">
          Nossos <span className="gradient-text">Carnavais</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {carnivalYears.map((carnival, i) => (
            <AnimatedSection
              key={carnival.year}
              animation="fade-in-up"
              delay={i * 0.1}
              className="p-6 rounded-xl bg-dark-300/50 border border-dark-500 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Music className="w-4 h-4 text-primary" />
                    <span className="text-2xl font-heading font-black text-primary">{carnival.year}</span>
                  </div>
                  <h3 className="text-white font-heading font-semibold mb-1">{carnival.theme}</h3>
                  <Badge variant="secondary" className="text-[10px]">{carnival.classification}</Badge>
                </div>
                <Trophy className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Info Links */}
        <div className="grid sm:grid-cols-3 gap-4">
          {infoLinks.map((item, i) => (
            <AnimatedSection
              key={item.title}
              animation="fade-in-up"
              delay={0.2 + i * 0.1}
              className="p-6 rounded-xl bg-dark-300/50 border border-dark-500 text-center"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{item.description}</p>
              <Link href={item.href}>
                <Button variant="outline" size="sm">{item.cta}</Button>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
