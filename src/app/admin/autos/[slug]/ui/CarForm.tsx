export const CarForm = () => {
    return (
        <form
    //   onSubmit={handleSubmit(onSubmit)}
      className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3"
    >
      {/* Textos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Modelo</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            // {...register("title", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Titulo</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            // {...register("slug", { required: true })}
          />
        </div>

        {/* <div className="flex flex-col mb-2">
          <span>Descripción</span>
          <textarea
            rows={5}
            className="p-2 border rounded-md bg-gray-200"
            // {...register("description", { required: true })}
          ></textarea>
        </div> */}

        <div className="flex flex-col mb-2">
          <span>Precio</span>
          <input
            type="number"
            className="p-2 border rounded-md bg-gray-200"
            // {...register("price", { required: true, min: 0 })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Tags</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            // {...register("tags", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Combustible</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            // {...register("gender", { required: true })}
          >
            <option value="">[Seleccione]</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>
        <div className="flex flex-col mb-2">
          <span>Transmision</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            // {...register("gender", { required: true })}
          >
            <option value="">[Seleccione]</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Marca</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            // {...register("categoryId", { required: true })}
          >
            <option value="">[Seleccione]</option>
            {/* {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))} */}
          </select>
        </div>

        <button className="btn-primary w-full">Guardar</button>
      </div>

      {/* Selector de tallas y fotos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Categoria</span>
          <input
            type="number"
            className="p-2 border rounded-md bg-gray-200"
            // {...register("inStock", { required: true, min: 0 })}
          />
        </div>

        {/* As checkboxes */}
        <div className="flex flex-col">
          {/* <span>Tallas</span>
          <div className="flex flex-wrap"> */}
            {/* {sizes.map((size) => (
              // bg-blue-500 text-white <--- si está seleccionado
              <div
                key={}
                // onClick={() => onSizeChanged(size)}
                // className={clsx(
                //   "p-2 border cursor-pointer rounded-md mr-2 mb-2 w-14 transition-all text-center",
                //   {
                //     "bg-blue-500 text-white": getValues("sizes").includes(size),
                //   }
                // )}
              >
                <span>{}</span>
              </div>
            ))} */}
          {/* </div> */}

          <div className="flex flex-col mb-2">
            <span>Fotos</span>
            <input
              type="file"
            //   { ...register('images') }
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
        </div>
      </div>
    </form>
    )
}