export interface Car {
    id: string;
    title: string;
    modelo: string;
    marca: string;
    precio: number;
    km: number;
    year: number;
    imageUrl?: string[];
    transmision?: Transmision;
    combustible?: Combustible;
    categoria?: Categoria;
    destacado?: boolean;
}

type Transmision = "manual" | "automatica";
type Combustible = "nafta" | "diesel" | "electrico" | "hibrido" | "gnc";
type Categoria = "nuevo" | "usado";