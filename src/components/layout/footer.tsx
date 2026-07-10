"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MapPin, Mail, Phone, ChevronRight, Music, Send } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const footerLinks = {
  institucional: {
    title: "Institucional",
    links: [
      { href: "/escola", label: "A Escola" },
      { href: "/escola#historia", label: "Nossa História" },
      { href: "/carnaval", label: "Carnaval" },
      { href: "/comunidade", label: "Comunidade" },
      { href: "/contato", label: "Contato" },
    ],
  },
  loja: {
    title: "Loja Oficial",
    links: [
      { href: "/loja", label: "Camisas" },
      { href: "/loja", label: "Acessórios" },
      { href: "/loja", label: "Fantasias" },
      { href: "/loja", label: "Instrumentos" },
      { href: "/loja", label: "Promoções" },
    ],
  },
  comunidade: {
    title: "Comunidade",
    links: [
      { href: "/socios", label: "Seja Sócio" },
      { href: "/eventos", label: "Eventos" },
      { href: "/galeria", label: "Galeria" },
      { href: "/noticias", label: "Notícias" },
    ],
  },
  suporte: {
    title: "Suporte",
    links: [
      { href: "/contato", label: "Fale Conosco" },
      { href: "/faq", label: "FAQ" },
      { href: "/trocas", label: "Trocas e Devoluções" },
      { href: "/privacidade", label: "Política de Privacidade" },
      { href: "/termos", label: "Termos de Uso" },
    ],
  },
};

const socialLinks = [
  { href: "https://www.instagram.com/saoclementeoficial", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/saoclementeoficial", icon: FaFacebookF, label: "Facebook" },
  { href: "https://x.com/oclementiano", icon: FaTwitter, label: "Twitter" },
  { href: "https://www.tiktok.com/@saoclementeoficial", icon: Music, label: "TikTok" },
  { href: "https://youtube.com/@saoclemente", icon: FaYoutube, label: "YouTube" },
];

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="relative bg-gradient-to-b from-dark to-dark-100 border-t border-dark-500/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <AnimatedSection
          animation="fade-in-up"
          className="relative mb-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-dark-300 to-dark-200 border border-dark-500 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                Fique por dentro de tudo
              </h3>
              <p className="text-gray-400 max-w-md">
                Receba novidades, eventos e ofertas exclusivas da São Clemente no seu email.
              </p>
            </div>              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
              <div className="relative flex-1 md:flex-none">
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  className="w-full md:min-w-[280px] bg-dark-400 border-dark-500 focus:border-primary/50"
                />
              </div>
              <Button variant="gold" className="shrink-0">
                <Send className="w-4 h-4" />
                Inscrever
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-dark-300 border-2 border-primary/30 flex items-center justify-center">
                  {logoError ? (
                    <span className="text-primary font-black text-sm font-heading">SC</span>
                  ) : (
                    <Image
                      src="/logo.png"
                      alt="GRES São Clemente"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                      onError={() => setLogoError(true)}
                    />
                  )}
                </div>
                <div className="absolute -inset-1 rounded-full border border-primary/20" />
              </div>
              <div>
                <span className="text-base font-heading font-bold text-white">São Clemente</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Mais que uma escola de samba. Uma comunidade que transforma paixão em história desde 1961.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-300 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-8 border-t border-dark-500 mb-8">
          <a href="tel:+5521999999999" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group">
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            (21) 99999-9999
          </a>
          <a href="mailto:contato@gressaoclemente.com.br" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group">
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            contato@gressaoclemente.com.br
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group">
            <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Rio de Janeiro - RJ
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-dark-500 mb-8">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Parceiros</span>
          {["LIESA", "Riotur", "Prefeitura RJ", "Carnaval 2026"].map((partner) => (
            <span
              key={partner}
              className="text-sm text-gray-500 hover:text-primary transition-colors cursor-default font-medium"
            >
              {partner}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-dark-500/50">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} GRES São Clemente. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
            <span>&bull;</span>
            <Link href="/termos" className="hover:text-primary transition-colors">Termos</Link>
            <span>&bull;</span>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
          <p className="text-xs text-gray-600">Feito com ❤️ e samba no pé</p>
        </div>
      </div>
    </footer>
  );
}
