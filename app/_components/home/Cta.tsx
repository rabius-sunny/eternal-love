import Box from '../shared/Box'
import Button from '../shared/Button'

export default function Cta() {
  return (
    <div className='relative isolate overflow-hidden bg-dark dark:bg-light pt-16 shadow-2xl md:pt-24'>
      <Box>
        <svg
          viewBox='0 0 1024 1024'
          className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
          aria-hidden='true'
        >
          <circle cx={512} cy={512} r={512} fill='red' fillOpacity='0.7' />
          <defs>
            <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
              <stop stopColor='#7775D6' />
              <stop offset={1} stopColor='#E935C1' />
            </radialGradient>
          </defs>
        </svg>
        <div className='xl:flex justify-between items-center w-full pb-20 xl:gap-4'>
          <div className='text-center md:text-start'>
            <h2 className='text-3xl font-bold tracking-tight text-rose-600 sm:text-4xl'>
              Boost your productivity. Start using our app today.
            </h2>
            <p className='font-bold tracking-tight text-white/80 dark:text-slate-600 mt-1'>
              Boost your productivity. Start using our app today. Boost your
              productivity. Start using our app today.
            </p>
          </div>
          <div className='flex items-center justify-center md:justify-start gap-x-6 mt-12 xl:mt-0'>
            <Button title='Get started' />
            <Button
              title='Learn more'
              className='bg-transparent border-[1px] border-rose-500 dark:text-slate-600'
            />
          </div>
        </div>
      </Box>
    </div>
  )
}
