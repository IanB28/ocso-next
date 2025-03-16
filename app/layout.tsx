import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import './globals.css'
import Providers from '@/providers'

export const metadata: Metadata = {
  title: 'Ocso',
  description: 'Pagina web de administracion de Ocsos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Providers>{children}</Providers></body>
      {children}        
    </html>
  )
}
