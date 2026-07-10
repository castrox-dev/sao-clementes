import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { formatDate } from "@/lib/utils";
import { Newspaper, CalendarDays, ArrowRight, Clock, Sparkles } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "São Clemente Anuncia Tema para o Carnaval 2026",
    excerpt: "A diretoria da escola revelou o enredo que promete emocionar a Sapucaí no próximo carnaval.",
    category: "Carnaval",
    date: new Date("2026-06-15"),
    author: "Diretoria SC",
    featured: true,
    readTime: "4 min",
  },
  {
    id: 2,
    title: "Ensaios Abertos: Toda Quinta na Quadra",
    excerpt: "A partir de julho, a quadra da São Clemente estará aberta para ensaios gerais.",
    category: "Eventos",
    date: new Date("2026-06-10"),
    author: "Comunicação SC",
    featured: false,
    readTime: "3 min",
  },
  {
    id: 3,
    title: "Nova Loja Oficial: Experiência Premium",
    excerpt: "Lançamos nossa nova loja virtual com produtos exclusivos e frete para todo Brasil.",
    category: "Loja",
    date: new Date("2026-06-05"),
    author: "Marketing SC",
    featured: false,
    readTime: "5 min",
  },
  {
    id: 4,
    title: "Feijoada da São Clemente Volta em Grande Estilo",
    excerpt: "Nossa tradicional feijoada está de volta! Confira as datas e garanta seu lugar.",
    category: "Eventos",
    date: new Date("2026-05-28"),
    author: "Eventos SC",
    featured: false,
    readTime: "2 min",
  },
  {
    id: 5,
    title: "Bateria São Clemente Conquista Prêmio",
    excerpt: "Nossa bateria foi reconhecida como uma das melhores do Carnaval carioca.",
    category: "Carnaval",
    date: new Date("2026-05-20"),
    author: "Comunicação SC",
    featured: false,
    readTime: "3 min",
  },
  {
    id: 6,
    title: "Programa de Sócios Bate Recorde",
    excerpt: "Número de associados cresce 150% em 2026. Venha fazer parte dessa família.",
    category: "Comunidade",
    date: new Date("2026-05-15"),
    author: "Marketing SC",
    featured: false,
    readTime: "4 min",
  },
];

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection animation="fade-in-up" className="mb-12">
          <div className="flex items-center gap-2 text-primary text-sm mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Notícias</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Fique por <span className="gradient-text">Dentro</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">Acompanhe as últimas notícias da GRES São Clemente.</p>
        </AnimatedSection>

        {/* Featured */}
        <AnimatedSection animation="fade-in-up" delay={0.1} className="mb-12">
          <Link href={`/noticias/${articles[0].id}`}>
            <div className="group relative overflow-hidden rounded-2xl bg-dark-300 border border-dark-500 hover:border-primary/30 transition-all duration-500">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-dark-300 to-dark-400 flex items-center justify-center">
                  <Newspaper className="w-16 h-16 text-gray-600 group-hover:text-primary transition-colors" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="gold">{articles[0].category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <CalendarDays className="w-3 h-3" /> {formatDate(articles[0].date)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" /> {articles[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {articles[0].title}
                  </h3>
                  <p className="text-gray-400 mb-6">{articles[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Por {articles[0].author}</span>
                    <span className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                      Ler mais <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.slice(1).map((article, i) => (
            <AnimatedSection
              key={article.id}
              animation="fade-in-up"
              delay={0.2 + i * 0.1}
            >
              <Link href={`/noticias/${article.id}`}>
                <div className="group h-full rounded-2xl bg-dark-300/80 border border-dark-500 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  <div className="aspect-[16/9] bg-gradient-to-br from-dark-300 to-dark-400 flex items-center justify-center border-b border-dark-500">
                    <Newspaper className="w-8 h-8 text-gray-600 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-[10px]">{article.category}</Badge>
                      <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-white mb-3 group-hover:text-primary line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">{article.excerpt}</p>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
