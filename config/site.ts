export type TSiteInfo = typeof siteInfo
export type TNavItem = {
  name: string
  href: string
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
}
