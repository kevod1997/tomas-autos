export const revalidate = 600;

import { CarGrid, CategoryCardGrid, Newsletter, Slider, TitleSeparetor } from "@/components";
import { getCarsWithTagId } from "@/actions";

export default async function Home() {

  const {cars} = await getCarsWithTagId();

  return (
    <>
      <Slider />
      <div className="sm:mx-44">
        <TitleSeparetor title="QUE BUSCAS?" />
        <CategoryCardGrid />
        <TitleSeparetor title="DESTACADOS" />
        <CarGrid  cars={cars}/>
        <TitleSeparetor title="SUSCRIBITE A NUESTRO NEWSLETTER" />
        <Newsletter />
      </div>
    </>
  )
}