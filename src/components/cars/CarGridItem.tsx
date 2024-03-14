'use client'

export const revalidate = 86400;

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { Car, CarImage } from '@/interfaces';
import clsx from 'clsx';
import { UseRedirect } from '@/hooks/useRedirect';
import { RedirectAnimation } from '../ui/redirect/RedirectAnimation';

interface Props {
    car: Partial<Car> & { CarImage?: CarImage[] }
}

export const CarGridItem = ({ car }: Props) => {
    const {redirectTo, isRedirecting} =  UseRedirect();
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    // Componente sin animación para pantallas pequeñas
    const StaticComponent = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <div className="relative w-full square">
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <Image
                        fill={true}
                        className="object-fit rounded-md"
                        src={car.CarImage?.[0]?.url ?? ''}
                        alt={car.title ?? ''}
                    />
                </div>
                {car.tag && <div className="absolute top-0 left-0 bg-red-600 text-white text-xs uppercase px-3 py-1 rounded-bl-md rounded-tr-md">
                    {`#${car.tag}`}
                </div>}

            </div>
            <h1 className="text-lg font-semibold mt-4 line-clamp-1">{car.title}</h1>
            <p className="text-sm text-gray-600 line-clamp-1">{car.model}</p>
            <p className="font-bold mt-2 text-xl">U$S {car.price?.toLocaleString('de-DE')}</p>
            <p className="text-sm text-gray-600 mb-2">{car.year} - {car.kms?.toLocaleString('de-DE')} KM</p>
            <Link href={`/unidades/${car.slug}`} onClick={() => redirectTo()}>
                <button className="btn-primary w-full text-center">VER MÁS</button>
            </Link>
        </div>
    );

    // Componente con animación para pantallas más grandes
    const AnimatedComponent = () => (
        <motion.div
            className="bg-white rounded-lg shadow-lg p-6 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={variants}
        >
            <div className="relative w-full square">
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <Image
                        fill={true}
                        className="object-fit rounded-md"
                        src={car.CarImage?.[0]?.url ?? ''}
                        alt={car.title ?? ''}
                    />
                </div>
                <div className={clsx(
                    'absolute top-0 left-0 bg-red-600 text-white text-xs uppercase px-3 py-1 rounded-bl-md rounded-tr-md',
                    { 'hidden': !car.tag }

                )}>
                    #{car.tag}
                </div>
            </div>
            <h3 className="text-lg font-semibold mt-4 title line-clamp-1">{car.title}</h3>
            <p className="text-sm text-gray-600">F{car.model}</p>
            <p className="text-2xl font-bold mt-2">U$S {car.price?.toLocaleString('de-DE')}</p>
            <p className="text-sm text-gray-600 mb-2">{car.year} - {car.kms?.toLocaleString('de-DE')} KM</p>
            <Link href={`/unidades/${car.slug}`} onClick={()=> redirectTo()}>
                <button className="btn-primary w-full text-center">VER MÁS</button>
            </Link>
        </motion.div>
    );

    // Renderizado condicional basado en clases de Tailwind para controlar la visibilidad
    return (
        <>
            {/* Visible solo en md y mayores */}
            <div className="hidden md:block">
                <AnimatedComponent />
            </div>
            {/* Visible por debajo de md */}
            <div className="md:hidden">
                <StaticComponent />
            </div>
            <RedirectAnimation isRedirecting={isRedirecting} />
        </>
    );
};