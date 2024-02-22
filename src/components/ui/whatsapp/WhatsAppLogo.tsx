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
