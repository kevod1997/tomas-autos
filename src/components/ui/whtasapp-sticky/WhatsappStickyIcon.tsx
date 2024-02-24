import Link from 'next/link';
import { MdWhatsapp } from 'react-icons/md'; 

interface Props {
    name: string;
    href?: string;
    className?: string;
}

export const WhatsAppSticky = ({name,href, className}: Props) => {
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4  items-center z-50 md:flex hidden">
      <Link href="https://wa.me/1234567890" className={`flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors ${className}`}>
        <MdWhatsapp className="text-2xl" />
        <span className="ml-2">{name}</span>
      </Link>
    </div>
  );
};
