import type { Metadata } from "next";
import { Inter, Montserrat, Cinzel } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/layout/page-loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "GRES São Clemente – O Samba Vive Aqui",
    template: "%s | GRES São Clemente",
  },
  description:
    "Site oficial do Grêmio Recreativo Escola de Samba São Clemente. Mais que uma escola de samba. Uma comunidade que transforma paixão em história. Loja oficial, ingressos, eventos e muito mais.",
  keywords: [
    "São Clemente",
    "GRES São Clemente",
    "Escola de Samba",
    "Carnaval Rio de Janeiro",
    "Samba",
    "Desfile",
    "Marquês de Sapucaí",
    "Fantasia",
    "Camisa",
    "Loja Oficial",
  ],
  authors: [{ name: "GRES São Clemente" }],
  creator: "GRES São Clemente",
  publisher: "GRES São Clemente",
  metadataBase: new URL("https://saoclemente.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "GRES São Clemente",
    title: "GRES São Clemente – O Samba Vive Aqui",
    description:
      "Site oficial do Grêmio Recreativo Escola de Samba São Clemente. Mais que uma escola de samba. Uma comunidade que transforma paixão em história.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GRES São Clemente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRES São Clemente – O Samba Vive Aqui",
    description:
      "Site oficial do Grêmio Recreativo Escola de Samba São Clemente.",
    images: ["/og-image.png"],
    site: "@saoclemente",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} ${cinzel.variable} font-sans bg-dark text-light antialiased`}
      >
        <Navbar />
        <PageLoader />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GRES São Clemente",
              url: "https://saoclemente.com.br",
              logo: "https://saoclemente.com.br/logo.png",
              description:
                "Grêmio Recreativo Escola de Samba São Clemente - Mais que uma escola de samba. Uma comunidade que transforma paixão em história.",
              foundingDate: "1961",
              location: {
                "@type": "Place",
                name: "Quadra da São Clemente",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Rio de Janeiro",
                  addressRegion: "RJ",
                  addressCountry: "BR",
                },
              },
              sameAs: [
                "https://www.instagram.com/saoclementeoficial/",
                "https://www.facebook.com/saoclementeoficial/",
                "https://www.tiktok.com/@saoclementeoficial",
                "https://x.com/oclementiano",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
