"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { products } from "@/lib/products";
import {
  ShoppingBag,
  Heart,
  Star,
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  ArrowUpDown,
  Sparkles,
} from "lucide-react";

export default function LojaPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<string>("featured");

  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <AnimatedSection animation="fade-in-up" className="mb-10">
          <div className="flex items-center gap-2 text-primary text-sm mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Loja Oficial</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Vista a <span className="gradient-text">Paixão</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Camisas, bonés, fantasias, instrumentos e muito mais. Produtos oficiais da GRES São Clemente.
          </p>
        </AnimatedSection>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 rounded-xl bg-dark-300/50 border border-dark-500">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 rounded-lg bg-dark-400 border border-dark-500 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
            <Button variant="secondary" size="sm" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 p-1 rounded-lg bg-dark-400 border border-dark-500">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-1.5 rounded-md transition-all",
                  viewMode === "grid" ? "bg-primary text-dark" : "text-gray-400 hover:text-white"
                )}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-1.5 rounded-md transition-all",
                  viewMode === "list" ? "bg-primary text-dark" : "text-gray-400 hover:text-white"
                )}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <ArrowUpDown className="w-4 h-4" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-gray-300 focus:outline-none cursor-pointer"
              >
                <option value="featured">Destaques</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name">Nome A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={cn(
            "gap-6",
            viewMode === "grid"
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "space-y-4"
          )}
        >
          {products.map((product, i) => (
            <AnimatedSection
              key={product.id}
              animation="fade-in-up"
              delay={i * 0.05}
            >
              <Link href={`/loja/${product.slug}`}>
                <Card
                  hover
                  className={cn(
                    "overflow-hidden border-dark-500 h-full group",
                    viewMode === "list" && "flex"
                  )}
                >
                  {/* Image */}
                  <div className={cn(
                    "relative bg-dark-300 flex items-center justify-center overflow-hidden",
                    viewMode === "grid" ? "aspect-square" : "w-48 aspect-square shrink-0"
                  )}>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-dark-400 border border-dark-500 flex items-center justify-center mb-2">
                        <span className="text-sm font-black text-primary font-heading">SC</span>
                      </div>
                      <p className="text-[10px] text-gray-600">{product.name.substring(0, 20)}</p>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && <Badge variant="gold" className="text-[10px]">Novo</Badge>}
                      {product.comparePrice && (
                        <Badge variant="default" className="bg-red-500/80 text-[10px]">
                          -{Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}%
                        </Badge>
                      )}
                    </div>

                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-dark/60 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Content */}
                  <CardContent className={cn("p-4", viewMode === "list" && "flex-1")}>
                    <div className="flex items-center gap-1 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-3 h-3",
                            i < Math.floor(product.rating) ? "text-primary fill-primary" : "text-gray-600"
                          )}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">({product.reviewCount})</span>
                    </div>

                    <h3 className="font-heading font-semibold text-sm text-white mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{product.category}</p>

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
                    <p className="text-xs text-gray-600 mt-1">
                      ou 12x de {formatPrice(product.price / 12)} sem juros
                    </p>

                    {viewMode === "list" && (
                      <p className="text-sm text-gray-400 mt-3 line-clamp-2">{product.description}</p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
