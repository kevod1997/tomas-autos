import Link from "next/link";

interface Props {
    title: string;
    description: string;
    icon: JSX.Element; 
    href: string;
  }

export const CategoryCard = ({title, description,icon, href} : Props) => {
    return (
        <Link href={href}>
        <div className="flex justify-center items-center h-full">
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out w-full sm:max-w-md md:max-w-lg">
          <div className="flex items-center p-8">
            {/* Icon container */}
            <div className="flex-shrink-0 mr-4">
              <div className="h-12 w-12">{icon}</div>
            </div>
            {/* Text container */}
            <div>
              <div className="tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
              <p className="mt-1 text-lg leading-tight font-medium text-black hover:text-indigo-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
        </Link>
    )
}