import { auth } from "@/auth.config";
import { NavMobile, TopMenuHome } from "@/components";
import { Metadata } from "next";
import Image from "next/image";
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
    <main className="min-h-screen relative overflow-hidden">
      <Image
        src={"/cinta3-md.png"}
        alt={"cinta-md"}
        width={1200}
        height={500}
        className="w-[1200px] h-[500px] absolute top-0 left-5 -z-10"
      />
      <TopMenuHome />
      {/* <SidebarHome /> */}
      <div className="sm:px-10 py-2 px-4 min-h-screen">{children}</div>
      <NavMobile />
      {/* <Footer /> */}
    </main>
  );
}
