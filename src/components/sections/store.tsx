"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { products, categories, featuredProducts } from "@/lib/products";
import {
  ShoppingBag,
  Heart,
  Star,
  Eye,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function ProductCard({ product, index = 0 }: { product: typeof products[0]; index?: number }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <AnimatedSection
      animation="fade-in-up"
      delay={index * 0.1}
      duration={0.5}
    >
      <Card className="overflow-hidden border-dark-500 hover:border-primary/30 transition-all duration-500 h-full group">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-dark-300">
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10" />

          {/* Placeholder Product Image */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-dark-400 border-2 border-dark-500 flex items-center justify-center mb-3">
                <span className="text-2xl font-black text-primary font-heading">SC</span>
              </div>
              <p className="text-xs text-gray-500">Produto</p>
            </div>
          </div>

          {/* Hover Overlay (CSS transitions) */}
          <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300 scale-0 group-hover:scale-100 [transition-delay:100ms]">
                <Eye className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300 scale-0 group-hover:scale-100 [transition-delay:150ms]">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={cn(
                  "w-12 h-12 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100 [transition-delay:200ms]",
                  isWishlisted
                    ? "bg-red-500/20 border-red-500/30 text-red-500"
                    : "bg-white/10 border-white/20 text-white hover:bg-primary hover:text-dark hover:border-primary"
                )}
              >
                <Heart className={cn("w-5 h-5", isWishlisted && "fill-current")} />
              </button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {product.isNew && (
              <Badge variant="gold" className="animate-pulse-gold">Novo</Badge>
            )}
            {product.isBestSeller && (
              <Badge variant="premium">Mais Vendido</Badge>
            )}
            {product.comparePrice && (
              <Badge variant="default" className="bg-red-500/80 text-white border-red-500">
                -{Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button (Mobile) */}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 md:hidden",
              isWishlisted
                ? "bg-red-500/20 text-red-500"
                : "bg-dark/60 text-white/80"
            )}
          >
            <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
          </button>
        </div>

        <CardContent className="p-4 md:p-5">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < Math.floor(product.rating)
                    ? "text-primary fill-primary"
                    : "text-gray-600"
                )}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
          </div>

          {/* Product Name */}
          <h3 className="font-heading font-semibold text-white mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Category */}
          <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
            {product.category}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.comparePrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>

          {/* Installments */}
          <p className="text-xs text-gray-500 mt-1">
            ou 12x de {formatPrice(product.price / 12)} sem juros
          </p>

          {/* Add to Cart Button */}
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-4 text-xs group/btn"
          >
            <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" />
            Adicionar ao carrinho
          </Button>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}

export function Store() {
  const [activeTab, setActiveTab] = useState<"featured" | "new" | "bestsellers">("featured");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => current.removeEventListener("scroll", checkScroll);
    }
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const displayProducts =
    activeTab === "featured"
      ? featuredProducts
      : activeTab === "new"
      ? products.filter((p) => p.isNew)
      : products.filter((p) => p.isBestSeller);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-dark-100">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Loja Oficial
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Vista a <span className="gradient-text">Paixão</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Dos camisas aos instrumentos, encontre tudo que você precisa para mostrar seu amor pela São Clemente.
          </p>
        </AnimatedSection>

        {/* Categories Grid */}
        <AnimatedSection animation="fade-in-up" delay={0.2} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-11 gap-3 mb-12">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/loja/${cat.id}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-dark-300/50 border border-dark-500 hover:border-primary/30 hover:bg-dark-300/80 hover:shadow-lg hover:shadow-primary/5 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-xs text-gray-300 group-hover:text-primary transition-colors font-medium">
                {cat.name}
              </span>
              <span className="text-[10px] text-gray-600">
                {cat.count} itens
              </span>
            </Link>
          ))}
        </AnimatedSection>

        {/* Tab Filters */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2 bg-dark-300/50 p-1.5 rounded-xl border border-dark-500">
            {[
              { id: "featured", label: "Destaques" },
              { id: "new", label: "Novidades" },
              { id: "bestsellers", label: "Mais Vendidos" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-primary text-dark shadow-lg shadow-primary/20"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <Link href="/loja">
            <Button variant="ghost" size="sm" className="hidden md:flex text-primary hover:text-primary">
              Ver Tudo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.4} className="text-center mt-12">
          <Link href="/loja">
            <Button variant="gold" size="lg" className="text-base">
              <ShoppingBag className="w-5 h-5" />
              Ver Loja Completa
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
