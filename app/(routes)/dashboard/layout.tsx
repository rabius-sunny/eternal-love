'use client'

import { useState } from 'react'
import { TChildren } from '@/app'

import MobileSidebar from '@/components/dashboard/MobileSidebar'

export default function ProfileLayout({ children }: TChildren) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className={isOpen ? 'lg:grid grid-cols-10' : ''}>
      <div className={`${isOpen && 'lg:col-span-2'} relative`}>
        <MobileSidebar setIsOpen={setIsOpen} />
      </div>
      <div className={`${isOpen && 'lg:col-span-8'} min-h-screen`}>
        {children}
      </div>
    </div>
  )
}
