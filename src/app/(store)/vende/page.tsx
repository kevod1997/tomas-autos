import { CategoryCard } from "@/components/ui/category-card/CategoryCard";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { Title } from "@/components";

export const metadata = {
  title: 'Vende',
  description: 'Completa el formulario para que podamos ayudarte a vender tu auto.',
};

export default function sellPage() {
  return (
    <div className="my-12 sm:mx-44 ">
      <div className="flex justify-start pt-4 mx-4 sm:mx-0">
       <Title
          title="Vende tu auto"
          subtitle="Completa el formulario"
          className="p-2"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 pt-6 mb-12 gap-4">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 gap-2 sm:mx-0 mx-2">
          <CategoryCard
            title="OBTENE TU VALORACIÓN PERSONALIZADA"
            description="Completa el formulario y te contactamos para darte una valoración justa y precisa de tu vehículo"
            icon={<IoChatboxEllipsesOutline size={50} />}
          />
          <CategoryCard
            title="TE ACOMPAÑAMOS EN TODO EL PROCESO"
            description="Te damos soporte y asesoramiento desde la valoración hasta la venta de tu auto"
            icon={<FaUserShield  size={50} />}
          />
          <CategoryCard
            title="ENCONTRÁ AL MEJOR COMPRADOR"
            description="Conectamos directo con compradores serios para que tu venta sea rápida y al mejor precio"
            icon={<FaHandshakeSimple size={50} />}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mx-2">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:mx-0 mx-2">
          <h2 className="text-xl font-bold mb-8 text-center text-gray-800">Completá tus datos</h2>

          {/* Formulario */}
          <form className="space-y-4 ">
            <div className="space-y-2">
              <input className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Tu nombre y apellido" />
              <input className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Tu teléfono" />
              <input className="border border-gray-300 p-3 rounded w-full" type="email" placeholder="Tu mail" />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Datos de tu vehículo</h3>

            <div className="space-y-2">
              <input className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Marca" />
              <input className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Modelo" />
              <div className="grid grid-cols-2 gap-4">
                <input className="border border-gray-300 p-3 rounded" type="text" placeholder="Año" />
                <input className="border border-gray-300 p-3 rounded" type="text" placeholder="Kilometros" />
              </div>
              <textarea className="border border-gray-300 p-3 rounded w-full" placeholder="Datos adicionales que quieras comentarnos"></textarea>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out">
              ¡Enviar!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}