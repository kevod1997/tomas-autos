'use server'

import { Car } from '@/interfaces/car.interface';
import { carSchema } from '@/utils';

export const createUpdateCar = async (formData: FormData) => {
    
    const data = Object.fromEntries(formData);
    const carParsed = carSchema.safeParse(data);

    if(!carParsed.success) {
        console.log( carParsed.error );
        return { ok: false }
    }

    const car = carParsed.data;
    car.slug = car.slug.toLowerCase().replace(/ /g, '-' ).trim()

    try {
        // let car: Car;
        // if(id){
        //     car 
        // }
    } catch (error) {
        
    }
}