import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | GRES São Clemente",
  description: "Entre em contato com o GRES São Clemente. Telefone, email, redes sociais e formulário.",
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
