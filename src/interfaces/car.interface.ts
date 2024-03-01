export interface Car {
    id: string;
    title: string;
    model: string;
    price: number;
    km: number;
    year: number;
    slug: string;
    transmision: Transmision;
    categoria: Categoria;
    createdAt: Date;
    combustible?: Combustible;
    images?: string[];
    tag?: string;
}

type Transmision = "Manual" | "Automatico";
type Categoria = "Nuevo" | "Usado";

type Combustible = "nafta" | "diesel" | "electrico" | "hibrido" | "gnc";