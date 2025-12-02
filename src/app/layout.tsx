import type { Metadata } from "next";
import { geistMono, geistSans } from "../config/fonts";
import "./globals.css";
import { Provider } from "@/components";

export const metadata: Metadata = {
  title: {
    template: '%s - Markadush | Shop',
    default:'Home - Markadush | Shop'
  },
  description: "Tienda virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>

        {children}
        </Provider>
      </body>
    </html>
  );
}
