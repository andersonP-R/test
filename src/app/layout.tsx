import type { Metadata } from "next";
import "./globals.css";
import { titleFont } from "@/config/fonts";
import { Providers } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "Cafam",
    default: "Cafam",
  },
  description: "Caja de compensacion familiar",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon512_rounded.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body id="body-content" className={`${titleFont.className} `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
