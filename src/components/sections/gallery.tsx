"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Image,
  Film,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { InstagramFeed } from "@/components/sections/instagram-feed";

const galleryCategories = [
  { id: "all", label: "Todas", icon: Image },
  { id: "desfiles", label: "Desfiles", icon: Film },
  { id: "bastidores", label: "Bastidores", icon: Image },
  { id: "bateria", label: "Bateria", icon: Image },
  { id: "comunidade", label: "Comunidade", icon: Image },
  { id: "eventos", label: "Eventos", icon: Image },
];

const galleryItems = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  category: galleryCategories[(i % 5) + 1].id,
  title: `Momento São Clemente #${i + 1}`,
  description: "Registro especial do nosso dia a dia",
}));

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = useCallback(() => {
    if (selectedImage !== null) {
      const currentIndex = filtered.findIndex((item) => item.id === selectedImage);
      if (currentIndex > 0) {
        setSelectedImage(filtered[currentIndex - 1].id);
      }
    }
  }, [selectedImage, filtered]);

  const handleNext = useCallback(() => {
    if (selectedImage !== null) {
      const currentIndex = filtered.findIndex((item) => item.id === selectedImage);
      if (currentIndex < filtered.length - 1) {
        setSelectedImage(filtered[currentIndex + 1].id);
      }
    }
  }, [selectedImage, filtered]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Galeria
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Momentos que <span className="gradient-text">Marcam</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Fotos e vídeos dos nossos carnavais, ensaios, eventos e bastidores.
          </p>
        </AnimatedSection>

        {/* Instagram Feed */}
        <AnimatedSection animation="fade-in-up" delay={0.15} className="mb-16">
          <InstagramFeed />
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animation="fade-in-up" delay={0.2} className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border",
                  activeCategory === cat.id
                    ? "bg-primary text-dark border-primary shadow-lg shadow-primary/20"
                    : "bg-dark-300/50 text-gray-400 border-dark-500 hover:text-white hover:border-primary/30"
                )}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </AnimatedSection>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={cn(
                  "relative overflow-hidden rounded-xl bg-dark-300 border border-dark-500 group cursor-pointer",
                  i < 2 ? "md:col-span-2 md:row-span-2" : "aspect-square"
                )}
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Placeholder Image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-300 to-dark-400">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-dark-400 border border-dark-500 flex items-center justify-center mb-2">
                      <span className="text-xs font-black text-primary font-heading">SC</span>
                    </div>
                    <p className="text-[10px] text-gray-600">{item.title}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-sm font-heading font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-dark/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" className="text-center">
          <Link href="/galeria">
            <Button variant="gold" size="lg">
              Ver Galeria Completa
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-dark/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-dark/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Placeholder */}
              <div className="aspect-video rounded-2xl bg-dark-300 border border-dark-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-dark-400 border-2 border-dark-500 flex items-center justify-center mb-4">
                    <span className="text-3xl font-black text-primary font-heading">SC</span>
                  </div>
                  <p className="text-gray-400">Imagem em destaque</p>
                  <p className="text-sm text-gray-600">
                    {galleryItems.find((i) => i.id === selectedImage)?.title}
                  </p>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-heading font-semibold">
                    {galleryItems.find((i) => i.id === selectedImage)?.title}
                  </p>
                  <p className="text-sm text-gray-400">
                    {galleryItems.find((i) => i.id === selectedImage)?.description}
                  </p>
                </div>
                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors">
                  <Heart className="w-4 h-4" />
                  Curtir
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
