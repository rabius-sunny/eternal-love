import React from 'react'

import Navbar from '../_components/header'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='min-h-[70vh] flex items-center justify-center'>
        <div className='flex flex-col items-center gap-6'>
          <h1 className='text-rose-500 text-3xl md:text-7xl xl:text-9xl font-bold text-center my-5'>
            Eternal Love.Com
          </h1>
          <span className='text-center border-[1px] border-slate-300 bg-white/30 font-semibold rounded-full px-4 py-2'>
            Find your spouse, just whome, where and when you want.
          </span>
          <div className='mt-10 bg-rose-500 h-60 w-full rounded-xl' />
        </div>
      </div>
    </div>
  )
}
