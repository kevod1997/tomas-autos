import { CarGridItem } from "./CarGridItem"

export const CarGrid = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:mx-0 mx-2">
            <CarGridItem />
            <CarGridItem />
            <CarGridItem />
            <CarGridItem />
            </div>
    )}