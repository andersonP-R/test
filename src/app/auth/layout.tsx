import { auth } from "@/auth.config";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user) {
    redirect("/inicio");
  }

  return (
    <main className="relative flex justify-center bg-gradient-to-r from-[#01ACEB] to-[#0086DB]">
      <Image
        src={"/cinta1.png"}
        alt={"image"}
        width={500}
        height={400}
        className="absolute opacity-50 w-[500px] h-[400px]"
      />
      <Image
        src={"/cinta2.png"}
        alt={"image"}
        width={200}
        height={100}
        className="absolute opacity-50 bottom-0 right-0 w-[200px] h-[100px]"
      />
      <div className="w-full sm:w-[350px] px-6">{children}</div>
    </main>
  );
}
