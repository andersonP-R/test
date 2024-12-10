import { BackButton, TopMenuHome } from "@/components";
import Image from "next/image";

export default async function TerminosCondicionesPage() {
  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in relative px-4">
        <div className="flex justify-between items-center mb-4 gap-2">
          <BackButton url={"/inicio/perfil/mis-datos"} />
          <span className="text-primary-700 font-bold text-xl flex-1">
            Términos y Condiciones
          </span>
          <div></div>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src={"/pdf.jpg"}
            alt={"pdf"}
            width={350}
            height={500}
            className="w-[350px] h-[500px]"
          />
          <Image
            src={"/pdf.jpg"}
            alt={"pdf"}
            width={350}
            height={500}
            className="w-[350px] h-[500px]"
          />

          <Image
            src={"/pdf.jpg"}
            alt={"pdf"}
            width={350}
            height={500}
            className="w-[350px] h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
