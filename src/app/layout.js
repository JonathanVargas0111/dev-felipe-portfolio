import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './store/provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jonathan Vargas | Portafolio',
  description: 'Jonathan es un ingeniero de sistemas y desarrollador web con experiencia en desarrollo de software',
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
