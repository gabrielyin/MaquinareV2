/* eslint-disable camelcase */
import { ReactNode } from 'react'

import '@/src/styles/globals.css'

import { hind, merriweather, roboto } from '@/src/app/(visitor)/layout'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'

export const metadata = {
  title: 'Home',
  description: 'Marketplace de máquinas e equipamentos de construção civil',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${hind.variable} ${merriweather.variable} bg-body`}
      >
        <Header />

        <main className="min-h-screen p-6">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
