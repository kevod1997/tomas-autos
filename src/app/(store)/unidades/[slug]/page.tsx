export const revalidate = 600;

import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCarBySlug } from "@/actions";
import { Title, CarMobileSlideshow, CarSlideshow } from "@/components";
import { IoArrowBackOutline } from "react-icons/io5";
import { SharingAndContactSection } from "./ui/sharing-contact.section/SharingAndContact";
import { BackwardButton } from "./ui/buttons/BackwardButton";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const car = await getCarBySlug(slug);

  // Define la base de la URL para tus metadatos, especialmente importante para entornos de producción
  const metadataBase = new URL("https://tomas-autos.vercel.app/"); // Cambia esto por la URL base de tu sitio

  return {
    title: car?.title ?? "Producto no encontrado",
    description: `${car?.title ?? ""} ${car?.model ?? ""}`,
    openGraph: {
      title: car?.title ?? "Producto no encontrado",
      description: `${car?.title ?? ""} ${car?.model ?? ""}`,
      images: [
        {
          url: car?.CarImage[0]?.url ? `${car.CarImage[0].url}` : `${metadataBase}/default-image.png`,
        }
      ],
    },
    metadataBase: metadataBase, // Asegúrate de incluir metadataBase en el objeto de retorno
  };
}

export default async function CarBySlugPage({ params }: Props) {
  const { slug } = params;
  const car = await getCarBySlug(slug);
  const urlPublication = `https://tomas-autos.vercel.app/unidades/${slug}`;

  if (!car) {
    notFound();
  }

  return (
    <div className="sm:mx-44 md:mx-72">
      <div className="flex w-full justify-between pt-6  items-center sm:px-0 px-5">
        <Title
          title="Catalogo"
          subtitle={car?.category}
          className="p-2"
        />
        <BackwardButton />
      </div>
      <div className="mt-5  mb-20 grid grid-cols-1 md:grid-cols-10 gap-3">
        {/* Slideshow */}
        <div className="col-span-1 md:col-span-6 md:w-[95%]">
          {/* Mobile Slideshow */}
          <CarMobileSlideshow
            title={car?.title ?? "Producto no encontrado"}
            images={car?.CarImage.map((image) => image.url) ?? []}
            className="block md:hidden"
          />

          {/* Desktop Slideshow */}
          <CarSlideshow
            title={car?.title ?? "Producto no encontrado"}
            images={car?.CarImage.map((image) => image.url) ?? []}
            className="hidden md:block"
          />
        </div>

        {/* Detalles */}
        <div className="col-span-4 px-5">
          <h1 className="antialiased font-bold text-2xl ">
            {car?.title}
          </h1>
          <p className="text-lg mb-6 font-light">{car?.model}</p>
          <p className="text-4xl mb-6 font-semibold">${car?.price.toLocaleString('de-DE')}</p>
          <div className="flex-grow h-[0.1px] bg-slate-800 mb-6"></div>
          <p className="mb-2 font-semibold flex justify-between items-center">Año: <span className="font-light">{car?.year}</span></p>
          <p className="mb-2 font-semibold flex justify-between items-center">Kilometraje: <span className="font-light">{car?.kms.toLocaleString('de-DE')} KM</span></p>
          <p className="mb-2 font-semibold flex justify-between items-center">Transmisión: <span className="font-light">{car?.transmission}</span></p>
          <p className="mb-2 font-semibold flex justify-between items-center">Combustible: <span className="font-light">{car?.fuel}</span></p>

          {/* Sección de compartir */}
          <SharingAndContactSection
            urlPublication={urlPublication}
            car={{ title: car?.title, model: car?.model}}
            phoneNumbers={['2284-537622', '2284-562439']}
          />
        </div>
      </div>
    </div>
  );
}