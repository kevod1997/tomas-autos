'use server'

import { Car } from '@/interfaces/car.interface';
import { uploadImages } from '@/lib/cloudinary';
import prisma from '@/lib/prisma';
import { carSchema } from '@/utils';
import { revalidatePath } from 'next/cache';


export const createUpdateCar = async (formData: FormData) => {

    const data = Object.fromEntries(formData);

    const carParsed = carSchema.safeParse(data);

    if (!carParsed.success) {
        console.log(carParsed.error);
        return { ok: false }
    }

    const car = carParsed.data;

    const { id, ...rest } = car;

    try {

        let car: Car;

        //Actualizar
        if (id) {
            car = await prisma.car.update({
                where: { id },
                data: {
                    ...rest,
                },
            });

        } else {
            // Crear
            car = await prisma.car.create({
                data: {
                    ...rest,
                }
            })
        }

        // Proceso de carga y guardado de imagenes
        // Recorrer las imagenes y guardarlas
        if (formData.getAll('images')) {
            // [https://url.jpg, https://url.jpg]
            const images = await uploadImages(formData.getAll('images') as File[]);
            if (!images) {
                throw new Error('No se pudo cargar las imágenes, rollingback');
            }

            await prisma.carImage.createMany({
                data: images.map(image => ({
                    url: image!,
                    carId: car.id,
                }))
            });
        }


        revalidatePath('/admin/autos');
        revalidatePath(`/admin/autos/${car.slug}`);
        revalidatePath(`/unidades/${car.slug}`);

        return { ok: true, car };

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'Revisar los logs, no se pudo actualizar/crear'
        }
    }
}