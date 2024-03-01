'use client'

import { Brand, Fuel, Tag } from "@/interfaces";
import { useForm } from "react-hook-form";

interface Props {
  brands: Brand[];
  fuels: Fuel[];
  tags: Tag[];
}

export const CarForm = ({ brands, tags, fuels }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid px-5 py-4 mb-16 grid-cols-1 sm:mx-4 sm:grid-cols-2 gap-3 mt-8 bg-white rounded-md shadow-md"
    >

      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Modelo</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            {...register("model", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Titulo</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            {...register("title", { required: true })}
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
            <option value="manual">Manual</option>
            <option value="automatica">Automatica</option>
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
            <option value="nuevo">Nuevo</option>
            <option value="usado">Usado</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Tags(opcional) </span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            {...register("tagId", { required: true })}
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
            {/* {product.ProductImage?.map((image) => (
              <div key={image.id}>
                <ProductImage
                  alt={product.title ?? ""}
                  src={ image.url }
                  width={300}
                  height={300}
                  className="rounded-t shadow-md"
                />

                <button
                  type="button"
                //   onClick={() => deleteProductImage(image.id, image.url)}
                  className="btn-danger w-full rounded-b-xl"
                >
                  Eliminar
                </button>
              </div>
            ))} */}
          </div>
          <div>
            <button className="btn-primary w-full sm:hidden block">Guardar</button>
          </div>
        </div>
      </div>
    </form>
  )
}