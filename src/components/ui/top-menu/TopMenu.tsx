'use client'
import Image from "next/image";
import Link from "next/link";

import { useUIStore } from '@/store';
import WhatsAppLink from "../whatsapp/WhatsAppLogo";



const menuItems = [
  { href: "/", label: "Home" },
  { href: "/autos", label: "Unidades" },
  { href: "/vende-tu-auto", label: "Vende tu auto" },
  { href: "#contacto", label: "Contacto" },
];

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse ml-6 sm:ml-0">
          <Image src="/imgs/logo.jpg" height={75} width={75} alt="Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="hidden md:block">
            <div className="flex gap-8 font-medium">
              <WhatsAppLink name="Juani" spanClassname="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" linkClassName="flex items-center" />
              <WhatsAppLink name="Tomas" spanClassname="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" linkClassName="flex items-center" />
            </div>
          </div>
          <button onClick={openSideMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
            {/* SVG inline */}
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <div className="flex flex-col ml-24 p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {menuItems.map((item) => {
              const classname = "block py-2 px-3 text-gray-700 m-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-600 cursor-pointer relative before:absolute before:inset-x-0 before:w-0 before:h-0.5 before:bg-blue-600 before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 hover:before:w-full hover:scale-110";
              if (item.label === "Home") {
                return (
                  <li key={item.label} onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })}
                    className={classname}>
                    {item.label}
                  </li>
                );
              } else if (item.label === "Contacto") {
                return (
                  <li key={item.label} onClick={() => window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                  })}
                    className={classname}>
                    {item.label}
                  </li>
                );
              } else {
                return (
                  <Link key={item.href} href={item.href} className={classname}>
                    {item.label}
                  </Link>
                );
              }
            }
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
