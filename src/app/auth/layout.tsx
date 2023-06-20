/* eslint-disable camelcase */
import { ReactNode } from 'react'

import '@/src/styles/globals.css'

import { hind, merriweather, roboto } from '@/src/app/(visitor)/layout'
import Footer from '@/src/components/Footer'

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
        <main className="grid min-h-screen place-items-center p-6">
          <div>
            <header className="flex flex-col gap-4">
              <h1 className="text-center font-ter text-4xl font-bold">
                Bem-vindo ao Maquinare
              </h1>

              <p className="mx-auto max-w-sm text-center text-slate-400">
                Ao acessar, aceito os Termos de uso e Política de privacidade do
                Maquinare
              </p>

              <hr
                className="mx-auto w-16 border-2
          border-candlelight-400"
              />
            </header>

            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  )
}
