/* eslint-disable camelcase */
import { ReactNode } from 'react'
import {
  Merriweather_Sans,
  Roboto_Flex as Roboto,
  Hind_Vadodara,
} from 'next/font/google'

import '@/src/styles/globals.css'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import AuthProvider from '../context/AuthContext'
import ToasterContext from '../context/ToasterContext'

export const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const hind = Hind_Vadodara({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind',
})

export const merriweather = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata = {
  title: 'Home',
  description: 'Marketplace de máquinas e equipamentos de construção civil',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${hind.variable} ${merriweather.variable}`}
      >
        <AuthProvider>
          <ToasterContext />
          <Header />

          <main className="min-h-screen">{children}</main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
