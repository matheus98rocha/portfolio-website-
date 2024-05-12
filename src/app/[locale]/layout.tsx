import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackgroundBeams } from '@/components/ui/background-beams/background-beams'
import { FloatingNav } from '@/components/ui/floating-nav/floating-nav'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()
  return (
    <html>
      <body className={`${inter.className} bg-black`}>
        <div className='flex h-screen flex-col items-center justify-start scroll-smooth bg-black'>
          <BackgroundBeams />
          <NextIntlClientProvider messages={messages}>
            <FloatingNav />
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  )
}
