import { Footer, Sidebar, TopMenu } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda",
  description: "Productos disponibles en la tienda CAFAM",
};

export default function TiendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-0 sm:px-10">{children}</div>
      <Footer />
    </main>
  );
}
