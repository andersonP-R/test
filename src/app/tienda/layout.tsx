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
    <main className="">
      <TopMenu />
      <Sidebar />
      <div className="sm:px-10 p-2 min-h-screen">{children}</div>
      <Footer />
    </main>
  );
}
