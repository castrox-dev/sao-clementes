import { Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  delay?: number;
}

export function SectionHeader({ badge, title, highlight, description, delay = 0 }: SectionHeaderProps) {
  return (
    <AnimatedSection
      animation="fade-in-up"
      delay={delay}
      className="text-center mb-12 md:mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-medium mb-4 md:mb-6">
        <Sparkles className="w-3.5 h-3.5" />
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
        {title}{" "}
        <span className="gradient-text">{highlight}</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
        {description}
      </p>
    </AnimatedSection>
  );
}

interface PageHeaderProps {
  icon: React.ElementType;
  label: string;
  title: string;
  highlight: string;
  description?: string;
  delay?: number;
}

export function PageHeader({ icon: Icon, label, title, highlight, description, delay = 0 }: PageHeaderProps) {
  return (
    <AnimatedSection
      animation="fade-in-up"
      delay={delay}
      className="mb-10 md:mb-12"
    >
      <div className="flex items-center gap-2 text-primary text-sm mb-2">
        <Icon className="w-4 h-4" />
        <span>{label}</span>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
        {title}{" "}
        <span className="gradient-text">{highlight}</span>
      </h1>
      {description && (
        <p className="text-gray-400 max-w-2xl text-base md:text-lg">{description}</p>
      )}
    </AnimatedSection>
  );
}
