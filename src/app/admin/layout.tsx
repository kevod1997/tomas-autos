'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { UserButton, useUser } from '@clerk/nextjs';

export default function AdminLayout({ children }: {
    children: React.ReactNode;
}) {
    const { user, isSignedIn, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && isSignedIn) {
            if (user?.organizationMemberships[0]?.role !== 'org:admin') {
                setTimeout(() => router.push('/'), 1000);
            }
        }
    }, [isLoaded, isSignedIn, user, router]);

    if (!isLoaded) {
        return <div className="h-screen flex justify-center items-center">
            <p className='text-4xl text-gray-400'>Cargando...</p>
        </div>;
    } else if (isSignedIn && user?.organizationMemberships[0]?.role === 'org:admin') {
        return (
            <div className="h-screen">
                <div className="p-4 flex gap-12 bg-slate-300">
                    <UserButton afterSignOutUrl='/' />
                    <p className="bg-white rounded-md shadow-md p-1 font-semibold">Panel de Administrador</p>
                    <Link href='/admin/autos' className="p-1 font-semibold">Autos</Link >
                    <Link href='/admin/autos/nuevo' className="p-1 font-semibold">Agregar Auto</Link >
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