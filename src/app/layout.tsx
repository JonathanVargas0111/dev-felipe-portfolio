import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from './store/provider';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfbfd' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0d12' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Felipe Vargas Arias — Full-Stack & Systems Engineer',
  description: 'Systems Engineer & Full-Stack Developer with ~2,500 commits in production at Web Stark. Specializing in Next.js 15, WooCommerce enterprise plugins, Model Context Protocol (MCP), and Answer Engine Optimization (AEO/GEO).',
  keywords: [
    'Felipe Vargas',
    'Felipe Vargas Arias',
    'Full Stack Developer',
    'Systems Engineer',
    'Web Stark',
    'Next.js 15',
    'React 19',
    'TypeScript',
    'WordPress Plugin Developer',
    'WooCommerce Customization',
    'Custom Meal Builder',
    'Model Context Protocol',
    'MCP Server',
    'AEO GEO Optimization',
    'Answer Engine Optimization',
    'Nandark',
    'Bogota Developer',
    'Remote Full Stack Engineer',
  ],
  authors: [{ name: 'Felipe Vargas Arias', url: 'https://felipevargas.vercel.app' }],
  creator: 'Felipe Vargas Arias',
  publisher: 'Felipe Vargas Arias',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://felipevargas.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://felipevargas.vercel.app/',
    siteName: 'Felipe Vargas Arias — Portfolio & Engineering Monograph',
    title: 'Felipe Vargas Arias — Full-Stack & Systems Engineer',
    description: 'Systems Engineer with ~2,500 commits across 11 production codebases. Next.js 15, WooCommerce engines, and AI automation.',
    images: [
      {
        url: '/img/bg-felipevargas.png',
        width: 1200,
        height: 630,
        alt: 'Felipe Vargas Arias — Full-Stack & Systems Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@felipevargasx_',
    creator: '@felipevargasx_',
    title: 'Felipe Vargas Arias — Full-Stack & Systems Engineer',
    description: 'Systems Engineer with ~2,500 commits in production. Next.js 15, WooCommerce engines, and AI automation.',
    images: ['/img/bg-felipevargas.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://felipevargas.vercel.app';

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: 'Felipe Vargas Arias — Full-Stack & Systems Engineer Portfolio',
        description: 'Professional portfolio and engineering monograph of Felipe Vargas Arias.',
        mainEntity: {
          '@id': `${siteUrl}/#person`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Felipe Vargas Arias',
        givenName: 'Felipe',
        familyName: 'Vargas Arias',
        jobTitle: 'Full-Stack Software Engineer & Systems Architect',
        url: siteUrl,
        image: `${siteUrl}/img/bg-felipevargas.png`,
        sameAs: [
          'https://www.linkedin.com/in/felipevargasarias/',
          'https://github.com/JonathanVargas0111',
          'https://twitter.com/felipevargasx_',
          'https://nandark.com',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Web Stark',
          url: 'https://webstark.com.au',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Sydney',
            addressCountry: 'Australia',
          },
        },
        founder: {
          '@type': 'Organization',
          name: 'Nandark',
          url: 'https://nandark.com',
          description: 'Digital research lab for AI search optimization (AEO/GEO) and developer tooling.',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Corporación Universitaria Minuto de Dios (UNIMINUTO)',
          url: 'https://www.uniminuto.edu',
        },
        knowsAbout: [
          'Next.js 15 App Router',
          'React 19',
          'TypeScript',
          'PHP 8.2',
          'WordPress Plugin Architecture',
          'WooCommerce Core Customization',
          'WHMCS Addon Architecture',
          'Docker & Containerization',
          'Model Context Protocol (MCP)',
          'Answer Engine Optimization (AEO/GEO)',
          'Core Web Vitals Optimization',
          'Software Architecture & Service Layer Patterns',
        ],
        description: 'Systems Engineer with ~2,500 commits in production across 11 commercial and enterprise codebases.',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Felipe Vargas Arias — Portfolio & Systems Monograph',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="bg-page-light dark:bg-page-dark text-slate-950 dark:text-ink-primary min-h-screen antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
