import { redirect } from "next/navigation";
import { CarForm } from "./ui/CarForm";
import { getBrands, getCarBySlug, getFuels, getTags } from "@/actions";

interface Props {
  params: {
    slug: string;
  }
}

export const metadata = {
  title: 'Panel de Administrador',
};

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
      <CarForm brands={brands} fuels={fuels} tags={tags} car={ car ?? {}} />
    </>
  );
}