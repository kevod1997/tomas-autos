export interface Car {
  id: string;
  title: string;
  model: string;
  price: number;
  kms: number;
  year: number;
  slug: string;
  transmission: Transmision;
  category: Categoria;
  createdAt: Date;
  combustible?: Combustible;
  images?: string[];
  tag?: string;
}

export interface CarImage {
  id: number;
  url: string;
  carId: string;
}


type Transmision = "Manual" | "Automatico";
type Categoria = "Nuevo" | "Usado";

type Combustible = "nafta" | "diesel" | "electrico" | "hibrido" | "gnc";