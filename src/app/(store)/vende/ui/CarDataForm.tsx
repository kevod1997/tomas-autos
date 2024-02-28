export const CarDataForm = () => {
    return (
        <div className="flex justify-center items-center mx-2">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:mx-0 mx-2">
                <h2 className="text-xl font-bold mb-8 text-center text-gray-800">Completá tus datos</h2>
                <form className="space-y-4 ">
                    <div className="space-y-2">
                        <input className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Tu nombre y apellido" />
                        <input className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Tu teléfono" />
                        <input className="border border-gray-300 p-3 rounded w-full" type="email" placeholder="Tu mail" />
                    </div>

                    <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Datos de tu vehículo</h3>

                    <div className="space-y-2">
                        <input className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Marca" />
                        <input className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Modelo" />
                        <div className="grid grid-cols-2 gap-4">
                            <input className="border border-gray-300 p-3 rounded" type="text" placeholder="Año" />
                            <input className="border border-gray-300 p-3 rounded" type="text" placeholder="Kilometros" />
                        </div>
                        <textarea className="border border-gray-300 p-3 rounded w-full" placeholder="Datos adicionales que quieras comentarnos"></textarea>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out">
                        ¡Enviar!
                    </button>
                </form>
            </div>
        </div>
    )
}