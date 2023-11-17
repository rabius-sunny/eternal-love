import Header from '../_components/header'
import Footer from '../_components/home/Footer'

export default function HomeLayout({ children }: IChildren) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
