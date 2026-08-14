import type { Metadata } from 'next';
import './globals.css';
import Providers from './store/provider';

export const metadata: Metadata = {
  title: 'Felipe Vargas Arias — Full-Stack & Systems Engineer',
  description: 'Systems Engineer & Full-Stack Developer with ~2,500 commits in production at Web Stark. Specializing in Next.js 15, WooCommerce enterprise plugins, Model Context Protocol (MCP) and AI search optimization (AEO).',
  keywords: [
    'Felipe Vargas',
    'Felipe Vargas Arias',
    'Full Stack Developer',
    'Web Stark',
    'Next.js 15',
    'React 19',
    'TypeScript',
    'WordPress Plugin Developer',
    'WooCommerce Customization',
    'Model Context Protocol',
    'MCP Server',
    'AEO GEO Optimization',
    'Nandark',
  ],
  authors: [{ name: 'Felipe Vargas Arias', url: 'https://felipevargas.vercel.app' }],
  creator: 'Felipe Vargas Arias',
  publisher: 'Felipe Vargas Arias',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://felipevargas.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://felipevargas.vercel.app/',
    siteName: 'Felipe Vargas Arias — Full-Stack & Systems Engineer',
    title: 'Felipe Vargas Arias — Full-Stack & Systems Engineer',
    description: 'Systems Engineer with ~2,500 commits across 11 production codebases. Next.js 15, WooCommerce engines, and AI automation.',
    images: [
      {
        url: '/img/bg-felipevargas.png',
        width: 1200,
        height: 630,
        alt: 'Felipe Vargas Arias — Portfolio',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Felipe Vargas Arias',
    jobTitle: 'Full-Stack Software Engineer & Automation Specialist',
    url: 'https://felipevargas.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/felipevargasarias/',
      'https://github.com/JonathanVargas0111',
      'https://twitter.com/felipevargasx_',
      'https://nandark.com',
    ],
    knowsAbout: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'PHP 8.2',
      'WordPress Plugin Development',
      'WooCommerce Custom Engineering',
      'WHMCS Addon Architecture',
      'Docker & Containerization',
      'Model Context Protocol (MCP)',
      'Answer Engine Optimization (AEO)',
      'Core Web Vitals',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Corporación Universitaria Minuto de Dios (UNIMINUTO)',
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
