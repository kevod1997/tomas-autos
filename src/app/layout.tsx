import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";
import { Providers } from "@/components";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: {
    template: "%s - Tomas Autos",
    default: "Home - Tomas Autos",
  },
  description: "Vende o compra tu auto con nosotros",
  keywords: ["autos", "compra", "venta", "usados", "nuevos", "olavarria", "tomasautos", "tomas autos", "tomas", "auto", "buenos aires", "argentina"],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Suspense>
          <Providers>
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
