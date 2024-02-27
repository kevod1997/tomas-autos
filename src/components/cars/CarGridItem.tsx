'use client'

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

export const CarGridItem = () => {
    // Definición de las variantes de animación
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
                        src="/imgs/car-two.jpeg"
                        alt="FIAT TORO - Dark grey pickup truck"
                    />
                </div>
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs uppercase px-3 py-1 rounded-bl-md rounded-tr-md">
                    #Exclusivo
                </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">FIAT TORO</h3>
            <p className="text-sm text-gray-600">FREEDOM S-DESING 1.8 L AT6 L23</p>
            <p className="text-xl font-bold mt-2">$27.230.000</p>
            <p className="text-sm text-gray-600 mb-2">2015 - 150.000 KM</p>
            <Link href={"/unidades/1"}>
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
                        src="/imgs/car-two.jpeg"
                        alt="FIAT TORO - Dark grey pickup truck"
                    />
                </div>
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs uppercase px-3 py-1 rounded-bl-md rounded-tr-md">
                    #Exclusivo
                </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">FIAT TORO</h3>
            <p className="text-sm text-gray-600">FREEDOM S-DESING 1.8 L AT6 L23</p>
            <p className="text-xl font-bold mt-2">$27.230.000</p>
            <p className="text-sm text-gray-600 mb-2">2015 - 150.000 KM</p>
            <Link href={"/unidades/1"}>
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
        </>
    );
};