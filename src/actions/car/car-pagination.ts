'use server'

import prisma from "@/lib/prisma";

interface PaginationOptions {
    page?: number;
    take?: number;
  }
  
  export const getPaginatedCarsWithImages = async ({
    page = 1,
    take = 8,
  }: PaginationOptions) => {
    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;
  
    try {
      // 1. Obtener los productos
      const cars = await prisma.car.findMany({
        take: take,
        skip: (page - 1) * take,
        include: {
          CarImage: {
            take: 1,
            select: {
              url: true,
            },
          },
          brand: true,
          fuel: true,
          tag: true,
        },

      });
  
      // 2. Obtener el total de páginas

      const totalCount = await prisma.car.count({});
      const totalPages = Math.ceil(totalCount / take);
  
      return {
        currentPage: page,
        totalPages: totalPages,
        cars: cars.map((car) => ({
          ...car,
          images: car.CarImage.map((image) => image.url),
          brand: car.brand.name,
          fuel: car.fuel?.name,
          tag: car.tag?.name,
        })),
      };
    } catch (error) {
      throw new Error("No se pudo cargar los productos");
    }
  };