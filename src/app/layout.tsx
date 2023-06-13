import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Home',
  description: 'Marketplace de máquinas e equipamentos de construção civil',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
