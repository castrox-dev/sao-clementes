"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in" | "fade-in-down";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

interface AnimatedSectionProps extends DivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationVariant;
  duration?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "aside" | "span";
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade-in-up",
  duration = 0.6,
  as: Tag = "div",
  once = true,
  ...props
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!once && isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, isVisible]);

  return (
    <Tag
      ref={ref as any}
      className={cn(
        isVisible
          ? `animate-${animation}`
          : "opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        animationFillMode: "both",
      }}
      {...(props as any)}
    >
      {children}
    </Tag>
  );
}
