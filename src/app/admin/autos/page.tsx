import Link from "next/link";
import Image from "next/image";
import { getPaginatedCarsWithImages } from "@/actions";
import { Pagination } from "@/components";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Panel de Administrador',
};

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
    <>
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
              <th scope="col" className="text-sm font-medium text-gray-900  py-4 text-left">
                Editar
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900  py-4 text-left">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
          {cars.map((car: any) => (
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
        <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
          {car.model}
        </td>
        <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
          {car.price.toLocaleString('de-DE')}
        </td>
        <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
          {car.year}
        </td>
        <td className="text-sm font-medium text-gray-900">
          <Link href={`/admin/autos/${car.slug}`}>
          <FaEdit />
          </Link>
        </td>
        <td className="text-sm font-medium text-gray-900">
          <button 
          // onClick={() => handleDelete(car.id)}
          >
             <FaTrashAlt />
          </button>
        </td>
      </tr>
    ))}
          </tbody>
        </table>

        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}