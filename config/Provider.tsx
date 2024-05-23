'use client'

import React from 'react'
import { TChildren } from '@/app'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

export default function Provider({ children }: TChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  )
}
