'use client'

import React from 'react'
import Link from 'next/link'

import { siteInfo, TDashboardItem } from '@/config/site'

export default function Sidebar() {
  return (
    <div className='h-screen absolute w-full bg-rose-500 text-white'>
      <div className='my-8'>
        <h1 className='font-bold text-3xl text-center'>Eternal Love</h1>
      </div>
      {siteInfo.dashboardItems.map((item: TDashboardItem, idx: number) => (
        <Link
          key={idx}
          href={item.href}
          className='block hover:bg-rose-300/60 hover:border-l-4 duration-75 hover:border-rose-500 my-4 py-3 px-4 font-semibold'
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
