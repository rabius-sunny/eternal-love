'use client'

import Link from 'next/link'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Edit, LineChartIcon, Settings2, Ticket } from 'lucide-react'

import ThemeSwitcher from '../shared/ThemeSwitcher'

interface IDashboardItem {
  name: string
  href: string
  icon: any
  children?:
    | {
        name: string
        href: string
        icon: any
      }[]
    | null
}

export default function Sidebar() {
  return (
    <div className='h-screen absolute w-full bg-danger text-white'>
      <div className='my-8'>
        <h1 className='font-bold text-3xl text-center'>Eternal Love</h1>
      </div>
      {dashboardItems.map((item: IDashboardItem, idx: number) =>
        item.children ? (
          <Accordion
            isCompact
            key={idx}
            className='py-1 px-3 w-full hover:bg-default-100/30'
          >
            <AccordionItem
              startContent={<item.icon />}
              key={item.name}
              aria-label={item.name}
              title={item.name}
              className='w-full'
            >
              {item.children?.map((child, i) => (
                <Link
                  href={child.href}
                  key={i}
                  className='p-3 w-full flex items-center gap-2 hover:bg-default-100/30'
                >
                  <child.icon /> <span>{child.name}</span>
                </Link>
              ))}
            </AccordionItem>
          </Accordion>
        ) : (
          <Link
            href={item.href}
            key={idx}
            className='w-full flex items-center gap-2 p-3 hover:bg-default-100/30'
          >
            <item.icon /> <span>{item.name}</span>
          </Link>
        )
      )}
      <ThemeSwitcher />
    </div>
  )
}

const dashboardItems: IDashboardItem[] = [
  {
    name: 'Status',
    href: '/dashboard',
    icon: LineChartIcon,
    children: null
  },
  {
    name: 'Edit Profile',
    href: '/',
    icon: Edit,
    children: [
      { name: 'Primary', href: '/dashboard/edit-profile/primary', icon: Edit },
      {
        name: 'General Info',
        href: '/dashboard/edit-profile/general-info',
        icon: Edit
      },
      {
        name: 'Marriage Related',
        href: '/dashboard/edit-profile/marriage-related',
        icon: Edit
      },
      {
        name: 'Expectation',
        href: '/dashboard/edit-profile/expectation',
        icon: Edit
      },
      { name: 'Contact', href: '/dashboard/edit-profile/contact', icon: Edit }
    ]
  },
  {
    name: 'Tokens',
    href: '/',
    icon: Ticket,
    children: null
  },
  {
    name: 'Settings',
    href: '/',
    icon: Settings2,
    children: [
      { name: 'Settings 01', href: '/', icon: Settings2 },
      { name: 'Settings 02', href: '/', icon: Settings2 }
    ]
  }
]
