import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './store/provider'
const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Felipe Vargas | Desarrollador Web y Consultor en Tecnología',
  description: 'Portafolio de Felipe Vargas, desarrollador web con experiencia en software, diseño y consultoría tecnológica. Descubre cómo transformar tus ideas en soluciones digitales.',
  applicationName: 'Felipe Vargas Portfolio',
  openGraph: {
    title: 'Felipe Vargas | Desarrollador Web y Consultor en Tecnología | React | felipevargasx felipevargasx_',
    description: 'Felipe Vargas, desarrollador web con experiencia en software, diseño y consultoría tecnológica. Descubre cómo transformar tus ideas en soluciones digitales.',
    url: 'https://felipevargas.vercel.app/',
    siteName: 'Felipe Vargas Portfolio',
    images: [
      {
        url: 'https://felipevargas.vercel.app/img/bg-felipevargas.png', // Aquí deberías poner la URL de tu imagen
        width: 1200,
        height: 630,
        alt: 'Felipe Vargas - Desarrollador Web y Consultor en Tecnología'
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://felipevargas.vercel.app/'),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
