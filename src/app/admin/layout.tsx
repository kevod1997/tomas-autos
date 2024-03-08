'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

import { SignIn, UserButton, useUser } from '@clerk/nextjs';
import clsx from 'clsx';


interface Props {

    children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
    const { user, isSignedIn, isLoaded } = useUser();
    const router = useRouter();
    const params = usePathname();
    useEffect(() => {
        if (isLoaded && isSignedIn) {
            if (user?.organizationMemberships[0]?.role !== 'org:admin') {
                setTimeout(() => router.push('/'), 1000);
            }
            if (params === '/admin') {
                router.push('/admin/autos');
            }
        }
    }, [isLoaded, isSignedIn, user, router]);

    if (!isLoaded) {
        return <div className="h-screen flex justify-center items-center">
            <p className='text-4xl text-gray-400'>Cargando...</p>
        </div>;
    } else if (!isSignedIn) {
        return <div className='h-screen flex justify-center items-center'>
            <SignIn afterSignInUrl={'/admin/autos'} />
        </div>;
    }
    else if (isSignedIn && user?.organizationMemberships[0]?.role === 'org:admin') {
        return (
            <div className="h-screen">
                <div className="sm:px-5 py-4 flex items-center gap-4 sm:gap-12 bg-slate-300 text-xs sm:text-base">
                    <UserButton afterSignOutUrl='/' />
                    <p className="bg-white rounded-md shadow-md  p-1 font-semibold">Panel de Administrador</p>
                    <Link href='/admin/autos' className={clsx(" p-1 font-semibold hover:text-blue-700", {
                        "text-blue-600": params === '/admin/autos',
                    })}
                    >Autos</Link >
                    <Link href='/admin/autos/nuevo' className={clsx(" p-1 font-semibold hover:text-blue-700", {
                        "text-blue-600": params === '/admin/autos/nuevo',
                    })}>Agregar Auto</Link >
                    <Link href='/' className="p-1 font-semibold hover:text-blue-700"
                    >Ir al home</Link >
                </div>
                {children}
            </div>
        );
    } else {
        return (
            <div className="h-screen flex-col justify-center items-center">
                <p className="text-3xl text-center mt-4 text-gray-400">No tienes permisos para ver esta página</p>
                <p className="text-3xl text-center mt-4 text-gray-400">Estas siendo redirigido...</p>
            </div>
        );
    }
}