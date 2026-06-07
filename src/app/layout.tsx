import { Navbar } from '@/components/navbar/navbar'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Consórcio Centro Sul I',
  description: 'Arranjo institucional voltado ao planejamento regional e a soluções compartilhadas para desafios comuns, como a destinação ambientalmente adequada de resíduos, a coleta seletiva e a educação ambiental.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className={`${sourceSans.variable} antialiased`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
