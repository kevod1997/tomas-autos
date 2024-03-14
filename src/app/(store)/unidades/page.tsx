import { CarGrid, Pagination, Title } from "@/components";
import { getPaginatedCarsWithImages } from "@/actions";
import { CarFilter } from "./ui/CarFilter";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const metadata = {
  title: 'Unidades',
  description: 'Catalogo de vehiculos disponibles en Tomas Autos',
};

interface Props {
  searchParams: {
    page?: string;
    orderBy?: string;
    orderDirection?: string;
  };
}

export default async function CarsPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const orderBy = searchParams.orderBy || "tagId";
  const orderDirection = searchParams.orderDirection as 'asc' | 'desc' || "asc";

  const { cars, currentPage, totalPages, ok } = await getPaginatedCarsWithImages({ page, orderBy, orderDirection })

  if (!ok) {
    return notFound();
  }

  return (
    <div className="sm:mx-44 mb-12">
    <div className="w-full sm:flex sm:flex-row justify-between flex-col pt-6  items-center my-8">
        <Title
          title="Catálogo"
          subtitle="Unidades disponibles"
          className="p-2 mb-4 "
        />
        <Suspense>
        <CarFilter />
        </Suspense>
      </div>
      <CarGrid cars={cars!} />
            {totalPages! > 1 && (
                <Pagination totalPages={totalPages ?? 0} />
            )}
  </div>
  );
}