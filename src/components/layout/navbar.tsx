"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ShoppingBag,
  ChevronRight,
  Music,
  Mail,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/escola", label: "A Escola" },
  { href: "/carnaval", label: "Carnaval" },
  { href: "/comunidade", label: "Comunidade" },
  { href: "/eventos", label: "Eventos" },
  { href: "/loja", label: "Loja Oficial" },
  { href: "/noticias", label: "Notícias" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-16 md:h-20",
          scrolled
            ? "bg-dark/95 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-dark-500/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="relative w-14 h-14 md:w-16 md:h-16">
                <div className="absolute inset-0 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                  {logoError ? (
                    <span className="text-primary font-black text-lg md:text-xl font-heading">SC</span>
                  ) : (
                    <Image
                      src="/logo.png"
                      alt="GRES São Clemente"
                      fill
                      className="object-cover scale-125"
                      onError={() => setLogoError(true)}
                      priority
                    />
                  )}
                </div>

              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm md:text-base font-heading font-bold text-white leading-tight">
                  São Clemente
                </h1>
                <p className="text-[8px] md:text-[10px] tracking-[0.2em] uppercase font-medium text-primary leading-tight">
                  Desde 1961
                </p>
              </div>
            </Link>

            {/* Center: Key nav links (desktop) */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { href: "/escola", label: "A Escola" },
                { href: "/carnaval", label: "Carnaval" },
                { href: "/eventos", label: "Eventos" },
                { href: "/loja", label: "Loja" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 group",
                    scrolled
                      ? "text-gray-300 hover:text-white"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3" />
                </Link>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-1 md:gap-2">
              <a
                href="https://www.instagram.com/saoclementeoficial"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden md:inline-flex w-9 h-9 rounded-lg items-center justify-center transition-all duration-300",
                  scrolled
                    ? "text-gray-400 hover:text-primary hover:bg-dark-300"
                    : "text-white/60 hover:text-primary"
                )}
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              <Link href="/socios">
                <Button
                  variant="cta"
                  size="sm"
                  className="text-[10px] md:text-xs px-3 md:px-4 h-8 md:h-9"
                >
                  Seja Sócio
                </Button>
              </Link>

              {/* Divider */}
              <div className={cn(
                "hidden md:block w-px h-6",
                scrolled ? "bg-dark-500" : "bg-white/10"
              )} />

              {/* Sidebar Toggle */}
              <button
                onClick={() => setSidebarOpen(true)}
                className={cn(
                  "w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                  scrolled
                    ? "text-white hover:bg-dark-300"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Abrir menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[51] bg-black/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="fixed top-0 right-0 z-[60] h-full w-full max-w-sm bg-dark border-l border-dark-500 shadow-2xl shadow-black/50 overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-dark-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-dark-300 border-2 border-primary/30 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="GRES São Clemente"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover scale-125"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-heading font-bold text-white">Menu</h2>
                    <p className="text-[10px] text-gray-500">GRES São Clemente</p>
                  </div>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="w-9 h-9 rounded-lg bg-dark-300 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 transition-all"
                  aria-label="Fechar menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 p-4 md:p-6 space-y-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-dark-300 transition-all duration-200 group"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Sidebar Footer */}
              <div className="p-4 md:p-6 border-t border-dark-500 space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/socios" onClick={() => setSidebarOpen(false)}>
                    <Button variant="cta" className="w-full text-sm py-3">
                      Seja Sócio
                    </Button>
                  </Link>
                  <Link href="/loja" onClick={() => setSidebarOpen(false)}>
                    <Button variant="outline" className="w-full text-sm py-3">
                      <ShoppingBag className="w-4 h-4 mr-1.5" />
                      Loja
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/saoclementeoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@saoclementeoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label="TikTok"
                  >
                    <Music className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:contato@gressaoclemente.com.br"
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
