import { redirect } from "next/navigation";
import { CarForm } from "./ui/CarForm";
import { getBrands, getCarBySlug, getFuels, getTags } from "@/actions";
import { Title } from "@/components";

interface Props {
  params: {
    slug: string;
  }
}

// export const metadata = {
//   title: 'Panel de Administrador',
// };

export default async function ProductPage({ params }: Props) {

  const { slug } = params;


  const [brands, fuels, tags, car] = await Promise.all([
    getBrands(), getFuels(), getTags(), getCarBySlug(slug),
  ]);


  if (slug !== 'nuevo' && !car) {
    redirect('/admin/autos')
  }

  return (
    <>
    <div className="flex justify-start">
      <Title title={slug === 'nuevo' ? 'Nuevo Auto' : 'Editar Auto'} subtitle={slug !== 'nuevo' ? car?.title : '' } className="px-5 py-2 mx-4   bg-white rounded-md shadow-md mt-4" />
    </div>
      <CarForm brands={brands} fuels={fuels} tags={tags} car={ car ?? {}} />
    </>
  );
}