interface Props {
    title: string;
    subtitle?: string;
    className?: string;
}



export const Title = ({ title, subtitle, className }: Props) => {
    return (
        <div className={`${className} flex gap-2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out `}>
            <h1 className='antialiased md:text-xl font-semibold'>
                {title}
            </h1>
            -
            {
                subtitle && (
                    <h2 className="md:text-xl">{subtitle}</h2>
                )
            }
        </div>
    )
}