import "./globals.css";
import Providers from "./store/provider";

export const metadata = {
  title: "Felipe Vargas | Full-Stack Developer + Automatización",
  description: "Ingeniero de Sistemas y Full-Stack Developer. Desarrollo web, ecommerce y automatización con enfoque en performance, SEO y conversión.",
  keywords: "Felipe Vargas, desarrollador web, full stack, automatización, Next.js, React, WordPress, WooCommerce, TypeScript, portafolio",
  applicationName: "Felipe Vargas Portfolio",
  authors: [{ 
    name: "Felipe Vargas", 
    url: "https://felipevargas.vercel.app" 
  }],
  publisher: "Felipe Vargas",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "TU_CODIGO_GOOGLE",
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "TU_CODIGO_BING"
  },
  openGraph: {
    title: "Felipe Vargas - Full-Stack Developer + Automatización",
    description: "Portafolio profesional: desarrollo web, ecommerce y automatización con foco en performance y SEO.",
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
    title: "Felipe Vargas | Full-Stack + Automatización",
    description: "Construyo soluciones web y automatizaciones con Next.js, WordPress y WooCommerce.",
    images: ["https://felipevargas.vercel.app/img/bg-felipevargas.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#2563eb" }
    ]
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://felipevargas.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es-ES",
      "en-US": "/en-US"
    },
  },
  category: 'technology',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({ children }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://felipevargas.vercel.app/"
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Felipe Vargas",
    "jobTitle": "Full-Stack Developer & Automation Specialist",
    "url": baseUrl,
    "sameAs": [
      "https://www.linkedin.com/in/felipevargasarias/",
      "https://github.com/JonathanVargas0111",
      "https://twitter.com/felipevargasx_",
      "https://medium.com/@Felipevargasx"
    ],
    "description": "Ingeniero de Sistemas y Full-Stack Developer enfocado en desarrollo web, ecommerce y automatización.",
    "image": `${baseUrl}/img/bg-felipevargas.png`,
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universidad Distrital Francisco José de Caldas"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "WordPress",
      "WooCommerce",
      "Docker",
      "SEO Técnico",
      "Automatización"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Desarrollador Full Stack",
      "skills": "JavaScript, React, Next.js, WordPress, WooCommerce, Automation"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Nandark",
      "url": "https://nandark.com/"
    }
  };

  return (
    <html lang="es" dir="ltr" itemScope itemType="http://schema.org/WebPage">
      <head>
        <meta name="bingbot" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nandark",
              "url": "https://nandark.com/",
              "founder": {
                "@type": "Person",
                "name": "Felipe Vargas"
              },
              "sameAs": [
                "https://www.linkedin.com/in/felipevargasarias/"
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Desarrollo web y automatización",
              "provider": {
                "@type": "Person",
                "name": "Felipe Vargas"
              },
              "areaServed": "Worldwide",
              "serviceType": [
                "Desarrollo web",
                "Ecommerce",
                "Automatización"
              ],
              "url": baseUrl
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Portafolio de Felipe Vargas",
              "url": baseUrl,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${baseUrl}?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>

      <Providers>
        <body 
          className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 font-sans" 
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
