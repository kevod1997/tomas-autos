import { Slider, TitleSeparetor } from "@/components";
import { Newsletter } from "@/components/ui/newsletter/Newsletter";




export default function Home() {
  return (
    <>
      <Slider />
      <div className="sm:mx-44">
        <TitleSeparetor title="DESTACADOS" />
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img className="w-full h-40 object-cover rounded-md" src="https://placehold.co/256x144.png?text=FIAT+TORO" alt="FIAT TORO - Dark grey pickup truck"/>
            <h3 className="text-lg font-semibold mt-4">FIAT TORO</h3>
            <p className="text-sm text-gray-600">FREEDOM S-DESING 1.8 L AT6 L23</p>
            <p className="text-xl font-bold my-2">$27.230.000</p>
            <button className="btn-primary">VER MÁS</button>
        </div>
            <div className="bg-white rounded-lg shadow-md p-4 h-48 sm:h-72 flex justify-center items-center">Card 2</div>
            <div className="bg-white rounded-lg shadow-md p-4 h-48 sm:h-72 flex justify-center items-center">Card 3</div>
            <div className="bg-white rounded-lg shadow-md p-4 h-48 sm:h-72 flex justify-center items-center">Card 4</div>
          </div>
        </div>
        <TitleSeparetor title="SUSCRIBITE A NUESTRO NEWSLETTER" />
        <Newsletter />
      </div>
    </>
  )
}