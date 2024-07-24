import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './store/provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Felipe Vargas | Desarrollador Web y Consultor en Tecnología',
  description: 'Portafolio de Felipe Vargas, desarrollador web con amplia experiencia en desarrollo de software, diseño web y consultoría tecnológica. Explora mis proyectos y descubre cómo puedo ayudarte a transformar tus ideas en soluciones digitales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
