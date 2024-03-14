'use client'

import Link from "next/link";
import { RedirectAnimation } from "@/components";
import { UseRedirect } from "@/hooks/useRedirect";
import { IoArrowBackOutline } from "react-icons/io5";

export const BackwardButton = () => {
    const {isRedirecting, redirectTo} = UseRedirect();
    return (
        <>
        <Link href={"/unidades"} onClick={()=> redirectTo()}>
          <IoArrowBackOutline className="hover:scale-110 text-black" size={35} />
        </Link>
        {isRedirecting && <RedirectAnimation isRedirecting={isRedirecting} />}
        </>
    );
    }