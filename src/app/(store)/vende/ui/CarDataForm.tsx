'use client'

import { mostrarAlertaError, mostrarAlertaExito } from "@/utils";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"

export const CarDataForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const onSubmit = async (formData: any) => {
        try {
            setIsSubmitting(true);
            // Aquí haces el POST a tu API
            const response = await fetch('/api/form-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Si el correo se envía correctamente, puedes resetear el formulario o hacer otra acción
                reset();
                mostrarAlertaExito('Datos enviados correctamente.');
                router.push('/')
            } else {
                // Manejar errores o respuesta no exitosa
                mostrarAlertaError('Hubo un problema al enviar tus datos.');
            }
        } catch (error) {
            mostrarAlertaError('Error al enviar el formulario.');
        } finally {
            setIsSubmitting(false); 
        }
    }
    return (
        <div className="flex justify-center items-center mx-2">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:mx-0 mx-2">
                <h2 className="text-xl font-bold mb-8 text-center text-gray-800">Completá tus datos</h2>
                <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <input {...register("fullName", { required: true })} className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Tu nombre y apellido" />
                        <input {...register("phone", { required: true })} className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Tu teléfono" />
                        <input {...register("email")} className="border border-gray-300 p-3 rounded w-full" type="email" placeholder="Tu mail (opcional)" />
                    </div>

                    <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Datos de tu vehículo</h3>

                    <div className="space-y-2">
                        <input {...register("brand", { required: true })} className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Marca" />
                        <input {...register("model", { required: true })} className="border border-gray-300 p-3 rounded w-full" type="text" placeholder="Modelo" />
                        <div className="grid grid-cols-2 gap-4">
                            <input {...register("year", { required: true })} className="border border-gray-300 p-3 rounded" type="text" placeholder="Año" />
                            <input {...register("kms", { required: true })} className="border border-gray-300 p-3 rounded" type="text" placeholder="Kilometros" />
                        </div>
                        <textarea   {...register("extraDetails")} className="border border-gray-300 p-3 rounded w-full" placeholder="Datos adicionales que quieras comentarnos"></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className={clsx(
                        "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out",
                        { "opacity-50 cursor-not-allowed": isSubmitting }
                    )}>
                        {isSubmitting ? "Enviando..." : "¡Enviar!"}
                    </button>
                </form>
            </div>
        </div>
    )
}