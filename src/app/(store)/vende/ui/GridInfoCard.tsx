import { CategoryCard } from "@/components"

import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

export const GridInfoCard = () => {
    return (
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
    )
}