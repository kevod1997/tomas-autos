'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createUpdateCar } from "@/actions";
import { mostrarAlertaExito, mostrarAlertaError } from '@/utils';
import { Brand, Car, CarImage, Fuel, Tag } from "@/interfaces";
import { generateSlug } from "@/utils/generate-slug";
import { DeleteImageButton } from "./buttons/DeleteImageButton";
import { useState } from "react";
import clsx from "clsx";

interface Props {
  car: Partial<Car> & { CarImage?: CarImage[] }
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
  mainImage?: number;
}

export const CarForm = ({ car, brands, tags, fuels }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedMainImageId, setSelectedMainImageId] = useState<number | null>(car.CarImage?.find((image) => image.mainImage)?.id ?? null);
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      ...car,
      images: undefined,
      tagId: car.tagId || undefined,
    }
  });

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    const formData = new FormData();
    const carId = car.id;
    const { images, ...carToSave } = data;

    const slug = generateSlug(data.category, data.title, data.model);
    carToSave.slug = slug;

    if (carId) {
      formData.append('id', carId ?? '')
    }

    if (selectedMainImageId) {
      formData.append('mainImage', selectedMainImageId.toString());
    }

    Object.entries(carToSave).forEach(([key, value]) => {
      if (value !== undefined && !(key === 'tagId' && Number(value) < 1)) {
        formData.append(key, value.toString());
      }
    });

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }
    const { ok, message, car: updatedCar } = await createUpdateCar(formData);

    if (ok) {
      let message = '';
      if (!carId) {
        const formattedPrice = updatedCar?.price.toLocaleString('es');
        const formattedKms = updatedCar?.kms.toLocaleString('es');

        message = `El auto ${updatedCar?.title} - ${updatedCar?.model}, con precio $${formattedPrice} y ${formattedKms} kms, ha sido creado exitosamente.`;
        router.replace(`/admin/autos/${updatedCar?.slug}`);
      } else {
        message = 'El auto ha sido actualizado exitosamente.';
      }
      await mostrarAlertaExito(message);
    } else {
      message ? mostrarAlertaError(message) :
      mostrarAlertaError('No se pudo completar la operación. Volve a intentar.');
    }
    setIsSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid px-5 py-4 mb-16 grid-cols-1 sm:mx-4 sm:grid-cols-2 gap-3 mt-4 bg-white rounded-md shadow-md"
    >

      <div className="w-full">

        <div className="flex flex-col mb-2">
          <span>Titulo</span>
          <input
            type="text"
            placeholder="Ejemplo: FIAT TORO"
            className="p-2 border rounded-md bg-gray-200"
            {...register("title", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Modelo</span>
          <input
            type="text"
            placeholder="Ejemplo: FREEDOM S-DESING 1.8 L AT6 L23"
            className="p-2 border rounded-md bg-gray-200"
            {...register("model", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Precio</span>
          <input
            type="number"
            placeholder="Ejemplo: 25000000 (sin puntos)"
            className="p-2 border rounded-md bg-gray-200"
            {...register("price", { required: true, min: 0 })}
          />
        </div>
        <div className="flex flex-col mb-2">
          <span>Año</span>
          <input
            type="number"
            placeholder="Ejemplo: 2021"
            className="p-2 border rounded-md bg-gray-200"
            {...register("year", { required: true, min: 0 })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Kilometros</span>
          <input
            type="number"
            placeholder="Ejemplo: 80000 (sin puntos)"
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
        <button
          type="submit"
          disabled={isSubmitting}
          className={clsx("btn-primary w-full hidden sm:block", { "opacity-50 cursor-not-allowed": isSubmitting })}
        >{isSubmitting ? "Guardando..." : "Guardar"}</button>
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {car.CarImage?.map((image) => (
              <div key={image.id} className="relative group">
                {/* Checkbox sobre la imagen */}
                <div className="absolute z-10 left-0 m-4 bg-white p-1 rounded-md opacity-80">
                  <input
                    type="checkbox"
                    checked={selectedMainImageId === image.id}
                    onChange={() => setSelectedMainImageId(image.id)}
                    className="form-checkbox"
                    id={`checkbox-${image.id}`}
                  />
                  {selectedMainImageId === image.id && <label htmlFor={`checkbox-${image.id}`} className=" ml-2">Principal</label>}
                </div>

                <Image
                  alt={car.title ?? ""}
                  src={image.url}
                  width={500}
                  height={300}
                  className="rounded-t shadow-md"
                />
                <div className="w-full">
                  <DeleteImageButton image={image} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <button type="submit"
              disabled={isSubmitting}
              className={clsx("btn-primary w-full sm:hidden block mt-4", { "opacity-50 cursor-not-allowed": isSubmitting })}
            >{isSubmitting ? "Guardando..." : "Guardar"}</button>
          </div>
        </div>
      </div>
    </form>
  )
}