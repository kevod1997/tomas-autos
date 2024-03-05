export interface Car {
  id: string;
  title: string;
  model: string;
  price: number;
  kms: number;
  year: number;
  slug: string;
  brand: string;
  brandId: number;
  transmission: Transmision;
  category: string;
  createdAt: Date;
  fuel?: string;
  fuelId?: number;
  images?: string[];
  tag?: string | null; 
  tagId?: number | null;
}

export interface CarImage {
  id: number;
  url: string;
  carId: string;
}


type Transmision = "Manual" | "Automatico";
type Categoria = "Nuevo" | "Usado";

type Combustible = "nafta" | "diesel" | "electrico" | "hibrido" | "gnc";