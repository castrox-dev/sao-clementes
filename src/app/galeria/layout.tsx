import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria | GRES São Clemente",
  description: "Galeria de fotos e vídeos do GRES São Clemente. Desfiles, bastidores, bateria e comunidade.",
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
