import Link from 'next/link';
import { MdWhatsapp } from 'react-icons/md'; 

interface Props {
    name: string;
    href: string;
    className?: string;
}

export const WhatsAppSticky = ({ name, href, className }: Props) => {
  return (
    <div className={`mr-4 ${className}`}>
      <Link href={href} target='_blank' className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <MdWhatsapp className="text-2xl" />
        <span className="ml-2">{name}</span>
      </Link>
    </div>
  );
}