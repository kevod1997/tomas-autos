import { Car } from "@/interfaces"
import { CarGridItem } from "./CarGridItem"

interface Props {
    cars: Car[]
};

export const CarGrid = ({cars}: Props) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:mx-0 mx-2">
            {cars.map((car) => (
                <CarGridItem key={car.id} car={car} />
            ))}
            </div>
    )}