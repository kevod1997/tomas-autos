
interface Props {
    title: string
}

export const TitleSeparetor = ({ title }: Props) => {
    return (
        <div className="sm:mx-44">
            <div className="flex items-center justify-center py-8 sm:py-10 group">
                <div className="flex-grow h-[1.5px] bg-gray-500"></div>
                <span className="mx-4 sm:mx-8 text-base sm:text-lg">{title}</span>
                <div className="flex-grow h-[1.5px] bg-gray-500"></div>
            </div>
        </div>
    )
}