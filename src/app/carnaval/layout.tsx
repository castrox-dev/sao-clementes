import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carnaval | GRES São Clemente",
  description: "A magia do Carnaval da São Clemente na Marquês de Sapucaí. Desfiles memoráveis e tradição.",
};

export default function CarnavalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
