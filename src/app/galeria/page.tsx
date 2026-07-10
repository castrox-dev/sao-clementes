"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight, Maximize2, Heart, Sparkles } from "lucide-react";
import { InstagramFeed } from "@/components/sections/instagram-feed";

const categories = [
  { id: "all", label: "Todas" },
  { id: "desfiles", label: "Desfiles" },
  { id: "bastidores", label: "Bastidores" },
  { id: "bateria", label: "Bateria" },
  { id: "comunidade", label: "Comunidade" },
  { id: "eventos", label: "Eventos" },
];

const items = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  category: categories[(i % 5) + 1].id,
  title: `Momento São Clemente #${i + 1}`,
  description: "Registro especial do nosso dia a dia",
}));

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection animation="fade-in-up" className="mb-10">
          <div className="flex items-center gap-2 text-primary text-sm mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Galeria</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Momentos que <span className="gradient-text">Marcam</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">Fotos e vídeos dos nossos carnavais, ensaios, eventos e bastidores.</p>
        </AnimatedSection>

        {/* Instagram Feed */}
        <AnimatedSection animation="fade-in-up" delay={0.15} className="mb-16">
          <InstagramFeed />
        </AnimatedSection>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2.5 rounded-xl text-sm font-medium transition-all border",
                activeCategory === cat.id
                  ? "bg-primary text-dark border-primary"
                  : "bg-dark-300/50 text-gray-400 border-dark-500 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  "relative overflow-hidden rounded-xl bg-dark-300 border border-dark-500 group cursor-pointer aspect-square",
                  i < 2 && "md:col-span-2 md:row-span-2"
                )}
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-300 to-dark-400">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-dark-400 border border-dark-500 flex items-center justify-center mb-2">
                      <span className="text-xs font-black text-primary font-heading">SC</span>
                    </div>
                    <p className="text-[10px] text-gray-600">{item.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-sm font-heading font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
            <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 sm:-top-12 right-0 text-gray-400 hover:text-white z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="aspect-video rounded-2xl bg-dark-300 border border-dark-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-dark-400 border-2 border-dark-500 flex items-center justify-center mb-4">
                    <span className="text-3xl font-black text-primary font-heading">SC</span>
                  </div>
                  <p className="text-gray-400">Imagem em destaque</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-white font-heading font-semibold">
                  {items.find((i) => i.id === selectedImage)?.title}
                </p>
                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400">
                  <Heart className="w-4 h-4" /> Curtir
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
