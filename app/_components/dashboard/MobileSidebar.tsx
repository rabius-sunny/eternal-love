'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AlignLeft, X } from 'lucide-react'

import useMediumDevice from '@/app/_hooks/useMediumDevice'

import Sidebar from './Sidebar'

export default function MobileSidebar({
  setIsOpen
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  const [isActive, setIsActive] = useState<boolean>(false)
  const mediumDevice = useMediumDevice()

  useEffect(() => {
    if (!mediumDevice) {
      setIsActive(true)
      setIsOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediumDevice])

  return (
    <div className='fixed text-sm w-full h-full top-0 left-0 pointer-events-none z-[9] '>
      {mediumDevice && isActive && (
        <div className='absolute bg-black/30 w-full h-full top-0 left-0 z-0' />
      )}
      <motion.div
        className='relative z-[1] pointer-events-auto h-full max-w-[300px] box-border'
        animate={{ x: isActive ? 0 : -300 }}
        transition={{ type: 'spring', damping: 40, stiffness: 250 }}
      >
        <motion.button
          onTap={() => {
            setIsActive(!isActive)
            setTimeout(
              () => {
                setIsOpen((s) => !s)
              },
              isActive ? 20 : 450
            )
          }}
          className='absolute top-5 right-3 z-50'
          animate={{ x: isActive ? 7 : 80, y: isActive ? -15 : 0 }}
          transition={{ type: 'spring', damping: 40, stiffness: 250 }}
        >
          {!isActive ? (
            <AlignLeft className='h-10 w-10 text-light' />
          ) : mediumDevice ? (
            <X className='h-10 w-10 bg-white rounded-full text-danger' />
          ) : (
            <span className='text-light text-xs border-[1px] font-light border-light py-px px-1 rounded'>
              hide sidebar
            </span>
          )}
        </motion.button>
        <Sidebar />
      </motion.div>
    </div>
  )
}
