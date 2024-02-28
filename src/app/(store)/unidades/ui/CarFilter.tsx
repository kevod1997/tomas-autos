export const CarFilter = () => {
    return(
        <div className="relative">
        <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Los últimos</option>
          <option>Los más vendidos</option>
          <option>Los más valorados</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.95 7.95a.5.5 0 01.35-.15h7.4a.5.5 0 01.35.85l-3.76 3.76a.5.5 0 01-.7 0L6.3 8.8a.5.5 0 01-.35-.85z" />
          </svg>
        </div>
      </div>
    )
}