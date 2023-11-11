import React from 'react'

export default function Box({ children }: IChildren) {
  return (
    <div className=' max-w-7xl px-4 md:px-8 xl:px-0 mx-auto'>{children}</div>
  )
}
