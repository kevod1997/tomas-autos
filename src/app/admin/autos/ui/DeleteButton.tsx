'use client'

import { useState } from 'react'; // Importa useState
import { deleteCar } from "@/actions";
import { Car } from "@/interfaces";
import { mostrarAlertaConfirmacion, mostrarAlertaError, mostrarAlertaExito } from "@/utils";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  car: Car;
}

export const DeleteButton = ({ car }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false); // Estado para controlar la visualización del mensaje

  const handleDelete = async () => {
    const resultado = await mostrarAlertaConfirmacion(
      '¿Estás seguro?',
      `Vas a eliminar el siguiente auto: <strong>${car.title} - ${car.model}</strong>.<br><br>Esta acción no se puede revertir. ¿Quieres continuar?`
    );
    if (resultado.isConfirmed) {
      setIsDeleting(true); // Muestra el mensaje de "Eliminando..."
      try {
        await deleteCar(car.id); // Asegúrate de esperar la operación de borrado
        mostrarAlertaExito('El auto ha sido borrado exitosamente.');
      } catch (error) {
        mostrarAlertaError('Ocurrió un error al intentar borrar el auto.');
      } finally {
        setIsDeleting(false); // Oculta el mensaje de "Eliminando..." una vez completada la operación
      }
    }
  };

  return (
    <>
      {isDeleting && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <p className="text-white text-lg">Eliminando...</p>
        </div>
      )}
      <button
        onClick={() => {
          handleDelete();
        }}
        disabled={isDeleting} // Deshabilita el botón mientras se está eliminando
      >
        <FaTrashAlt className="hover:scale-125" />
      </button>
    </>
  )
};
