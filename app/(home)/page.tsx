import React from 'react'
import { SlackIcon } from 'lucide-react'

import Cta from '../_components/home/Cta'
import Box from '../_components/shared/Box'
import SectionHeader from '../_components/shared/SectionHeader'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className='min-h-[70vh] flex items-center justify-center'>
        <div className='flex flex-col items-center gap-6'>
          <h1 className='text-danger text-3xl md:text-7xl xl:text-9xl font-bold text-center my-5'>
            Eternal Love.Com
          </h1>
          <span className='text-center border-[1px] border-slate-300 bg-white/30 font-semibold rounded-full px-4 py-2'>
            Find your spouse, just whome, where and when you want.
          </span>
          <div className='mt-10 bg-danger h-60 w-full rounded-xl' />
        </div>
      </div>

      {/* Fetured Biodata Section */}
      <div className='my-20'>
        <SectionHeader title='Featured Biodata' />
        <Box className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8'>
          {[1, 2, 3, 4].map((idx) => (
            <div key={idx} className='col-span-1 h-52 rounded bg-danger' />
          ))}
        </Box>
      </div>

      {/* Site Feature Section */}
      <div className='my-20'>
        <SectionHeader title='Why Eternal Love?' />
        <Box
          size='md'
          className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'
        >
          {[1, 2, 3, 4].map((idx) => (
            <div key={idx}>
              <h1 className='text-xl font-semibold mb-5 flex items-center gap-3'>
                <SlackIcon />
                <span>Lorem ipsum dolor sit</span>
              </h1>
              <div className='pl-8'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                dignissimos fugiat quas nulla. Optio, repudiandae. Perspiciatis
                quaerat inventore ratione officia.
              </div>
            </div>
          ))}
        </Box>

        <Box size='md' className='mt-20 grid grid-cols-5 gap-8'>
          <div className='col-span-5 md:col-span-2 h-52 rounded-lg bg-danger'></div>
          <div className='col-span-5 md:col-span-3'>
            <h1 className='text-xl font-semibold mb-5'>
              Lorem ipsum dolor sit
            </h1>
            <div className='pl-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              dignissimos fugiat quas nulla. Optio, repudiandae. Perspiciatis
              quaerat inventore ratione officia. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde qui eligendi ipsa consectetur
              asperiores. Esse deleniti laboriosam praesentium temporibus
              molestias?
            </div>
          </div>
        </Box>
        <Box size='md' className='mt-10 grid grid-cols-5 gap-8'>
          <div className='col-span-5 md:col-span-3'>
            <h1 className='text-xl font-semibold mb-5'>
              Lorem ipsum dolor sit
            </h1>
            <div className='pl-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              dignissimos fugiat quas nulla. Optio, repudiandae. Perspiciatis
              quaerat inventore ratione officia. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde qui eligendi ipsa consectetur
              asperiores. Esse deleniti laboriosam praesentium temporibus
              molestias?
            </div>
          </div>
          <div className='col-span-5 order-first md:order-last md:col-span-2 h-52 rounded-lg bg-danger'></div>
        </Box>
      </div>

      {/* CTA section */}
      <Cta />
    </div>
  )
}
