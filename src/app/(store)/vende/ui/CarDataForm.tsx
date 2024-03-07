'use client'

import { mostrarAlertaError, mostrarAlertaExito } from "@/utils";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

export const CarDataForm = () => {

    const { register, handleSubmit, reset, formState: { errors }, clearErrors } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const classNameError = (fieldName: string) => {
        return clsx("border p-3 rounded w-full", {
            "border-red-500 border-2": errors[fieldName],
            "border-gray-300": !errors[fieldName],
        });

    };

    const getPlaceholderWithError = (fieldName: string, basePlaceholder: string): string => {
        // Comprueba si hay un error para el campo y si el mensaje de error es una cadena no vacía.
        // De lo contrario, devuelve el placeholder base.
        const errorMessage = errors[fieldName]?.message;
        return typeof errorMessage === 'string' && errorMessage ? errorMessage : basePlaceholder;
    };

    useEffect(() => {
        if (errors) {
            const timer = setTimeout(() => {
                clearErrors();
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [errors, clearErrors]);

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
                        <input {...register("fullName", { required: "Por favor ingresa tu nombre completo" })} className={classNameError("fullName")} type="text" placeholder={getPlaceholderWithError("fullName", "Tu nombre y apellido")} />
                        <input {...register("phone", { required: "Por favor ingresa tu telefono" })} className={classNameError("phone")} type="text" placeholder={getPlaceholderWithError("phone", "Tu teléfono")} />
                        <input {...register("email")} className="border border-gray-300 p-3 rounded w-full" type="email" placeholder="Tu mail (opcional)" />
                    </div>

                    <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Datos de tu vehículo</h3>

                    <div className="space-y-2">
                        <input {...register("brand", { required: "Por favor indicanos la marca" })} className={classNameError("brand")} type="text" placeholder={getPlaceholderWithError("brand", "Marca")}/>
                        <input {...register("model", { required: "Por favor indicanos el modelo" })} className={classNameError("model")} type="text" placeholder={getPlaceholderWithError("model", "Modelo")} />
                        <div className="grid grid-cols-2 gap-4">
                            <input {...register("year", { required: "Por favor indicanos el año" })} className={classNameError("year")} type="text" placeholder={getPlaceholderWithError("year", "Año")} />
                            <input {...register("kms", { required: "Por favor indicanos los kilometros" })} className={classNameError("kms")} type="text" placeholder={getPlaceholderWithError("kms", "Kilometros")} />
                        </div>
                        <textarea   {...register("extraDetails")} className="border border-gray-300 p-3 rounded w-full" placeholder="Datos adicionales que quieras comentarnos"></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={clsx(
                            "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out",
                            { "opacity-50 cursor-not-allowed": isSubmitting }
                        )}
                    >
                        {isSubmitting ? "Enviando..." : "¡Enviar!"}
                    </button>
                </form>
            </div>
        </div>
    )
}