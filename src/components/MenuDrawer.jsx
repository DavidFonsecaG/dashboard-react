import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

function MenuDrawer({user, navigation, userNavigation, classNames, open, setOpen}) {

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10 md:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-28">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-14 top-3 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex flex-col h-full bg-white p-6 items-end text-right">
                <DialogTitle className="flex-shrink-0">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/img/logos/mark.svg?color=gray-900&shade=500"
                      className="h-8 w-8"
                    />
                </DialogTitle>
                <div className="relative mt-3 flex-1 w-full">
                  <div className="flex flex-col items-end space-y-5 py-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                            item.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900',
                            'block text-lg font-medium',
                        )}
                        >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col items-end border-t py-3 mt-6">
                    <div className="flex items-center py-3">
                      <div>
                        <div className="text-base font-medium leading-none">{user.name}</div>
                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                      </div>
                      <div className="flex-shrink-0 ml-3">
                        <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full items-end mt-3 space-y-5">
                      {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-lg font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default MenuDrawer;
