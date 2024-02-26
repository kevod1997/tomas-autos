import { ProductSlideshow } from "@/components/car/slideshow/CarSlideShow"
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default async function CarBySlugPage() {
  return (
    <div className="mt-5 md:pt-12 mb-20 grid grid-cols-1 md:grid-cols-10 gap-3 sm:mx-44">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-5 md:w-[95%]">
        {/* Mobile Slideshow */}
        {/* <ProductMobileSlideshow
            title={product.title}
            images={product.images}
            className="block md:hidden"
          />
   */}
        {/* Desktop Slideshow */}
        <ProductSlideshow
          title='Auto 1'
          images={["/imgs/Car.jpeg", "/imgs/car-two.jpeg", "/imgs/car-two.jpeg", "/imgs/car-two.jpeg", "/imgs/car-two.jpeg"]}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-3 px-5">
        <h1 className="antialiased font-bold text-2xl ">
          FIAT TORO 
        </h1>
        <p className="text-lg mb-2 font-semibold"> <span className="font-normal">FREEDOM S-DESING 1.8 L AT6 L23</span></p>
        <p className="text-lg mb-2 font-semibold">Precio: <span className="font-normal">$27.230.000</span></p>
        <p className="mb-2 font-semibold">Año: <span className="font-normal">2015</span></p>
        <p className="mb-2 font-semibold">Kilometraje: <span className="font-normal">150.000 KM</span></p>
        <p className="mb-2 font-semibold">Transmisión: <span className="font-normal">Automática</span></p>
        <p className="mb-2 font-semibold">Combustible: <span className="font-normal">Diésel</span></p>

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
          <a href="https://wa.me/NUMERO_TELEFONO?text=Me%20interesa%20el%20auto%20FIAT%20TORO%20FREEDOM" target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
            <FaWhatsapp className="mr-2" />
            Estoy interesado/a, ¡contactar ahora!
          </a>
        </div>
      </div>
    </div>
  )
}