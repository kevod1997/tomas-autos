import { CarGrid, Title } from "@/components";
import { CarFilter } from "./ui/CarFilter";

export const metadata = {
  title: 'Unidades',
  description: 'Catalogo de vehiculos disponibles en Tomas Autos',
};


export default function ProductsPage() {


  return (
    <div className="sm:mx-44 mb-12">
      <div className="w-full sm:flex sm:flex-row justify-between flex-col pt-6  items-center my-8">
        <Title
          title="Catalogo"
          subtitle="Unidades disponibles"
          className="p-2 mb-4 sm:mb-0"
        />
        <CarFilter />
      </div>
      <CarGrid />
      <div className="my-4"></div>
      <CarGrid />
      <div className="my-4"></div>
    </div>
  );
}