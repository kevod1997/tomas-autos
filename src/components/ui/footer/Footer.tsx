

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-4">
    <div className="max-w-6xl mx-auto px-5 sm:px-10 flex flex-wrap justify-between items-center mb-4">
      <div className="mb-4 sm:mb-0">
        <img src="https://placehold.co/200x50?text=TOMAS-AUTOS&font=sans" alt="JR Automotores logo" />
      </div>
      <div className="text-sm">
        <div className="flex items-center mb-2">
          <i className="fas fa-phone-alt text-blue-400 mr-2"></i>
          <span>011 4574-0056</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-envelope text-blue-400 mr-2"></i>
          <span>info@jrautomotores.com.ar</span>
        </div>
        <div className="flex items-center mb-4">
          <i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>
          <span>Av. de los Constituyentes 5640 Ciudad Autónoma de Buenos Aires</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook-f"></i>Facebook</a>
          <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-WA"></i>Instagram</a>
          <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-WA"></i>WhatsApp</a>
          <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i>WhatsApp</a>
        </div>
      </div>
    </div>
    <div className="w-full h-px bg-gray-500 mb-4" />
    <div className="text-center text-xs text-gray-500 mt-2">
      © 2023 JR Automotores. Todos los derechos reservados. | Defensa del Consumidor
    </div>
  </footer>
  );
};

export default Footer;