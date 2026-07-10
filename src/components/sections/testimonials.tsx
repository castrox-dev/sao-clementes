"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    title: "Mestre de Bateria",
    text: "A São Clemente não é apenas uma escola de samba, é a minha segunda casa. Há mais de 30 anos eu sinto a emoção de ver nossa bateria fazer o chão tremer na Sapucaí. Não tem sensação igual no mundo.",
    rating: 5,
    role: "integrante",
  },
  {
    id: 2,
    name: "Ana Oliveira",
    title: "Porta-Bandeira",
    text: "Desde pequena eu sonhava em desfilar na São Clemente. Hoje, como porta-bandeira, realizo o sonho de representar nossa escola com orgulho. O samba corre nas veias de quem é Clemente.",
    rating: 5,
    role: "integrante",
  },
  {
    id: 3,
    name: "Roberto Lima",
    title: "Sócio Torcedor",
    text: "Me tornei sócio da São Clemente e foi a melhor decisão. Os descontos na loja, o acesso aos ensaios, a carteirinha digital... Mas o melhor mesmo é fazer parte dessa família.",
    rating: 5,
    role: "comunidade",
  },
  {
    id: 4,
    name: "Dona Maria",
    title: "Moradora do Bairro",
    text: "A São Clemente é a alma do nosso bairro. As crianças crescem ouvindo samba, aprendendo ritmo, fazendo amizades. É mais que uma escola, é uma instituição que transforma vidas.",
    rating: 5,
    role: "comunidade",
  },
  {
    id: 5,
    name: "João Pedro Santos",
    title: "Empresário - Patrocinador",
    text: "Patrocinar a São Clemente foi uma das melhores decisões de marketing da minha empresa. A visibilidade no Carnaval é imensa, mas o retorno social e o carinho da comunidade são ainda maiores.",
    rating: 5,
    role: "patrocinador",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-dark to-dark-100">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Quem Vive o{" "}
            <span className="gradient-text">Samba</span> Diz
          </h2>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Background */}
            <div className="absolute -top-10 left-0 text-primary/10">
              <Quote className="w-24 h-24" />
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-center px-4"
                >
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-heading font-medium leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary font-heading">
                        {testimonials[current].name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <cite className="text-white font-heading font-semibold not-italic block">
                        {testimonials[current].name}
                      </cite>
                      <span className="text-sm text-gray-400">
                        {testimonials[current].title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-dark-300 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 hover:bg-dark-300 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrent(i);
                    }}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      i === current
                        ? "bg-primary w-8"
                        : "bg-dark-500 hover:bg-dark-400"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-dark-300 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 hover:bg-dark-300 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto"
        >
          {[
            { label: "Integrantes", count: "200+", color: "from-primary/20 to-primary/5" },
            { label: "Anos de História", count: "64+", color: "from-blue-500/20 to-blue-600/5" },
            { label: "Comunidade", count: "1000+", color: "from-green-500/20 to-green-600/5" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "p-4 rounded-xl bg-gradient-to-br border border-dark-500 text-center",
                stat.color
              )}
            >
              <div className="text-2xl font-heading font-black text-primary">{stat.count}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
