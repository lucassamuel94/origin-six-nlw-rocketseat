import type { Metadata } from 'next'
import '@/styles/globals.css'
import { fontHeading, fontSans } from '@/styles/fonts'
import { cn } from '@/lib/utils'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Origin Six',
  description:
    'Projeto disponibilizado pela rocketseat na nlw#6 trilha web, desenvolvido por Lucas Samuel'
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-br' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          fontHeading.variable,
          'bg-background text-gray min-h-screen font-sans antialiased'
        )}>
        {children}
      </body>
    </html>
  )
}
