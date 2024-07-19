import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const MobileMenuButton = ({setDrawerOpen}) => {

    return (
        <button
            onClick={() => setDrawerOpen(true)} 
            className="group relative inline-flex items-center justify-center rounded-md bg-transparent border p-2 text-black hover:bg-gray-100 focus:outline-none"
        >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
        </button>
    );
  }
  
  export default MobileMenuButton;
  