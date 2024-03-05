import { Car } from '@/interfaces';
import { ReactNode } from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';



interface SharingAndContactProps {
    urlPublication: string;
    car: Pick<Car, 'title' | 'model'>;
    phoneNumbers: string[];
}

interface ShareLinkProps {
    network: 'facebook' | 'twitter' | 'whatsapp' | 'whatsappContact';
    url: string;
    title?: string;
    className: string;
    children?: ReactNode;
    whatsappMessage?: string;
}

const ShareLink = ({ network, url, title, className, children, whatsappMessage }: ShareLinkProps) => {
    const icons = {
        facebook: <FaFacebookF />,
        twitter: <FaTwitter />,
        whatsapp: <FaWhatsapp/>,
        whatsappContact: <FaWhatsapp size={35}/>,
    };

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" title={title} className={className}>
            {children || icons[network]}
            {whatsappMessage}
        </a>
    );
};

export const SharingAndContactSection = ({ urlPublication, car, phoneNumbers }: SharingAndContactProps) => {
    const message = encodeURIComponent(
        `Hola . Estoy interesado/a en obtener más información sobre el vehículo ${car.title} - ${car.model} que vi anunciado. ¿Podría proporcionarme más detalles sobre el mismo? Quedo atento/a a su respuesta. Muchas gracias.`
      );
    const chosenNumber = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)].replace(/-/g, '');
    const whatsappContactUrl = `https://wa.me/${chosenNumber}?text=${message}`;

    return (
        <>
            {/* Sección de compartir */}
            <div className="flex justify-start items-center mt-4">
                <div className="text-sm font-semibold">Compartir:</div>
                <div className="flex space-x-4 ml-4">
                    <ShareLink
                        network="facebook"
                        url={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlPublication)}`}
                        className="text-blue-600 hover:text-blue-800"
                    />
                    <ShareLink
                        network="twitter"
                        url={`https://twitter.com/intent/tweet?url=${encodeURIComponent(urlPublication)}&text=${encodeURIComponent(`${car.title} - ${car.model}`)}`}
                        className="text-blue-400 hover:text-blue-600"
                    />
                    <ShareLink
                        network="whatsapp"
                        url={`https://api.whatsapp.com/send?text=Mira esta publicación: ${encodeURIComponent(urlPublication)}`}
                        className="text-green-500 hover:text-green-700"
                    />
                </div>
            </div>

            {/* Sección de contacto */}
            <div className="mt-6 flex justify-center">
                <ShareLink
                    network="whatsappContact"
                    url={whatsappContactUrl}
                    className="flex  items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm "
                    whatsappMessage="Estoy interesado/a, ¡contactar ahora!"
                />
                
            </div>
        </>
    );
};

