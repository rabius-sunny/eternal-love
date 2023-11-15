import { twMerge } from 'tailwind-merge'

interface IProps {
  title: string
  className?: string
}
export default function SectionHeader({ title, className }: IProps) {
  const classNames = twMerge(
    'text-3xl sm:text-4xl lg:text-5xl text-center text-rose-500 uppercase font-light mb-10 lg:mb-20',
    className
  )
  return <h1 className={classNames}>{title}</h1>
}
