import { auth } from "@/auth.config";
import { Footer, SidebarHome, TopMenuHome } from "@/components";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Inicio",
  description: "La mejor caja de compensación familiar de Colombia",
};

export default async function InicioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/sign-in");
  }

  return (
    <main className="min-h-screen">
      <TopMenuHome />
      <SidebarHome />
      <div className="sm:px-10 min-h-screen">{children}</div>
      <Footer />
    </main>
  );
}
