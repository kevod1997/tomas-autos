import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type FormData = {
    fullName: string
    phone: string
    email?: string
    brand: string
    model: string
    year: string
    kms: string
    extraDetails?: string
  }

export async function POST (
    req: Request,
  ) {
  if (req.method === 'POST') {
    const { fullName, phone, email, brand, model, year, kms, extraDetails } = await req.json() as FormData;

    const formattedKms = new Intl.NumberFormat('es-AR').format(Number(kms));

    // Configura el transporter de nodemailer con tu servicio de email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'kevindefalco@gmail.com',
        pass: `${process.env.MAIL_PASSWORD}`
      }
    });

    const emailHtml = `
    <div style="font-family: sans-serif; color: #333;">
        <h2 style="color: #0056b3;">Has recibido un nuevo mensaje con los siguientes datos:</h2>
        <ul>
            <li>Nombre y Apellido: ${fullName}</li>
            <li>Teléfono: ${phone}</li>
            <li>Email: ${email || "No proporcionado"}</li>
            <li>Marca: ${brand}</li>
            <li>Modelo: ${model}</li>
            <li>Año: ${year}</li>
            <li>Kilómetros: ${formattedKms}</li>
            <li>Detalles adicionales: ${extraDetails || "Sin detalles adicionales"}</li>
        </ul>
    </div>
`;

    try {
      // Envía el email
      await transporter.sendMail({
        from: email?? "kevindefalco@gmail.com",
        to: "kevindefalco@gmail.com",
        subject: "Nuevo mensaje del formulario de datos del vehículo",
        html: emailHtml,
    });
      return NextResponse.json({ message: 'Email enviado exitosamente' }, { status: 200 });
      
    } catch (error) {
      console.error('Error al enviar el email:', error);
      return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
  }
};