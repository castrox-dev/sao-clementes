import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seja Sócio | GRES São Clemente",
  description: "Faça parte da comunidade São Clemente. Planos Torcedor, Patrocinador e Benemérito com benefícios exclusivos.",
};

export default function SociosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
