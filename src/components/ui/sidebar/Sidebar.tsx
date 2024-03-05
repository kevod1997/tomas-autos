'use client'

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { IoCloseOutline, IoCarSportOutline, IoCashOutline, IoDiamondSharp } from "react-icons/io5";
import WhatsAppLink from "./whatsapp/WhatsAppLogo";
import { useUser } from "@clerk/nextjs";




export const Sidebar = () => {
    const {user} = useUser();
    const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
    const closeMenu = useUIStore((state) => state.closeSideMenu);

    return (
        <div>
            {/* Background black */}
            {isSideMenuOpen && (
                <div className="fixed top-0 left-0 w-1/2 h-screen z-10 opacity-30" />
            )}

            {/* Blur */}
            {isSideMenuOpen && (
                <div
                    onClick={closeMenu}
                    className="fade-in fixed top-0 left-0 w-1/2 h-screen z-10 backdrop-filter backdrop-blur-sm"
                />
            )}

            {/* Sidemenu */}

            <nav className={clsx(
                "fixed p-5 right-0 top-0 w-1/2 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                {
                    "translate-x-full": !isSideMenuOpen,
                }
            )}>
                <IoCloseOutline
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => closeMenu()}
                />

                <Link
                    href="/unidades"
                    onClick={() => closeMenu()}
                    className="flex items-center mt-16 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoCarSportOutline size={30} />
                    <span className="ml-3 text-xl">Unidades</span>
                </Link>
                <Link
                    href="/vende"
                    onClick={() => closeMenu()}
                    className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoCashOutline size={30} />
                    <span className="ml-3 text-xl">Vende tu auto</span>
                </Link>
                <Link
                    href="/admin/autos"
                    onClick={() => closeMenu()}
                    className={clsx(
                        "flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all",
                        {
                            'hidden': user?.organizationMemberships[0]?.role !== 'org:admin'
                        }
                    )}
                >
                    <IoDiamondSharp size={30} />
                    <span className="ml-3 text-xl">Panel de administrador</span>
                </Link>

                <p className="text-xl mb-4 text-center mt-10">
                    Contacto
                </p>
                {/* Line Separator */}
                <div className="w-full h-px bg-gray-200 mb-4" />
                <WhatsAppLink name="Juani" spanClassname="ml-3 text-xl" linkClassName="flex items-center p-2 hover:bg-gray-100 rounded transition-all" />
                <WhatsAppLink name="Tomas" spanClassname="ml-3 text-xl" linkClassName="flex items-center p-2 hover:bg-gray-100 rounded transition-all" />
            </nav>

        </div>
    );
}