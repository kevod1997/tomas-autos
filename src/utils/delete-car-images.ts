import prisma from '@/lib/prisma';
import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from 'next/cache';
cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export const deleteCarImages = async (carId: string) => {
  try {
    // 1. Obtener todas las imágenes asociadas al Car
    const carImages = await prisma.carImage.findMany({
      where: {
        carId: carId,
      },
    });

    if (carImages.length === 0) {
      return {
        ok: false,
        error: 'No hay imágenes para borrar',
      };
    }

    // 2. Eliminar cada imagen en Cloudinary y en la base de datos
    for (const image of carImages) {
      if (!image.url.startsWith('http')) {
        console.log('Imagen no es de Cloudinary, omitiendo...');
        continue;
      }

      const imageName = image.url.split('/').pop()?.split('.')[0] ?? '';

      // Eliminar de Cloudinary
      await cloudinary.uploader.destroy(imageName);

    }

    return { ok: true };
    
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'No se pudo eliminar las imágenes',
    };
  }
};
