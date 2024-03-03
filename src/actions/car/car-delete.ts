'use server'

import prisma from '@/lib/prisma';
import { deleteCarImages } from '@/utils/delete-car-images';
import { revalidatePath } from 'next/cache';


export const deleteCar = async (carId: string) => {
    try {
        const deleteImagesResult = await deleteCarImages(carId);
        if (!deleteImagesResult.ok) {
            console.log(deleteImagesResult.error);
            return deleteImagesResult;
        }

        const car = await prisma.car.findUnique({
            where: {
                id: carId,
            },
            select: {
                slug: true,
            },
        });

        await prisma.$transaction(async (prisma) => {
            await prisma.carImage.deleteMany({
                where: {
                    carId: carId,
                },
            });
            await prisma.car.delete({
                where: {
                    id: carId,
                },
            });
        });

        //Revalidar los paths
        revalidatePath(`/admin/autos`);
        if (car) {
            revalidatePath(`/admin/autos/${car.slug}`);
            revalidatePath(`/unidades/${car.slug}`);
        }

        console.log(`Car with ID ${carId} and its images have been deleted.`);
        return { ok: true };

    } catch (error) {
        console.error("Error deleting car:", error);
        return { ok: false, error: "Error deleting car" };
    }
}

