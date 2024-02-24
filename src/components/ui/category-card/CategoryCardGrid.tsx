'use client'

import { motion } from "framer-motion";
import { CategoryCard } from "./CategoryCard"
import { MdCarCrash, MdOutlineCarRental } from "react-icons/md";

export const CategoryCardGrid = () => {
    return (
        <div className="p-4" >
            <div className="grid gap-4 md:grid-cols-2">
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <CategoryCard
                        title="COMPRAR"
                        description="Usados seleccionados y 0km"
                        icon={<MdCarCrash  size={50} />} 
                        href="/unidades"
                    />
                </motion.div>
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <CategoryCard
                        title="VENDER"
                        description="Buscamos tu comprador ideal"
                        icon={<MdOutlineCarRental size={50} />}
                        href="/vender"
                    />
                </motion.div>
            </div>
        </div>
    )
}