'use client'

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaEdit } from "react-icons/fa"

interface Props {
    slug: string
}

export const EditButton = ({slug}: Props) => {

    const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleEditClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsRedirecting(true);

    setTimeout(() => {
      router.push(`/admin/autos/${slug}`);
    }, 1000); 
  };

    return (
        <>
      {isRedirecting && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <p className="text-white text-lg">Redirigiendo...</p>
        </div>
      )}
      <Link href={`/admin/autos/${slug}`} onClick={handleEditClick}>
          <FaEdit size={18} className="hover:scale-125 cursor-pointer" />
      </Link>
    </>
    )
}