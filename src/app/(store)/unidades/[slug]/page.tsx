import { Title } from "@/components";
import { CarMobileSlideshow } from "@/components/car/slideshow/CarMobileSlideshow";
import { ProductSlideshow } from "@/components/car/slideshow/CarSlideShow"
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoArrowBackOutline } from "react-icons/io5";

export default async function CarBySlugPage() {
  return (
    <>
      <div className="sm:mx-44 md:mx-72">
        <div className="flex w-full justify-between pt-6  items-center sm:px-0 px-5">
          <Title
            title="Catalogo"
            subtitle="Usados"
            className="p-2"
          />
          <Link href={"/unidades"}>
            <IoArrowBackOutline className="hover:scale-110 text-black" size={35} />
          </Link>
        </div>
        <div className="mt-5  mb-20 grid grid-cols-1 md:grid-cols-10 gap-3">
          {/* Slideshow */}
          <div className="col-span-1 md:col-span-6 md:w-[93%]">
            {/* Mobile Slideshow */}
            <CarMobileSlideshow
              title='Auto 1'
              images={["/imgs/Car.jpeg", "/imgs/car-two.jpeg", "/imgs/car-two.jpeg", "/imgs/car-two.jpeg", "/imgs/mercho.jpeg", "/imgs/mercho2.jpeg",]}
              className="block md:hidden"
            />

            {/* Desktop Slideshow */}
            <ProductSlideshow
              title='Auto 1'
              images={["/imgs/Car.jpeg", "/imgs/car-two.jpeg", "/imgs/car-two.jpeg", "/imgs/car-two.jpeg", "/imgs/mercho.jpeg", "/imgs/mercho2.jpeg",]}
              className="hidden md:block"
            />
          </div>

          {/* Detalles */}
          <div className="col-span-4 px-5">
            <h1 className="antialiased font-bold text-2xl ">
              FIAT TORO
            </h1>
            <p className="text-lg mb-6 font-light">FREEDOM S-DESING 1.8 L AT6 L23</p>
            {/* <p className="text-xs">Precio</p> */}
            <p className="text-4xl mb-6 font-semibold">$27.230.000</p>
            <div className="flex-grow h-[0.1px] bg-slate-800 mb-6"></div>
            <p className="mb-2 font-semibold flex justify-between items-center">Año: <span className="font-light">2015</span></p>
            <p className="mb-2 font-semibold flex justify-between items-center">Kilometraje: <span className="font-light">150.000 KM</span></p>
            <p className="mb-2 font-semibold flex justify-between items-center">Transmisión: <span className="font-light">Automática</span></p>
            <p className="mb-2 font-semibold flex justify-between items-center">Combustible: <span className="font-light">Diésel</span></p>

            {/* Sección de compartir */}
            <div className="flex justify-start items-center mt-4">
              <div className="text-sm font-semibold">Compartir:</div>
              <div className="flex space-x-4 ml-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-blue-600 hover:text-blue-800" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-blue-400 hover:text-blue-600" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-pink-600 hover:text-pink-800" /></a>
                <a href="https://api.whatsapp.com/send?text=URL_DE_LA_PUBLICACIÓN" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-green-500 hover:text-green-700" /></a>
              </div>
            </div>

            {/* Sección de contacto */}
            <div className="mt-6 flex justify-center">
              <a href="https://wa.me/NUMERO_TELEFONO?text=Me%20interesa%20el%20auto%20FIAT%20TORO%20FREEDOM" target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm">
                <FaWhatsapp className="mr-2" size={40} />
                Estoy interesado/a, ¡contactar ahora!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}