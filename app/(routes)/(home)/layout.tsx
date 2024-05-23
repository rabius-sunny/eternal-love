import { TChildren } from '@/app'

import Header from '@/components/header'
import Footer from '@/components/home/Footer'

export default function HomeLayout({ children }: TChildren) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
