'use server';

import prisma from '@/lib/prisma';

export const getFuels = async () => {

    try {
        const fuels = await prisma.fuel.findMany({
            orderBy: {
                name: 'asc'
            }
        });

        return fuels;

    } catch (error) {
        console.log(error);
        return [];
    }
}