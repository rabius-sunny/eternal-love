'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useCycle } from 'framer-motion'

import { siteInfo, TNavItem } from '@/config/site'

import Box from '../shared/Box'
import ThemeSwitcher from '../shared/ThemeSwitcher'
import SideNavbar from './SideNavbar'
import NavToggler from './Toggle'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [blur, setBlur] = useState(false)

  return (
    <header className='bg-rose-500 text-white'>
      <Box>
        <div
          className='flex items-center justify-between py-6'
          aria-label='Global'
        >
          <div className='flex ml-14 gap-12'>
            <Link href='/' className='font-extrabold'>
              <span className='sr-only'>Eternal Love</span>
              Eternal Love
            </Link>
            <div className='hidden md:flex md:gap-x-8'>
              {siteInfo.navItems.map((item: TNavItem) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-sm font-semibold leading-6'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='z-[1000] md:hidden'>
            <motion.nav
              className=' absolute top-0 left-0 bottom-0 w-[300px]'
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
            >
              <motion.div
                className=' absolute top-0 left-0 bottom-0 w-[300px] bg-rose-500'
                variants={sidebar}
              />
              <SideNavbar />
              <NavToggler
                toggle={() => {
                  toggleOpen()
                  setTimeout(
                    () => {
                      setBlur(!blur)
                    },
                    isOpen ? 600 : 300
                  )
                }}
              />
            </motion.nav>
          </div>
          {blur && (
            <div
              className='fixed inset-0 z-50 bg-black/20 backdrop-blur-sm'
              aria-hidden='true'
            />
          )}

          <div className='flex items-center justify-end gap-4'>
            <ThemeSwitcher />
            <Link href='/dashboard' className='text-sm font-semibold leading-6'>
              Submit <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </div>
      </Box>
    </header>
  )
}
