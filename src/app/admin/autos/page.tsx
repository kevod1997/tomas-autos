import Image from "next/image";
import { getPaginatedCarsWithImages } from "@/actions";
import { Pagination } from "@/components";
import { DeleteButton } from "./ui/DeleteButton";
import { EditButton } from "./ui/EditButton";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function CarsPage({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { cars, currentPage, totalPages } =
    await getPaginatedCarsWithImages({ page });

  return (
    <div className="mb-10">
      <table className="min-w-full">
        <thead className="bg-gray-200 border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900  py-4 text-left"
            >
              Imagen
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900  py-4 text-left"
            >
              Titulo
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900  py-4 text-left"
            >
              Precio
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900  py-4 text-left"
            >
              Año
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900  py-4 text-left"
            >
              Tag
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900  py-4 text-left">
              Editar
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900  py-4 text-left">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {cars!.map((car: any) => (
            <tr key={car.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className=" text-sm font-medium text-gray-900">
                <Image
                  src={car.CarImage[0]?.url}
                  alt={car.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded"
                />
              </td>
              <td className="text-xs sm:text-sm text-gray-900 font-light  ">
                {car.title}
              </td>
              <td className="text-xs sm:text-sm text-gray-900 font-light  ">
                {car.price.toLocaleString('de-DE')}
              </td>
              <td className="text-xs sm:text-sm text-gray-900 font-light  ">
                {car.year}
              </td>
              <td className="text-xs sm:text-sm text-gray-900 font-light  ">
                {car.tag!}
              </td>
              <td className="text-sm font-medium text-gray-900 pl-2">
                <EditButton slug={car.slug} />
              </td>
              <td className="text-sm font-medium text-gray-900 ">
                <DeleteButton car={car} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages! > 1 && (
        <Pagination totalPages={totalPages!} />
      )}
    </div>
  );
}