import React from 'react'
import Link from 'next/link'

import Box from '../shared/Box'

export default function Footer() {
  return (
    <Box
      size='xl'
      className='pt-10 lg:pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center'
    >
      <h1 className='col-span-1 text-2xl sm:text-3xl font-bold text-rose-500'>
        Eternal Love
      </h1>
      <div className='col-span-1 text-center text-dark dark:text-light font-semibold'>
        <div className='flex justify-end lg:justify-center gap-4 sm:gap-8 items-center'>
          <Link href='/'>Biodata</Link>
          <Link href='/'>About Us</Link>
          <Link href='/'>Contact</Link>
        </div>
      </div>
      <div className=' border-t-[0.5px] border-light pt-2 lg:border-0 lg:p-0 col-span-2 lg:col-span-1 mb-1 lg:mb-0 text-center mt-10 lg:mt-0'>
        Copyright @ Eternal Love, 2023
      </div>
    </Box>
  )
}
