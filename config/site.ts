export type TSiteInfo = typeof siteInfo
export type TNavItem = {
  name: string
  href: string
}
export type TDashboardItem = {
  name: string
  href: string
  children:
    | {
        name: string
        href: string
      }[]
    | null
}

export const siteInfo = {
  name: 'Eternal Love',
  description: 'Find your future companion for eternal love.',
  navItems: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
    { name: 'Others', href: '/others' },
  ],
  dashboardItems: [
    {
      name: 'Status',
      href: '/',
      children: null,
    },
    {
      name: 'Edit Profile',
      href: '/',
      children: [
        { name: 'Profile 01', href: '/' },
        { name: 'Profile 02', href: '/' },
        { name: 'Profile 03', href: '/' },
        { name: 'Profile 04', href: '/' },
        { name: 'Profile 05', href: '/' },
      ],
    },
    {
      name: 'Tokens',
      href: '/',
      children: null,
    },
    {
      name: 'Settings',
      href: '/',
      children: [
        { name: 'Settings 01', href: '/' },
        { name: 'Settings 02', href: '/' },
      ],
    },
  ],
}
