"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";

const instagramPosts = [
  {
    id: 1,
    username: "saoclemente",
    image: "https://placehold.co/600x600/1A1A1A/FFD400?text=Desfile+SC",
    likes: "2.451",
    caption: "A emoção do desfile na Sapucaí! Nossa bateria fez o chão tremer mais uma vez. 🥁✨ #SãoClemente #Carnaval #Samba",
    time: "Há 2 horas",
  },
  {
    id: 2,
    username: "saoclemente",
    image: "https://placehold.co/600x600/222222/FFD400?text=Feijoada+SC",
    likes: "1.893",
    caption: "Feijoada da São Clemente lotada! Que energia incrível da nossa comunidade. ❤️🎶 #FeijoadaSC #Samba #Rio",
    time: "Há 5 horas",
  },
  {
    id: 3,
    username: "saoclemente",
    image: "https://placehold.co/600x600/1A1A1A/FFD400?text=Barracao+SC",
    likes: "3.217",
    caption: "Bastidores do barracão! Nossos artesãos trabalhando duro para fazer o maior espetáculo da Terra. 🎭💫 #Bastidores #Carnaval2026",
    time: "Há 1 dia",
  },
  {
    id: 4,
    username: "saoclemente",
    image: "https://placehold.co/600x600/2A2A2A/FFD400?text=Ensaio+SC",
    likes: "1.567",
    caption: "Ensaio aberto de quinta-feira! Venham sambar com a gente. Toda quinta na quadra. 🎵💃 #EnsaioSC #SambaNoPe",
    time: "Há 2 dias",
  },
  {
    id: 5,
    username: "saoclemente",
    image: "https://placehold.co/600x600/1A1A1A/FFD400?text=Carnaval+SC",
    likes: "4.892",
    caption: "Mestre-sala e Porta-bandeira: a alma do nosso desfile. Que orgulho dessa dupla impecável! 👑✨ #MestreSala #PortaBandeira",
    time: "Há 3 dias",
  },
  {
    id: 6,
    username: "saoclemente",
    image: "https://placehold.co/600x600/222222/FFD400?text=Comunidade",
    likes: "2.134",
    caption: "Nossa comunidade é nossa maior riqueza. Cada sorriso, cada abraço, cada batida. ❤️🥁 #ComunidadeSC #FamíliaClemente",
    time: "Há 4 dias",
  },
];

const gradientBgs = [
  "from-primary/30 via-dark-500 to-primary/10",
  "from-dark-500 via-primary/20 to-dark-600",
  "from-primary/20 via-dark-400 to-primary/10",
  "from-dark-600 via-primary/10 to-dark-500",
];

function PostImage({ post, index }: { post: typeof instagramPosts[0]; index: number }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="aspect-square overflow-hidden bg-dark-400 relative">
      {errored ? (
        <div className={`w-full h-full bg-gradient-to-br ${gradientBgs[index % gradientBgs.length]} flex items-center justify-center`}>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-dark-400/80 border border-primary/30 flex items-center justify-center mb-2">
              <FaInstagram className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs text-primary font-heading font-bold">@saoclementeoficial</p>
            <p className="text-[10px] text-gray-600 mt-1">{post.caption.substring(0, 30)}...</p>
          </div>
        </div>
      ) : (
        <img
          src={post.image}
          alt={`Instagram @${post.username}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}

function PostCard({ post, index }: { post: typeof instagramPosts[0]; index: number }) {
  return (
    <AnimatedSection
      animation="fade-in-up"
      delay={index * 0.08}
      className="group relative bg-dark-300 rounded-xl border border-dark-500 overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Post Image */}
      <PostImage post={post} index={index} />

      {/* Instagram Top Bar (on hover) */}
      <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[1.5px]">
            <div className="w-full h-full rounded-full bg-dark-300 flex items-center justify-center">
              <span className="text-[6px] font-bold text-primary">SC</span>
            </div>
          </div>
          <span className="text-xs font-semibold text-white">{post.username}</span>
          <span className="text-[10px] text-gray-300 ml-auto">{post.time}</span>
        </div>
      </div>

      {/* Overlay with actions (on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
        <div className="flex items-center gap-3 mb-1">
          <button className="text-white hover:text-red-400 transition-colors" aria-label="Curtir">
            <Heart className="w-4 h-4" />
          </button>
          <button className="text-white hover:text-primary transition-colors" aria-label="Comentar">
            <MessageCircle className="w-4 h-4" />
          </button>
          <button className="text-white hover:text-primary transition-colors" aria-label="Compartilhar">
            <Send className="w-4 h-4" />
          </button>
          <button className="text-white hover:text-primary transition-colors ml-auto" aria-label="Salvar">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-white font-semibold">{post.likes} curtidas</p>
        <p className="text-[10px] text-gray-300 line-clamp-1">
          <span className="font-semibold text-white">{post.username}</span> {post.caption.substring(0, 60)}...
        </p>
      </div>

      {/* Bottom info (always visible on mobile) */}
      <div className="p-2.5 space-y-1 md:hidden">
        <div className="flex items-center gap-2 text-xs">
          <Heart className="w-3 h-3 text-gray-400" />
          <span className="text-gray-400">{post.likes}</span>
        </div>
        <p className="text-[10px] text-gray-500 line-clamp-1">{post.caption.substring(0, 50)}...</p>
      </div>
    </AnimatedSection>
  );
}

export function InstagramFeed() {
  const totalLikes = instagramPosts.reduce(
    (acc, p) => acc + parseInt(p.likes.replace(/\\./g, "")),
    0
  );

  return (
    <div className="space-y-8">
      {/* Instagram Header */}
      <AnimatedSection animation="fade-in-up" delay={0.1} className="flex flex-col items-center gap-3 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]">
          <div className="w-full h-full rounded-full bg-dark-200 flex items-center justify-center overflow-hidden border-2 border-dark-200">
            <span className="text-primary font-black text-lg font-heading">SC</span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-heading font-bold text-white">@saoclementeoficial</h3>
          <p className="text-sm text-gray-400">Siga nosso Instagram</p>
        </div>
      </AnimatedSection>

      {/* Instagram Posts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {instagramPosts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>

      {/* Instagram CTA */}
      <AnimatedSection animation="fade-in-up" delay={0.4} className="text-center">
        <a
          href="https://www.instagram.com/saoclementeoficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="lg"
            className="group/btn gap-3 bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-purple-600/10 border-primary/30 hover:border-primary"
          >
            <FaInstagram className="w-5 h-5 text-pink-400 group-hover/btn:scale-110 transition-transform" />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-semibold">
              Seguir no Instagram
            </span>
          </Button>
        </a>
        <p className="text-xs text-gray-500 mt-3">
          @saoclementeoficial &bull; {totalLikes.toLocaleString("pt-BR")}+ curtidas
        </p>
      </AnimatedSection>
    </div>
  );
}
