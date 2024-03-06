'use server'

import prisma from "@/lib/prisma";


export const getCarsWithTagId = async () => {
    const take = 4;
  try {

    //1. Obtener los autos con tagId
    const cars = await prisma.car.findMany({
        where: {
            tagId: {
                not: null
            }
        },
        take: take,
        include: {
          CarImage: {
            orderBy: {
              mainImage: 'desc' // Asegura que las imágenes principales vengan primero
            },
            take: 1, // Asume que solo quieres la imagen principal
            select: {
              url: true,
            },
          },
            brand: true,
            fuel: true,
            tag: true,
        }
    })
  
    return {
      cars: cars.map((car) => ({
        ...car,
        images: car.CarImage.map((image) => image.url),
        brand: car.brand.name,
        fuel: car.fuel.name,
        tag: car.tag ? car.tag.name : null,
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los autos con el tag especificado");
  }
};