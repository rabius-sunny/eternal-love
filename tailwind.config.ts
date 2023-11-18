import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button | listbox | accordion).js'
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
