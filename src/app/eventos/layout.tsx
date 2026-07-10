import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos | GRES São Clemente",
  description: "Ensaios, feijoadas, shows e eventos especiais da São Clemente. Ingressos digitais com QR Code.",
};

export default function EventosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
