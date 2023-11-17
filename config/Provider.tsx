'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider } from 'next-themes'

export default function Provider({ children }: IChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  )
}
