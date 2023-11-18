'use client'

import { useMemo, useState } from 'react'

export default function useMediumDevice() {
  const [isMediumDevice, setIsMediumDevice] = useState<boolean>(true)
  useMemo(() => {
    if (typeof window !== 'undefined') {
      const mediumDevice = window.innerWidth < 1024
      setIsMediumDevice(mediumDevice)
    }
  }, [])

  return isMediumDevice
}
