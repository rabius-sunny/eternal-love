import Link from 'next/link'
import { MoveLeft } from 'lucide-react'

import Box from '../_components/shared/Box'
import ThemeSwitcher from '../_components/shared/ThemeSwitcher'

export default function HomeLayout({ children }: IChildren) {
  return (
    <div className='min-h-screen'>
      <Box size='lg'>
        <header className='flex items-center justify-between py-6'>
          <Link
            href='/'
            className='flex items-center gap-3 uppercase text-xs font-semibold text-rose-600 dark:text-danger'
          >
            <MoveLeft /> <span>back Home</span>
          </Link>
          <div className='flex items-center justify-end gap-4'>
            <ThemeSwitcher />
            <Link
              href='/dashboard'
              className='text-sm font-semibold text-rose-600 dark:text-danger'
            >
              Submit <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </header>
      </Box>
      <Box size='sm' className='pb-10'>
        {children}
      </Box>
    </div>
  )
}
