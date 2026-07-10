"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { formatDate } from "@/lib/utils";
import {
  Newspaper,
  CalendarDays,
  ArrowRight,
  Share2,
  Sparkles,
  Clock,
} from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "São Clemente Anuncia Tema para o Carnaval 2026",
    excerpt:
      "A diretoria da escola revelou o enredo que promete emocionar a Sapucaí no próximo carnaval. Uma história de resistência e alegria.",
    category: "Carnaval",
    date: new Date("2026-06-15"),
    author: "Diretoria SC",
    image: null,
    featured: true,
    readTime: "4 min",
  },
  {
    id: 2,
    title: "Ensaios Abertos: Toda Quinta na Quadra",
    excerpt:
      "A partir de julho, a quadra da São Clemente estará aberta para ensaios gerais. Venha sambar com a gente!",
    category: "Eventos",
    date: new Date("2026-06-10"),
    author: "Comunicação SC",
    image: null,
    featured: false,
    readTime: "3 min",
  },
  {
    id: 3,
    title: "Nova Loja Oficial: Experiência Premium",
    excerpt:
      "Lançamos nossa nova loja virtual com produtos exclusivos, frete para todo Brasil e condições especiais para sócios.",
    category: "Loja",
    date: new Date("2026-06-05"),
    author: "Marketing SC",
    image: null,
    featured: false,
    readTime: "5 min",
  },
  {
    id: 4,
    title: "Feijoada da São Clemente Volta em Grande Estilo",
    excerpt:
      "Nossa tradicional feijoada está de volta! Confira as datas e garanta seu lugar nessa festa imperdível.",
    category: "Eventos",
    date: new Date("2026-05-28"),
    author: "Eventos SC",
    image: null,
    featured: false,
    readTime: "2 min",
  },
];

export function News() {
  const featuredArticle = newsArticles[0];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-dark-100">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Notícias
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Fique por{" "}
            <span className="gradient-text">Dentro</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Acompanhe as últimas notícias, novidades e comunicados oficiais da GRES São Clemente.
          </p>
        </AnimatedSection>

        {/* Featured Article */}
        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <Link href={`/noticias/${featuredArticle.id}`}>
            <div className="group relative overflow-hidden rounded-2xl bg-dark-300 border border-dark-500 hover:border-primary/30 transition-all duration-500 mb-10">
              <div className="grid md:grid-cols-2">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-dark-300 to-dark-400 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-dark-400 border-2 border-dark-500 flex items-center justify-center mb-3">
                      <span className="text-3xl font-black text-primary font-heading">SC</span>
                    </div>
                    <p className="text-xs text-gray-500">Notícia em destaque</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="gold">{featuredArticle.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <CalendarDays className="w-3 h-3" />
                      {formatDate(featuredArticle.date)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Por {featuredArticle.author}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all duration-300">
                      Ler mais
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Article Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {newsArticles.slice(1).map((article, i) => (
            <AnimatedSection
              key={article.id}
              animation="fade-in-up"
              delay={0.3 + i * 0.1}
            >
              <Link href={`/noticias/${article.id}`}>
                <div className="group h-full rounded-2xl bg-dark-300/80 border border-dark-500 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-dark-300 to-dark-400 flex items-center justify-center border-b border-dark-500">
                    <Newspaper className="w-10 h-10 text-gray-600 group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-[10px]">{article.category}</Badge>
                      <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                    </div>

                    <h3 className="text-lg font-heading font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                      <Share2 className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" className="text-center">
          <Link href="/noticias">
            <Button variant="gold" size="lg">
              Ver Todas as Notícias
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
