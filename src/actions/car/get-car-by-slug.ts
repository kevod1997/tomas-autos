'use server';

import prisma from '@/lib/prisma';


export const getCarBySlug = async( slug: string ) => {


  try {

    const car = await prisma.car.findFirst({
      include: {
        CarImage: {
          orderBy: {
            mainImage: 'desc'
          },
        },
        brand: true,
        fuel: true,
        tag: true,
      },
      where: {
        slug: slug,
      }
    })


    if ( !car ) return null;

    return {
      ...car,
      brand: car.brand.name,
      fuel: car.fuel?.name,
      tag: car.tag?.name,
    };

    
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener auto por slug');
  }



}