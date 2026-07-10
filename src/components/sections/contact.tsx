"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Phone, Mail, MapPin, Music, Sparkles } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/saoclementeoficial", icon: FaInstagram, label: "Instagram", handle: "@saoclementeoficial" },
  { href: "https://www.tiktok.com/@saoclementeoficial", icon: Music, label: "TikTok", handle: "@saoclementeoficial" },
  { href: "https://www.facebook.com/saoclementeoficial", icon: FaFacebookF, label: "Facebook", handle: "/saoclementeoficial" },
  { href: "https://x.com/oclementiano", icon: FaTwitter, label: "Twitter", handle: "@oclementiano" },
];

export function Contact() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-dark-100">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Fale com a <span className="gradient-text">Gente</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Tem dúvidas, sugestões ou quer fazer parte da nossa história? Entre em contato!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Contact Info */}
          <AnimatedSection animation="slide-in-left" className="space-y-4">
            {[
              { icon: Phone, title: "Telefone", value: "(21) 99999-9999", href: "tel:+5521999999999" },
              { icon: Mail, title: "Email", value: "contato@gressaoclemente.com.br", href: "mailto:contato@gressaoclemente.com.br" },
              { icon: MapPin, title: "Endereço", value: "Rio de Janeiro - RJ", href: "https://maps.google.com" },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "Endereço" ? "_blank" : undefined}
                rel={item.title === "Endereço" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 md:p-5 rounded-xl bg-dark-300/50 border border-dark-500 hover:border-primary/30 hover:bg-dark-300/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{item.title}</p>
                  <p className="text-sm md:text-base text-white group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </AnimatedSection>

          {/* Right: Social + Map */}
          <AnimatedSection animation="slide-in-right" className="space-y-6">
            <div>
              <h4 className="text-sm font-heading font-semibold text-white mb-4">Redes Sociais</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-dark-300/50 border border-dark-500 hover:border-primary/30 hover:bg-dark-300/80 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    <div>
                      <p className="text-xs text-gray-500">{social.handle}</p>
                      <p className="text-xs text-gray-600">{social.label}</p>
                    </div>
                  </a>
                ))}
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
    </section>
  );
}
