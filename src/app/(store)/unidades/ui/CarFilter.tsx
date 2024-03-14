'use client'

import { RedirectAnimation } from "@/components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { stringify } from "querystring";
import { Suspense, use, useEffect, useState } from "react";

export const CarFilter = () => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const url = pathname + '?' + searchParams.toString();

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsRedirecting(true);
    const value = event.target.value;
    let orderBy, orderDirection;
    
    switch (value) {
      case 'menor_precio':
        orderBy = 'price';
        orderDirection = 'asc';
        break;
      case 'mayor_precio':
        orderBy = 'price';
        orderDirection = 'desc';
        break;
      case 'mas_nuevos':
        orderBy = 'year';
        orderDirection = 'desc';
        break;
      case 'mas_antiguos':
        orderBy = 'year';
        orderDirection = 'asc';
        break;
      default:
        orderBy = 'tagId'; // o cualquier otro valor por defecto
        orderDirection = 'asc';
    }

    router.push(`/unidades?${stringify({ orderBy, orderDirection })}`);

  };

  useEffect(() => {
    setIsRedirecting(false);
  }, [url, setIsRedirecting]);
 

  return (
    <Suspense>
      <div className="relative">
        <select onChange={handleChange} className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="">Más Relevantes</option>
          <option value="menor_precio">Menor precio</option>
          <option value="mayor_precio">Mayor precio</option>
          <option value="mas_nuevos">Más nuevos</option>
          <option value="mas_antiguos">Más antiguos</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.95 7.95a.5.5 0 01.35-.15h7.4a.5.5 0 01.35.85l-3.76 3.76a.5.5 0 01-.7 0L6.3 8.8a.5.5 0 01-.35-.85z" />
          </svg>
        </div>
      </div>
      <RedirectAnimation isRedirecting={isRedirecting} />
    </Suspense>
  )
}