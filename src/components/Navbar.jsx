import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import MenuDrawer from './MenuDrawer'


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
    { name: 'Settings', href: '#' },
    { name: 'Log out', href: '#' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
        <nav className="bg-white border-b h-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=gray-900&shade=500"
                    className="h-8 w-8"
                  />
                </div>
                {/* Navigation Menu */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline md:space-x-5 lg:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900',
                          'text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                {/* Search Input */}
                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <MagnifyingGlassIcon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <input 
                    placeholder="Search" 
                    type="text" 
                    name="search"
                    className="placeholder:text-gray-400 block bg-white w-full border rounded-md py-2.5 pl-9 md:pr-9 focus:outline-none focus:ring-gray-400 focus:ring-1 text-sm md:shadow-sm" 
                  />
                </label>
                {/* Profile dropdown */}
                <Menu as="div" className="hidden md:block relative ml-4">
                  <MenuButton className="relative flex min-w-9 max-w-xs items-center rounded-full bg-white text-sm focus:outline-none">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img alt="" src={user.imageUrl} className="h-9 w-9 rounded-full" />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <span className="block px-4 py-3 text-sm font-bold text-gray-900 border-b">My Account</span>
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-1.5 m-1 text-sm text-gray-700 rounded-md data-[focus]:bg-gray-100"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
              <div className=" flex md:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={() => setDrawerOpen(true)} 
                  className="group relative inline-flex items-center justify-center rounded-md bg-transparent border p-2 text-black hover:bg-gray-100 focus:outline-none"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Menu Drawer */}
          <MenuDrawer user={user} navigation={navigation} userNavigation={userNavigation} classNames={classNames} open={drawerOpen} setOpen={setDrawerOpen}/>
        </nav>
  );
}

export default Navbar;
