import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loja Oficial | GRES São Clemente",
  description: "Camisas, bonés, fantasias e produtos oficiais do GRES São Clemente. Compre online com frete para todo Brasil.",
  openGraph: {
    title: "Loja Oficial | GRES São Clemente",
    description: "Camisas, bonés, fantasias e produtos oficiais do GRES São Clemente.",
  },
};

export default function LojaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
