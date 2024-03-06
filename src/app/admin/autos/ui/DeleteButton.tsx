'use client'

import { deleteCar } from "@/actions";
import { Car } from "@/interfaces";
import { mostrarAlertaConfirmacion, mostrarAlertaError, mostrarAlertaExito } from "@/utils";
import { FaTrashAlt } from "react-icons/fa";


interface Props {
    car: Car;
}

export const DeleteButton = ({ car }: Props) => {

    const handleDelete = async () => {
        const resultado = await mostrarAlertaConfirmacion(
            '¿Estás seguro?', 
            `Vas a eliminar el siguiente auto: <strong>${car.title} - ${car.model}</strong>.<br><br>Esta acción no se puede revertir. ¿Quieres continuar?` 
          );
        if (resultado.isConfirmed) {
            try {
                await deleteCar(car.id); // Asegúrate de esperar la operación de borrado
                mostrarAlertaExito('El auto ha sido borrado exitosamente.');
            } catch (error) {
                mostrarAlertaError('Ocurrió un error al intentar borrar el auto.');
            }
        }
    };
    return (
        <button
            onClick={() => {
                handleDelete();
            }}
        >
            <FaTrashAlt className="hover:scale-125" />
        </button>
    )
};
