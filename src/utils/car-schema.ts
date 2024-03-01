import { Category, Transmission } from "@prisma/client";
import { z } from "zod";

export const carSchema =  z.object({
   id: z.string().uuid().optional().nullable(),
   title: z.string().min(3).max(255),
   model: z.string().min(3).max(255),
   price: z.number().min(0),
   kms: z.number().min(0),
   year: z.number().min(1950).max(2050),
   slug: z.string().min(3).max(255),
   transmission: z.nativeEnum(Transmission),
   category: z.nativeEnum(Category),
   brandId: z.number().min(1),
   fuelId: z.number().min(1),
   tagId: z.number().min(1),
})