'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createUpdateCar, deleteCarImage } from "@/actions";
import { CarImage } from "@/components";
import { Brand, Car, CarImage as CarWithImage, Fuel, Tag } from "@/interfaces";
import { generateSlug } from "@/utils/generate-slug";

interface Props {
  car: Partial<Car> & { CarImage?: CarWithImage[] }
  brands: Brand[];
  fuels: Fuel[];
  tags: Tag[];
}

interface FormInputs {
  model: string;
  title: string;
  price: number;
  year: number;
  kms: number;
  fuelId: number;
  transmission: string;
  brandId: number;
  category: string;
  tagId?: number;
  images?: FileList;
  slug: string;
}

export const CarForm = ({ car, brands, tags, fuels }: Props) => {

  const router = useRouter();

  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      ...car,
      images: undefined,
    }
  });

  const onSubmit = async (data: FormInputs) => {
    console.log(data);
    const formData = new FormData();

    const { images, ...carToSave } = data;

    const slug = generateSlug(data.category, data.title, data.model);
    carToSave.slug = slug;

    if (car.id) {
      formData.append('id', car.id ?? '')
    }

    Object.entries(carToSave).forEach(([key, value]) => {
      if (value !== undefined && !(key === 'tagId' && Number(value) < 1)) {
        console.log(key, value)
        formData.append(key, value.toString());
      }
    });

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }
    const { ok, car: updatedCar } = await createUpdateCar(formData);

    if (!ok) {
      alert('Producto no se pudo actualizar');
      return;
    }

    router.replace(`/admin/autos/${updatedCar?.slug}`)


  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid px-5 py-4 mb-16 grid-cols-1 sm:mx-4 sm:grid-cols-2 gap-3 mt-8 bg-white rounded-md shadow-md"
    >

      <div className="w-full">

        <div className="flex flex-col mb-2">
          <span>Titulo</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            {...register("title", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Modelo</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            {...register("model", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Precio</span>
          <input
            type="number"
            className="p-2 border rounded-md bg-gray-200"
            {...register("price", { required: true, min: 0 })}
          />
        </div>
        <div className="flex flex-col mb-2">
          <span>Año</span>
          <input
            type="number"
            className="p-2 border rounded-md bg-gray-200"
            {...register("year", { required: true, min: 0 })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Kilometros</span>
          <input
            type="number"
            className="p-2 border rounded-md bg-gray-200"
            {...register("kms", { required: true, min: 0 })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Combustible</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            {...register("fuelId", { required: true })}
          >
            <option value="">[Seleccione]</option>
            {fuels.map((fuel) => (
              <option key={fuel.id} value={fuel.id}>
                {fuel.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-2">
          <span>Transmision</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            {...register("transmission", { required: true })}
          >
            <option value="">[Seleccione]</option>
            <option value="Manual">Manual</option>
            <option value="Automatico">Automatico</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Marca</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            {...register("brandId", { required: true })}
          >
            <option value="">[Seleccione]</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn-primary w-full hidden sm:block">Guardar</button>
      </div>

      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Categoria</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            {...register("category", { required: true })}
          >
            <option value="">[Seleccione]</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Usado">Usado</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Tags(opcional) </span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            {...register("tagId")}
          >
            <option value="">[Seleccione si es necesario]</option>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">

          <div className="flex flex-col mb-2">
            <span>Fotos</span>
            <input
              type="file"
              {...register('images')}
              multiple
              className="p-2 border rounded-md bg-gray-200"
              accept="image/png, image/jpeg, image/avif"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {car.CarImage?.map((image) => (
              <div key={image.id}>
                <Image
                  alt={car.title ?? ""}
                  src={image.url}
                  width={300}
                  height={300}
                  className="rounded-t shadow-md"
                />

                <button
                  type="button"
                  onClick={() => deleteCarImage(image.id, image.url)}
                  className="btn-danger w-full rounded-b-xl"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div>
            <button className="btn-primary w-full sm:hidden block">Guardar</button>
          </div>
        </div>
      </div>
    </form>
  )
}