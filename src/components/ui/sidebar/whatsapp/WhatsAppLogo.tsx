import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";


interface Props {
  name: string;
  linkClassName: string;
  spanClassname: string;
  href?: string;
}


const WhatsAppLink = ({ name, spanClassname, linkClassName, href = "/" }: Props) => (
  <Link href={href} className={linkClassName}>
    <IoLogoWhatsapp size={30} className="text-green-500"/>
        <span className={spanClassname}>{name}</span>
  </Link>
);

export default WhatsAppLink;


{/* <div className='flex gap-2'>
<div className="fixed bottom-0 right-0 mb-4 mr-36 flex items-center z-50 md:flex hidden">
      <a href="https://wa.me/1234567890" className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <MdWhatsapp className="text-2xl" />
        <span className="ml-2">Juani</span>
      </a>
    </div>
    <div className="fixed bottom-0 right-0 mb-4 mr-4 flex items-center z-50 md:flex hidden">
      <a href="https://wa.me/1234567890" className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <MdWhatsapp className="text-2xl" />
        <span className="ml-2">Tomas</span>
      </a>
    </div>
</div> */}
