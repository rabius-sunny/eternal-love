import Navbar from '../_components/header'
import Footer from '../_components/home/Footer'

export default function HomeLayout({ children }: IChildren) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
