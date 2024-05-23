import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './config/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      light: '#F3D9DA',
      dark: '#430049',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.pink,
      rose: colors.rose,
      red: colors.red,
      neutral: colors.neutral,
      slate: colors.slate,
      transparent: colors.transparent
    }
  },
  plugins: [nextui()],
  darkMode: 'class'
}
export default config
