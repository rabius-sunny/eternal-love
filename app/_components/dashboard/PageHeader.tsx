import React from 'react'

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className='bg-dark dark:bg-light text-light dark:text-dark mb-10 font-bold py-5 text-center text-3xl rounded-b-full'>
      {title}
    </div>
  )
}
