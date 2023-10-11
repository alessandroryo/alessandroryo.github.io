import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Toggle from "./components/Toggle";

const navigation = [
  { name: "About Me", href: "#aboutme" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-20 text-gray-900 transition-colors duration-300 bg-white border-b border-gray-200 font-jakarta bg-opacity-70 dark:border-0 dark:bg-black dark:text-white backdrop-blur-md">
      <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a href={item.href} className="text-sm font-semibold leading-6 hover:text-green-500">
                  {item.name}
                </a>
                <div className="absolute left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out mt-1"></div>
              </div>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-500" onClick={() => setMobileMenuOpen(true)}>
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="-m-1.5 p-1.5">
          <img className="block h-11 dark:hidden" src="/img/others/logo2.png" alt={"Alessandro Ryo"} />
          <img className="hidden h-11 dark:block" src="/img/others/logo.png" alt={"Alessandro Ryo"} />
        </div>
        <div className="flex justify-end flex-1">
          <Toggle />
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-20 w-full px-6 py-6 overflow-y-auto bg-white dark:bg-black">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-green-500" onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-2 font-jakarta">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-black rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
