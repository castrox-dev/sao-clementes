import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunidade | GRES São Clemente",
  description: "A comunidade São Clemente. Ações sociais, projetos culturais e muito samba no pé.",
};

export default function ComunidadeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
