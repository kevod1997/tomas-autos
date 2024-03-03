'use server';

import prisma from '@/lib/prisma';


export const getCarBySlug = async( slug: string ) => {


  try {

    const car = await prisma.car.findFirst({
      include: {
        CarImage: true
      },
      where: {
        slug: slug,
      }
    })


    if ( !car ) return null;

    return {
      ...car,
      images: car.CarImage.map( image => image.url )
    };

    
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener auto por slug');
  }



}