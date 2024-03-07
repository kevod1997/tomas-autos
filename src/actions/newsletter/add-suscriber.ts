'use server';

import prisma from '@/lib/prisma';

interface Props {
    email: string;
}

export const addSuscriber = async ({email}: Props) => {
    const mailFound = await prisma.suscriber.findUnique({
        where: {
            email: email
        }
    });
    if(mailFound) return {ok: false, message: "Ya te encuentras suscrito a nuestro boletín"};
    try {
        const suscribed = await prisma.suscriber.create({
            data: {
                email: email
            }
        });
        if(suscribed){
            return {ok: true, message: "Te has suscrito correctamente"};
        } else {
            return {ok: false, message: "No se ha podido suscribir. Intentalo nuevamente"};
        }
    } catch (error) {
        console.log(error);
    }
}