import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'

import { twMerge } from 'tailwind-merge'

import Provider from '@/config/Provider'
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

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang='en'>
      <body
        className={twMerge(
          inter.className,
          'bg-light dark:bg-dark text-slate-700 dark:text-slate-200'
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
