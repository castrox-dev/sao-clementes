import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Calendar, Music, Users, Trophy, Star, ArrowRight } from "lucide-react";

const stats = [
  { number: "64+", label: "Anos de História", icon: Calendar },
  { number: "1000+", label: "Comunidade", icon: Users },
  { number: "5", label: "Títulos", icon: Trophy },
  { number: "∞", label: "Paixão", icon: Music },
];

const directors = [
  { name: "Presidente", title: "Presidente", period: "2024 - Atual" },
  { name: "Vice-Presidente", title: "Vice-Presidente", period: "2024 - Atual" },
  { name: "Dir. Carnaval", title: "Diretor de Carnaval", period: "2024 - Atual" },
  { name: "Dir. Financeiro", title: "Diretor Financeiro", period: "2024 - Atual" },
];

export default function EscolaPage() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection animation="fade-in-up" className="mb-16">
          <div className="flex items-center gap-2 text-primary text-sm mb-2">
            <Star className="w-4 h-4" />
            <span>A Escola</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
            Nossa <span className="gradient-text">História</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg">
            Fundada em 1961 no bairro de Botafogo, a GRES São Clemente é mais que uma escola de samba.
            Somos uma comunidade que transforma paixão em história há mais de seis décadas.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              animation="fade-in-up"
              delay={i * 0.1}
              className="p-6 rounded-xl bg-dark-300/50 border border-dark-500 text-center"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-heading font-black text-primary">{stat.number}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>

        {/* História */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation="slide-in-left" delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
              A Trajetória da <span className="gradient-text">São Clemente</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                O Grêmio Recreativo Escola de Samba São Clemente foi fundado em 1961, no bairro de Botafogo, 
                Zona Sul do Rio de Janeiro. Desde sua origem, a escola carrega a missão de preservar e difundir 
                a cultura do samba, unindo gerações em torno da paixão pelo Carnaval.
              </p>
              <p>
                Ao longo de mais de seis décadas, a São Clemente construiu uma história de superação, 
                alegria e amor ao samba. Nossos desfiles na Marquês de Sapucaí são marcados pela energia 
                contagiante da bateria, pela elegância do casal de mestre-sala e porta-bandeira, e pela 
                emoção de toda comunidade que vive intensamente cada carnaval.
              </p>
              <p>
                Mais que uma escola de samba, a São Clemente é uma família. É o lugar onde crianças 
                aprendem a batucar, onde jovens descobrem a magia do samba, e onde todos encontram 
                um espaço para celebrar a vida e a cultura brasileira.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-in-right" delay={0.3} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-dark-300 to-dark-400 border border-dark-500 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-dark-400 border-2 border-dark-500 flex items-center justify-center mb-3">
                  <span className="text-3xl font-black text-primary font-heading">SC</span>
                </div>
                <p className="text-gray-500">Quadra da São Clemente</p>
                <p className="text-sm text-gray-600">Botafogo - Rio de Janeiro</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Presidents */}
        <AnimatedSection animation="fade-in-up" delay={0.4} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 text-center">
            Nossa <span className="gradient-text">Diretoria</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {directors.map((person, i) => (
              <AnimatedSection
                key={person.name}
                animation="fade-in-up"
                delay={0.5 + i * 0.1}
                className="p-6 rounded-xl bg-dark-300/50 border border-dark-500 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary font-heading">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-white">{person.name}</h4>
                <p className="text-sm text-gray-400">{person.title}</p>
                <p className="text-xs text-gray-500 mt-1">{person.period}</p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" className="text-center">
          <Link href="/carnaval">
            <Button variant="gold" size="lg">
              Conheça Nossos Carnavais <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
