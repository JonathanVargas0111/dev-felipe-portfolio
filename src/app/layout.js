import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./store/provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Felipe Vargas | Desarrollador Full Stack Freelance - React & Next.js Expert",
  description: "Desarrollador web con 3+ años de experiencia. Especializado en React, Next.js y soluciones freelance para startups. Contrata a Felipe Vargas para tu próximo proyecto web.",
  keywords: "Felipe Vargas, desarrollador web, freelance, frontend developer, full stack, React, Next.js, JavaScript, TypeScript, portafolio Felipe Vargas, contratar desarrollador web",
  applicationName: "Felipe Vargas Portfolio",
  authors: [{ 
    name: "Felipe Vargas", 
    url: "https://felipevargas.vercel.app" 
  }],
  publisher: "Felipe Vargas",
  verification: {
    google: "TU_CODIGO_GOOGLE",
    bing: "TU_CODIGO_BING" // Añade tu código de Bing Webmaster Tools
  },
  openGraph: {
    title: "Felipe Vargas - Desarrollador Full Stack Freelance | React & Next.js",
    description: "Portafolio profesional de Felipe Vargas. Desarrollo aplicaciones web rápidas y SEO-friendly con tecnologías modernas.",
    url: "https://felipevargas.vercel.app/",
    siteName: "Felipe Vargas Portfolio",
    images: [
      {
        url: "https://felipevargas.vercel.app/img/bg-felipevargas.png",
        width: 1200,
        height: 630,
        alt: "Felipe Vargas - Desarrollador Full Stack Freelance",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@felipevargasx_",
    creator: "@felipevargasx_",
    title: "Felipe Vargas | Desarrollador Full Stack Freelance",
    description: "Construyo soluciones web escalables con React y Next.js. Echa un vistazo a mi portafolio.",
    images: ["https://felipevargas.vercel.app/img/bg-felipevargas.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
    bingBot: {
      index: true,
      follow: true,
      maxImagePreview: "large"
    }
  },
  metadataBase: new URL("https://felipevargas.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es-ES",
      "en-US": "/en-US" // Preparado para internacionalización
    },
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Felipe Vargas",
    "jobTitle": "Desarrollador Full Stack Freelance",
    "url": "https://felipevargas.vercel.app/",
    "sameAs": [
      "https://www.linkedin.com/in/felipevargasarias/",
      "https://github.com/JonathanVargas0111", // Recomendado cambiar a github.com/felipevargas
      "https://twitter.com/felipevargasx_",
      "https://medium.com/@Felipevargasx"
    ],
    "description": "Desarrollador web especializado en React, Next.js y TypeScript con experiencia en proyectos freelance para startups internacionales.",
    "image": "https://felipevargas.vercel.app/img/bg-felipevargas.png",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universidad de referencia" // Actualiza con tu formación real
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Development",
      "Backend Development",
      "AWS",
      "SEO Técnico"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Desarrollador Full Stack",
      "skills": "JavaScript, React, Node.js"
    }
  };

  return (
    <html lang="es" dir="ltr" itemScope itemType="http://schema.org/WebPage">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://felipevargas.vercel.app/" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Datos estructurados principales */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData, null, 2)}
        </script>

        {/* Datos para Bing/OpenAI */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Portafolio de Felipe Vargas",
            "url": "https://felipevargas.vercel.app/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://felipevargas.vercel.app/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }, null, 2)}
        </script>
      </Head>
      
      <Providers>
        <body 
          className={`${inter.className} bg-black`} 
          itemScope 
          itemType="https://schema.org/Person"
          itemID="#felipevargas"
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}