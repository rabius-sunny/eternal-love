import React from 'react'

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className='bg-dark text-white mb-10 font-bold py-5 text-center text-3xl rounded-b-full'>
      {title}
    </div>
  )
}
