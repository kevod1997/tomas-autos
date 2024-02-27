'use client'

import { motion } from "framer-motion";
import { CategoryCard } from "./CategoryCard";
import { MdCarCrash, MdOutlineCarRental } from "react-icons/md";

interface Props {
    title: string;
    description: string;
    icon: JSX.Element;
    href: string;
    xInitial: number;
}

export const CategoryCardGrid = () => {
    const MotionCategoryCard = ({ title, description, icon, href, xInitial }: Props) => (
        <motion.div initial={{ opacity: 0, x: xInitial }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}>
            <CategoryCard
                title={title}
                description={description}
                icon={icon}
                href={href}
            />
        </motion.div>
    );

    return (
        <div className="p-4">
            <div className="grid gap-4 md:grid-cols-2">
                {/* Para pantallas md y mayores */}
                <div className="hidden md:block">
                    <MotionCategoryCard
                        title="COMPRAR"
                        description="Usados seleccionados y 0km"
                        icon={<MdCarCrash size={50} />}
                        href="/unidades"
                        xInitial={-100}
                    />
                </div>
                <div className="hidden md:block">
                    <MotionCategoryCard
                        title="VENDER"
                        description="Buscamos tu comprador ideal"
                        icon={<MdOutlineCarRental size={50} />}
                        href="/vender"
                        xInitial={100}
                    />
                </div>

                {/* Para pantallas menores a md */}
                <div className="md:hidden">
                    <CategoryCard
                        title="COMPRAR"
                        description="Usados seleccionados y 0km"
                        icon={<MdCarCrash size={50} />}
                        href="/unidades"
                    />
                </div>
                <div className="md:hidden">
                    <CategoryCard
                        title="VENDER"
                        description="Buscamos tu comprador ideal"
                        icon={<MdOutlineCarRental size={50} />}
                        href="/vender"
                    />
                </div>
            </div>
        </div>
    );
}
