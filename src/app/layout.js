import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./store/provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Felipe Vargas | Desarrollador Web y Consultor en Tecnología",
  description:
    "Felipe Vargas, desarrollador web con experiencia en software, diseño y consultoría tecnológica. Descubre cómo transformar tus ideas en soluciones digitales.",
  keywords:
    "Felipe Vargas, desarrollador web, consultor tecnológico, React, Next.js, JavaScript, desarrollo web, tecnología, software, portafolio",
  applicationName: "Felipe Vargas Portfolio",
  author: "Felipe Vargas",
  publisher: "Felipe Vargas",
  openGraph: {
    title:
      "Felipe Vargas | Desarrollador Web y Consultor en Tecnología | React | felipevargasx felipevargasx_",
    description:
      "Portafolio de Felipe Vargas, desarrollador web con experiencia en software, diseño y consultoría tecnológica.",
    url: "https://felipevargas.vercel.app/",
    siteName: "Felipe Vargas Portfolio",
    images: [
      {
        url: "https://felipevargas.vercel.app/img/bg-felipevargas.png",
        width: 1200,
        height: 630,
        alt: "Felipe Vargas - Desarrollador Web y Consultor en Tecnología",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@felipevargasx",
    title: "Felipe Vargas | Desarrollador Web y Consultor en Tecnología",
    description:
      "Portafolio de Felipe Vargas, desarrollador web con experiencia en software, diseño y consultoría tecnológica.",
    image: "https://felipevargas.vercel.app/img/bg-felipevargas.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://felipevargas.vercel.app/"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" dir="ltr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://felipevargas.vercel.app/" />
      </Head>
      <Providers>
        <body
          className={inter.className}
          role="document"
          aria-label="Felipe Vargas Portfolio"
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
