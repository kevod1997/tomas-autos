import Image from "next/image";
import React, { useState } from "react";

export const Newsletter = () => {

    return (
        <div>
            <div className="mx-4 md:mx-12 py-8 md:py-12 grid place-content-center px-4 md:px-0">
                <div className="lg:flex justify-start lg:gap-28">
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
                    <div className="pt-8 lg:pt-0 h1/2">
                        <Image  src="/imgs/newsletter-image.jpg" alt="newsletter" width={630} height={400} className="rounded-md hidden sm:block" />
                        <div className="rounded-md sm:hidden"> 
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
}


