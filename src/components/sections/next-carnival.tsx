"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Shirt, Music, Sparkles } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetDate: Date): TimeLeft {
  // Start with zeros on both server and client to avoid hydration mismatch
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calc() {
      const difference = targetDate.getTime() - Date.now();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    // Set initial value on client
    setTimeLeft(calc());
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calc());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-dark-300/80 backdrop-blur-sm border border-dark-500 flex items-center justify-center overflow-hidden">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-3xl font-heading font-black text-primary"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </div>
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-b from-primary/20 to-transparent opacity-50" />
      </div>
      <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-2 font-medium">
        {label}
      </span>
    </div>
  );
}

export function NextCarnival() {
  const carnivalDate = new Date("2026-02-28T21:00:00");
  const timeLeft = useCountdown(carnivalDate);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-100 via-dark to-dark-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,212,0,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Próximo Carnaval
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white mb-4 leading-tight"
            >
              É Tempo de{" "}
              <span className="gradient-text">Sambar</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 mb-2"
            >
              Carnaval 2026
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-md mb-8"
            >
              O maior espetáculo da Terra está chegando. Prepare sua fantasia, afine seu instrumento e venha fazer parte dessa história.
            </motion.p>

            {/* Info Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              {[
                { icon: MapPin, text: "Marquês de Sapucaí - Rio de Janeiro" },
                { icon: Music, text: "Ensaios abertos toda quinta-feira" },
                { icon: Shirt, text: "Fantasias à venda na loja oficial" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/loja/fantasias">
                <Button variant="gold" size="lg">
                  <Shirt className="w-5 h-5" />
                  Comprar Fantasia
                </Button>
              </Link>
              <Link href="/eventos">
                <Button variant="outline" size="lg">
                  <CalendarDays className="w-5 h-5" />
                  Ver Ensaios
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow behind countdown */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl blur-3xl" />

            <div className="relative p-8 md:p-12 rounded-3xl bg-dark-200/60 backdrop-blur-xl border border-dark-500">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-widest font-medium">
                    Contagem Regressiva
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Para o desfile na Sapucaí
                </p>
              </div>

              {/* Countdown */}
              <div className="flex justify-center gap-2 sm:gap-4 md:gap-6">
                <TimeBlock value={timeLeft.days} label="Dias" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-gray-600 self-start mt-3 sm:mt-4">
                  :
                </span>
                <TimeBlock value={timeLeft.hours} label="Horas" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-gray-600 self-start mt-3 sm:mt-4">
                  :
                </span>
                <TimeBlock value={timeLeft.minutes} label="Minutos" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-gray-600 self-start mt-3 sm:mt-4">
                  :
                </span>
                <TimeBlock value={timeLeft.seconds} label="Segundos" />
              </div>

              {/* Progress Bar */}
              <div className="mt-8 space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Preparação</span>
                  <span>Desfile</span>
                </div>
                <div className="h-1.5 rounded-full bg-dark-400 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={isLoaded ? { width: "75%" } : {}}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dark"
                  />
                </div>
              </div>

              {/* Mini Events */}
              <div className="mt-8 pt-8 border-t border-dark-500">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-dark-300/50 border border-dark-500 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Barracão Aberto</p>
                    <p className="text-sm text-primary font-heading font-bold">Todo Sábado</p>
                  </div>
                  <div className="p-3 rounded-xl bg-dark-300/50 border border-dark-500 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Ensaios</p>
                    <p className="text-sm text-primary font-heading font-bold">Quintas 20h</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
