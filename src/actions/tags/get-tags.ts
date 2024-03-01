'use server';

import prisma from '@/lib/prisma';

export const getTags = async () => {

    try {
        const tags = await prisma.tag.findMany({
            orderBy: {
                name: 'asc'
            }
        });

        return tags;

    } catch (error) {
        console.log(error);
        return [];
    }
}