import { CarGridItem } from "./CarGridItem"

export const CarGrid = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <CarGridItem />
            <CarGridItem />
            <CarGridItem />
            <CarGridItem />
            </div>
    )}