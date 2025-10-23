import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Felipe Vargas - Desarrollador Full Stack',
    short_name: 'Felipe Vargas',
    description: 'Portafolio profesional de Felipe Vargas, desarrollador web especializado en React, Next.js y soluciones freelance.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'developer'],
    lang: 'es-ES',
    dir: 'ltr',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    screenshots: [
      {
        src: '/img/bg-felipevargas.png',
        sizes: '1200x630',
        type: 'image/png'
      }
    ]
  }
}