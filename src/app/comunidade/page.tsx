import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Heart, Users, Music, BookOpen, Sparkles, ArrowRight, Calendar, Handshake } from "lucide-react";

const stats = [
  { number: "1000+", label: "Comunidade", icon: Users },
  { number: "200+", label: "Integrantes", icon: Heart },
  { number: "50+", label: "Eventos/Ano", icon: Calendar },
  { number: "30+", label: "Projetos Sociais", icon: BookOpen },
];

const actions = [
  { title: "Escola de Música", desc: "Aulas gratuitas de instrumentos musicais para crianças e adolescentes da comunidade." },
  { title: "Projeto Sambinha", desc: "Iniciação ao samba e à cultura carioca para crianças de 5 a 12 anos." },
  { title: "Oficina de Adereços", desc: "Capacitação profissional em produção de adereços e fantasias." },
  { title: "Feira Cultural", desc: "Eventos mensais com música, gastronomia e artesanato local." },
];

export default function ComunidadePage() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection animation="fade-in-up" className="mb-16">
          <div className="flex items-center gap-2 text-primary text-sm mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Comunidade</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
            Nossa <span className="gradient-text">Família</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg">
            A São Clemente é feita de pessoas. De cada integrante, de cada torcedor, de cada um que vibra e samba junto.
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
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-heading font-black text-primary">{stat.number}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>

        {/* Ações Comunitárias */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <AnimatedSection animation="slide-in-left" delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
              Ações <span className="gradient-text">Comunitárias</span>
            </h2>
            <div className="space-y-4">
              {actions.map((action) => (
                <div key={action.title} className="p-4 rounded-xl bg-dark-300/50 border border-dark-500 hover:border-primary/30 transition-all">
                  <h3 className="text-white font-heading font-semibold mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-400">{action.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-in-right" delay={0.3} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-dark-300 to-dark-400 border border-dark-500 flex items-center justify-center">
              <div className="text-center">
                <Music className="w-16 h-16 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-500">Nossa Comunidade</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="fade-in-up" className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-dark-300/80 to-dark-200/80 border border-dark-500">
          <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Quer Fazer Parte?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Junte-se à nossa comunidade e venha sambar com a gente. Temos programas para todos os perfis e idades.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/socios">
              <Button variant="gold" size="lg">
                <Heart className="w-5 h-5" /> Seja Sócio
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="outline" size="lg">
                Fale Conosco <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
