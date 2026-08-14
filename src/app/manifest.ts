import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Felipe Vargas Arias — Full-Stack & Systems Engineer',
    short_name: 'Felipe Vargas',
    description: 'Systems Engineer & Full-Stack Developer with ~2,500 commits in production at Web Stark. Next.js 15, WooCommerce engines, and AI automation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0d12',
    theme_color: '#0b0d12',
    orientation: 'portrait-primary',
    categories: ['productivity', 'developer', 'technology'],
    lang: 'es-ES',
    dir: 'ltr',
    icons: [
      {
        src: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/img/bg-felipevargas.png',
        sizes: '1200x630',
        type: 'image/png',
      },
    ],
  };
}