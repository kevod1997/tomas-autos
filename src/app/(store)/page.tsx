import { CarGrid, CategoryCardGrid, Newsletter, Slider, TitleSeparetor } from "@/components";


export default function Home() {

  return (
    <>
      <Slider />
      <div className="sm:mx-44">
        <TitleSeparetor title="QUE BUSCAS?" />
        <CategoryCardGrid />
        <TitleSeparetor title="DESTACADOS" />
        <CarGrid />
        <TitleSeparetor title="SUSCRIBITE A NUESTRO NEWSLETTER" />
        <Newsletter />
      </div>
    </>
  )
}