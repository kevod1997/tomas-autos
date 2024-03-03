'use server'

import prisma from "@/lib/prisma";

interface PaginationOptions {
    page?: number;
    take?: number;
  }
  
  export const getPaginatedCarsWithImages = async ({
    page = 1,
    take = 12,
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
            take: 2,
            select: {
              url: true,
            },
          },
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
        })),
      };
    } catch (error) {
      throw new Error("No se pudo cargar los productos");
    }
  };