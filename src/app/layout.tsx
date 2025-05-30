import { MenuMobileContextProvider } from "@/context/mobileMenu.context";
import type { Metadata, Viewport } from "next";
import { ToastContainer } from "react-toastify";
import { Footer, MobileMenu, Navbar, WhatsUpButton } from "../features";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Up - Tecnología e Innovación para Líderes Visionarios",
  description:
    "En Business Up impulsamos el crecimiento empresarial con soluciones tecnológicas de vanguardia. Automatizamos procesos, conectamos áreas y transformamos negocios con innovación palpable y resultados visibles.",
  keywords:
    "tecnología empresarial, innovación tecnológica, automatización, transformación digital, consultora tecnológica, soluciones tecnológicas, liderazgo empresarial, innovación para negocios, Business Up, visibilidad de gestión",
  robots: "index, follow",

  // Open Graph Meta Tags
  openGraph: {
    title: "Business Up - Tecnología e Innovación para Líderes Visionarios",
    description:
      "Lidera tu industria con Business Up. Convertimos inversiones tecnológicas en avances visibles y soluciones que transforman la gestión y operación de tu negocio.",
    images: "https://businessup.com.ar/logo_original.webp",
    url: "https://businessup.com.ar/",
    type: "website",
    locale: "es_ES",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Business Up - Tecnología e Innovación para Líderes Visionarios",
    description:
      "Automatiza lo repetitivo y conecta cada área de tu negocio con tecnología que funciona y se percibe. Business Up, tu socio estratégico en innovación tecnológica.",
    images: "https://businessup.com.ar/logo_original.webp",
  },

  authors: [{ name: "Business Up", url: "https://businessup.com.ar/" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://businessup.com.ar/" />
      </head>

      <body className={`antialiased`}>
        <MenuMobileContextProvider>
          <Navbar />
          <MobileMenu />
          <WhatsUpButton />
          <ToastContainer style={{ fontSize: "1rem" }} />
        </MenuMobileContextProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
