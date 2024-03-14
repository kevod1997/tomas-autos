'use client'

import { motion } from "framer-motion";
import { CategoryCard } from "./CategoryCard";
import { MdCarCrash, MdOutlineCarRental } from "react-icons/md";
import { UseRedirect } from "@/hooks/useRedirect";
import { RedirectAnimation } from "../redirect/RedirectAnimation";

interface Props {
    title: string;
    description: string;
    icon: JSX.Element;
    href: string;
    xInitial: number;
    onClick?: () => void;
}

export const CategoryCardGrid = () => {
    const { isRedirecting, redirectTo } = UseRedirect();
    const MotionCategoryCard = ({ title, description, icon, href, xInitial, onClick }: Props) => (
        <motion.div initial={{ opacity: 0, x: xInitial }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}>
            <CategoryCard
                title={title}
                description={description}
                icon={icon}
                href={href}
                onClick={onClick}

            />
        </motion.div>
    );

    return (
        <>
            <div className="px-2">
                <div className="grid gap-4 md:grid-cols-2">
                    {/* Para pantallas md y mayores */}
                    <div className="hidden md:block">
                        <MotionCategoryCard
                            title="COMPRAR"
                            description="Usados seleccionados y 0km"
                            icon={<MdCarCrash size={50} />}
                            href="/unidades"
                            xInitial={-100}
                            onClick={() => redirectTo()}
                        />
                    </div>
                    <div className="hidden md:block">
                        <MotionCategoryCard
                            title="VENDER"
                            description="Buscamos tu comprador ideal"
                            icon={<MdOutlineCarRental size={50} />}
                            href="/vende"
                            xInitial={100}
                            onClick={() => redirectTo()}
                        />
                    </div>

                    {/* Para pantallas menores a md */}
                    <div className="md:hidden">
                        <CategoryCard
                            title="COMPRAR"
                            description="Usados seleccionados y 0km"
                            icon={<MdCarCrash size={50} />}
                            href="/unidades"
                            onClick={() => redirectTo()}
                        />
                    </div>
                    <div className="md:hidden">
                        <CategoryCard
                            title="VENDER"
                            description="Buscamos tu comprador ideal"
                            icon={<MdOutlineCarRental size={50} />}
                            href="/vende"
                            onClick={() => redirectTo()}
                        />
                    </div>
                </div>
            </div>
            <RedirectAnimation isRedirecting={isRedirecting} />
        </>
    );
}
