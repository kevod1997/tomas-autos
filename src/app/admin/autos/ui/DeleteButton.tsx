'use client'

import { deleteCar } from "@/actions";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
    carId: string
}

export const DeleteButton = ({ carId }: Props) => {
    return (
        <button
            onClick={() => deleteCar(carId)}
        >
            <FaTrashAlt />
        </button>
    )
};
