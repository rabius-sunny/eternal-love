import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'

import { siteInfo } from '@/config/site'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteInfo.name,
    template: `%s - ${siteInfo.name}`,
  },
  description: siteInfo.description,
  authors: {
    url: 'https://fb.com/rabibinsalam',
    name: 'Rabius Sunny',
  },
  generator:
    'matrimony media spouse niqah nikah marriage husband wife love relation',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
