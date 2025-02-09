import { auth } from "@/auth.config";
import { NavMobile } from "@/components";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { DeviceChecker } from "../../components/ui/DeviceChecker";

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

  //console.log(window.innerWidth);

  return (
    <main className="relative">
      <DeviceChecker />
      <Image
        src={"/images/cinta_10.png"}
        alt={"cinta-md"}
        width={500}
        height={300}
        className="w-[500px] h-[300px] object-cover fixed top-8 left-0 -z-10"
      />
      <Image
        src={"/images/cinta_13.png"}
        alt={"cinta-md"}
        width={500}
        height={300}
        className="w-[500px] h-[300px] object-cover fixed bottom-10 left-0 -z-10"
      />
      {/* <TopMenuHome /> */}
      <div className="min-h-screen">{children}</div>
      <NavMobile />
    </main>
  );
}
