import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";
import { Providers } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s - Cafam",
    default: "Cafam",
  },
  description: "Caja de compensacion familiar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
