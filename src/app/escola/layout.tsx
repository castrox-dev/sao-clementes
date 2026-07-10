import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Escola | GRES São Clemente",
  description: "Conheça a história do GRES São Clemente, fundado em 1961. Mais que uma escola de samba, uma comunidade.",
};

export default function EscolaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
