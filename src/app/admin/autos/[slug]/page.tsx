import { redirect } from "next/navigation";
import { CarForm } from "./ui/CarForm";
import { getBrands, getFuels, getTags } from "@/actions";

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


  const [brands, fuels, tags] = await Promise.all([
    getBrands(), getFuels(), getTags()
  ]);


  if (slug !== 'nuevo') {
    redirect('/admin/autos')
  }

  // const title = (slug === 'new') ? 'Nuevo producto' : 'Editar producto'

  return (
    <>
      {/* <Title title={ title } /> */}

      {/* <ProductForm product={ product ?? {} } categories={ categories } />
         */}
      <CarForm brands={brands} fuels={fuels} tags={tags} />
    </>
  );
}