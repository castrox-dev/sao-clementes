import { AnimatedSection } from "@/components/ui/animated-section";
import { Phone, Mail, MapPin, Music, Sparkles } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const contactInfo = [
  { icon: Phone, title: "Telefone", value: "(21) 99999-9999", href: "tel:+5521999999999" },
  { icon: Mail, title: "Email", value: "contato@gressaoclemente.com.br", href: "mailto:contato@gressaoclemente.com.br" },
  { icon: MapPin, title: "Endereço", value: "Rio de Janeiro - RJ", href: "https://maps.google.com" },
];

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection animation="fade-in-up" className="mb-12">
          <div className="flex items-center gap-2 text-primary text-sm mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Contato</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Fale com a <span className="gradient-text">Gente</span>
          </h1>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <AnimatedSection key={item.title} animation="slide-in-left" delay={i * 0.1}>
                <a
                  href={item.href}
                  className="flex items-center gap-4 p-5 rounded-xl bg-dark-300/50 border border-dark-500 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.title}</p>
                    <p className="text-white group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Right: Social + Map */}
          <AnimatedSection animation="slide-in-right" delay={0.2} className="space-y-6">
            <div>
              <h4 className="text-sm font-heading font-semibold text-white mb-4">Redes Sociais</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.instagram.com/saoclementeoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-dark-300/50 border border-dark-500 hover:border-primary/30 transition-all group"
                >
                  <FaInstagram className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                  <span className="text-sm text-gray-400">@saoclemente</span>
                </a>
                <a
                  href="https://www.tiktok.com/@saoclementeoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-dark-300/50 border border-dark-500 hover:border-primary/30 transition-all group"
                >
                  <Music className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                  <span className="text-sm text-gray-400">@saoclemente</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-heading font-semibold text-white mb-4">Localização</h4>
              <div className="rounded-xl bg-dark-300 border border-dark-500 h-48 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Rio de Janeiro - RJ</p>
                  <p className="text-xs text-gray-700">Mapa interativo</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
