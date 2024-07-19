import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const ProfileDropDown = ({user, userNavigation}) => {

    return (
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
    );
  }
  
  export default ProfileDropDown;
  