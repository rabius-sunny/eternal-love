'use client'

import { twMerge } from 'tailwind-merge'

interface IButtonProps {
  title: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  bg?: string
  color?: string
  className?: string
}

export default function Button({
  title,
  onClick,
  bg,
  color,
  className,
}: IButtonProps) {
  const classNames = twMerge(
    'px-4 py-2 rounded shadow font-semibold',
    bg ? `bg-${bg}` : 'bg-danger',
    color ? `text-${color}` : 'text-white',
    className
  )
  return (
    <button className={classNames} onClick={onClick}>
      {title}
    </button>
  )
}
