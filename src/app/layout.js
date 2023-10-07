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
      <header>

        {/* <link rel="icon" href="/favicon.png" sizes="any" /> */}
        <link
          rel="icon"
          href="/favicon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </header>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
