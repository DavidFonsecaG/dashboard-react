import { useState } from 'react'
import MenuDrawer from './MenuDrawer'
import Logo from './Logo'
import NavigationMenu from './NavigationMenu'
import SearchInput from './SearchInput'
import ProfileDropDown from './ProfileDropdown'
import MobileMenuButton from './MobileMenuButton'


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://ui.shadcn.com/avatars/04.png',
  }

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ]

  const userNavigation = [
    { name: 'Profile', href: '#' },
    { name: 'Settings', href: '/settings' },
    { name: 'Log out', href: '#' },
  ]

  return (
    <nav className="bg-white border-b h-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo/>
            {/* Navigation Menu */}
            <div className="hidden md:block">
              <NavigationMenu navigation={navigation}/>
            </div>
          </div>
          <div className="flex items-center">
            {/* Search Input */}
            <SearchInput/>
            {/* Profile dropdown */}
            <ProfileDropDown userNavigation={userNavigation} user={user}/>
          </div>
          <div className=" flex md:hidden">
            {/* Mobile menu button */}
            <MobileMenuButton setOpen={setDrawerOpen}/>
          </div>
        </div>
      </div>
      
      {/* Menu Drawer */}
      <MenuDrawer user={user} navigation={navigation} userNavigation={userNavigation} open={drawerOpen} setOpen={setDrawerOpen}/>
    </nav>
  );
}

export default Navbar;
