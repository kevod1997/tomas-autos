'use client'

import Image from "next/image";
import { motion } from "framer-motion";

// Componente con animación
const AnimatedNewsletter = () => {
    return (
        <motion.div className="py-8 grid place-content-center px-4 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}>
            <div className="lg:flex justify-start lg:gap-28" >
                <div>
                    <h1 className="font-semibold text-5xl text-center sm:text-left">Enterate primero de nuestros ingresos</h1>
                    <p className="pt-8 md:pt-4 text-gray-600">Entendemos la importancia de encontrar el vehículo perfecto que se adapte a tus necesidades y estilo de vida. Por eso, constantemente actualizamos nuestro catálogo con nuevos modelos y opciones variadas.

                    </p>
                    <p className="pt-8 md:pt-4 text-gray-600">
                        Al suscribirte a nuestro boletín, te ofrecemos una forma sencilla de mantenerse al tanto de los últimos ingresos.</p>
                    <div className="mt-8 md:flex justify-start md:gap-4">
                        <input type="email" placeholder="Ingresa tu Email" className="placeholder-gray-600 w-full md:w-1/2 p-4 grid place-items-center border rounded-md focus:outline-none" />
                        <button className="w-full md:w-auto btn-primary mt-2 sm:mt-0">Suscribite</button>
                    </div>
                </div>
                <div className="pt-8 lg:pt-0 ">
                    <Image src="/imgs/newsletter-image.jpg" alt="newsletter" width={553} height={400} className="rounded-md hidden sm:block" />
                    <div className="rounded-md sm:hidden">

                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Componente sin animación
const StaticNewsletter = () => {
    return (
        <div className="py-8 grid place-content-center px-4 mb-4">
            <div className="lg:flex justify-start lg:gap-28" >
                <div>
                    <h1 className="font-semibold text-5xl text-center sm:text-left">Enterate primero de nuestros ingresos</h1>
                    <p className="pt-8 md:pt-4 text-gray-600">Entendemos la importancia de encontrar el vehículo perfecto que se adapte a tus necesidades y estilo de vida. Por eso, constantemente actualizamos nuestro catálogo con nuevos modelos y opciones variadas.

                    </p>
                    <p className="pt-8 md:pt-4 text-gray-600">
                        Al suscribirte a nuestro boletín, te ofrecemos una forma sencilla de mantenerse al tanto de los últimos ingresos.</p>
                    <div className="mt-8 md:flex justify-start md:gap-4">
                        <input type="email" placeholder="Ingresa tu Email" className="placeholder-gray-600 w-full md:w-1/2 p-4 grid place-items-center border rounded-md focus:outline-none" />
                        <button className="w-full md:w-auto btn-primary mt-2 sm:mt-0">Suscribite</button>
                    </div>
                </div>
                <div className="pt-8 lg:pt-0 ">
                    <Image src="/imgs/newsletter-image.jpg" alt="newsletter" width={553} height={400} className="rounded-md hidden sm:block" />
                    <div className="rounded-md sm:hidden">

                    </div>
                </div>
            </div>
        </div>
    );
};

export const Newsletter = () => {

    return (
        <>
            {/* Visible solo en md y mayores */}
            <div className="hidden md:block">
                <AnimatedNewsletter />
            </div>
            {/* Visible por debajo de md */}
            <div className="md:hidden">
                <StaticNewsletter />
            </div>
        </>
    );
}


