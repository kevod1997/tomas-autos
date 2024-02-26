import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white pt-10 pb-4">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div className="sm:mb-0 hidden sm:block">
          <Image src="/imgs/logo-tr.png" alt="JR Automotores logo" width={125} height={125} className="mt-[-10px]" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div className="flex  justify-center items-center mb-2">
            <FaPhone className="text-blue-400 mr-2" />
            <span>2284-537622</span>
          </div>
          <div className="flex  justify-center items-center mb-2">
            <FaPhone className="text-blue-400 mr-2" />
            <span>2284-562439</span>
          </div>
          <div className="flex  justify-center items-center mb-2">
            <FaEnvelope className="text-blue-400 mr-2" />
            <span>tomas-autos@gmail.com</span>
          </div>
          <div className="flex  justify-center items-center">
            <FaMapMarkerAlt className="text-blue-400 mr-2" />
            <span>Av. Urquiza 2216, Olavarria</span>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
          <h3 className="text-lg mb-4">Seguinos en nuestras redes!</h3>
          <div className="flex gap-8">
            <a href="#" className="text-blue-600 hover:text-white">
              <FaFacebookF size={40} />
            </a>
            <a href="#" className="text-red-700 hover:text-white">
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-400 my-4" />
      <div className="text-center text-xs">
        © 2024 Tomas Autos | Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;