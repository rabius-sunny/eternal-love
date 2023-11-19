'use client'

import React, { useState } from 'react'

import MobileSidebar from './MobileSidebar'

export default function PageHeader({ title }: { title: string }) {
  const [_, setIsOpen] = useState(false)
  return (
    <div className='relative bg-danger text-light mb-10 font-bold py-5 text-center text-3xl rounded-ee-full'>
      <div className='lg:hidden'>
        <MobileSidebar setIsOpen={setIsOpen} />
      </div>
      {title}
    </div>
  )
}
