import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notícias | GRES São Clemente",
  description: "Fique por dentro das últimas notícias do GRES São Clemente. Carnaval, eventos, loja e comunidade.",
};

export default function NoticiasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
