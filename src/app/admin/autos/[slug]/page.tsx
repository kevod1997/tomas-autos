import { redirect } from "next/navigation";
import { CarForm } from "./ui/CarForm";

interface Props {
    params: {
      slug: string;
    }
  }

export default async function ProductPage({ params }: Props) {

    const { slug } = params;

  
    // const [ product, categories ] = await Promise.all([
    //   getProductBySlug(slug),
    //   getCategories()
    // ]);
   
  
    // // Todo: new
    if (  slug !== 'nuevo' ) {
      redirect('/admin/autos')
    }
  
    // const title = (slug === 'new') ? 'Nuevo producto' : 'Editar producto'
  
    return (
      <>
        {/* <Title title={ title } /> */}
  
        {/* <ProductForm product={ product ?? {} } categories={ categories } />
         */}
         <CarForm />
      </>
    );
  }