import { CarGrid, Pagination, Title } from "@/components";
import { CarFilter } from "./ui/CarFilter";
import { getPaginatedCarsWithImages } from "@/actions";

export const metadata = {
  title: 'Unidades',
  description: 'Catalogo de vehiculos disponibles en Tomas Autos',
};

interface Props {
  searchParams: {
    page?: string;
  };
}



export default async function ProductsPage({searchParams}: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { cars, currentPage, totalPages } =
    await getPaginatedCarsWithImages({ page });
    console.log(cars);

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
      <CarGrid cars={cars}/>
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} />
      )}
    </div>
  );
}