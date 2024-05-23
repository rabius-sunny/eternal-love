import { TChildren } from '@/app'

import Header from '../../_components/header'
import Footer from '../../_components/home/Footer'

export default function HomeLayout({ children }: TChildren) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
