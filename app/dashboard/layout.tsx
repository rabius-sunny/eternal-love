import Sidebar from '../_components/dashboard/Sidebar'
import Box from '../_components/shared/Box'

export default function ProfileLayout({ children }: IChildren) {
  return (
    <div className={`lg:grid grid-cols-10`}>
      <div className='hidden lg:block lg:col-span-2 relative'>
        <Sidebar />
      </div>
      <Box className='lg:col-span-8 min-h-screen'>{children}</Box>
    </div>
  )
}
