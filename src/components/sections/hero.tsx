"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, ShoppingBag, Ticket, Sparkles } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    }
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-dark"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/50 to-dark z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,212,0,0.08)_0%,transparent_70%)] z-10" />
      <div className="absolute inset-0 bg-grid opacity-20 z-[1]" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]"
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          transition={{ type: "spring", damping: 15 }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[100px]"
          animate={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-between px-4 py-24 md:py-32">
        {/* Top spacer */}
        <div />

        {/* Center content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto -mt-12 md:-mt-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary font-medium">
              <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3" />
              GRES São Clemente • Fundada em 1961
            </span>
          </motion.div>



          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-white mb-3 md:mb-4 tracking-tight leading-[1.1]"
          >
            <span className="gradient-text">O Samba</span>
            <br />
            <span className="text-white">Vive Aqui.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed px-2"
          >
            Mais que uma escola de samba. Uma comunidade que transforma{" "}
            <span className="text-primary font-semibold">paixão</span> em{" "}
            <span className="text-primary font-semibold">história</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-3 md:gap-4"
          >
            <Link href="/escola">
              <Button variant="gold" size="lg" className="w-full sm:w-auto text-sm md:text-base px-5 md:px-8 shadow-2xl shadow-primary/25">
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                Conheça a Escola
              </Button>
            </Link>
            <Link href="/loja">
              <Button variant="outline-white" size="lg" className="w-full sm:w-auto text-sm md:text-base px-5 md:px-8 backdrop-blur-md">
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                Loja Oficial
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats Bar - now in natural flow, not absolute */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex gap-6 md:gap-12 lg:gap-16"
        >
          {[
            { number: "64+", label: "Anos" },
            { number: "1000+", label: "Comunidade" },
            { number: "5", label: "Títulos" },
            { number: "∞", label: "Paixão" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-primary">
                {stat.number}
              </div>
              <div className="text-[9px] md:text-xs text-gray-400 uppercase tracking-wider mt-0.5 md:mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        onClick={scrollDown}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em]">Rolar</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
        </motion.div>
      </motion.button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-dark to-transparent z-10" />
    </section>
  );
}
