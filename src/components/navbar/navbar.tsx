import { NavbarLogo } from './navbar-logo'
import { NavbarMenuDesktop, NavbarMenuMobile } from './navbar-menu'

export function Navbar() {
  return (
    <nav className='py-5 md:bg-white'>
      <div className='content flex justify-between items-center'>
        <NavbarLogo />
        <NavbarMenuMobile />
        <NavbarMenuDesktop />
      </div>
    </nav>
  )
}
