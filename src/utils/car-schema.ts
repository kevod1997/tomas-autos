import { Category, Transmission } from "@prisma/client";
import { z } from "zod";

export const carSchema =  z.object({
   id: z.string().uuid().optional().nullable(),
   title: z.string().min(3).max(255),
   model: z.string().min(3).max(255),
   price: z.preprocess((val) => Number(val), z.number().min(0)),
   kms: z.preprocess((val) => Number(val), z.number().min(0)),
   year: z.preprocess((val) => Number(val), z.number().min(0)),
   slug: z.string().min(3).max(255),
   transmission: z.nativeEnum(Transmission),
   category: z.nativeEnum(Category),
   brandId: z.preprocess((val) => Number(val), z.number().min(1)),
   fuelId: z.preprocess((val) => Number(val), z.number().min(1)),
   tagId: z.preprocess((val) => Number(val), z.number().min(1)).optional(),
   mainImage: z.preprocess((val) => Number(val), z.number().min(1)).optional(),
})