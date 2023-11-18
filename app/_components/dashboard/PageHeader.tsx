'use client'

import React, { useState } from 'react'

import MobileSidebar from './MobileSidebar'

export default function PageHeader({ title }: { title: string }) {
  const [_, setIsOpen] = useState(false)
  return (
    <div className='relative bg-dark dark:bg-light text-light dark:text-dark mb-10 font-bold py-5 text-center text-3xl rounded-ee-full'>
      <div className='lg:hidden'>
        <MobileSidebar setIsOpen={setIsOpen} />
      </div>
      {title}
    </div>
  )
}
