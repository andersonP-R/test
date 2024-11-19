import Image from "next/image";
import { BackButton } from "@/components";

export default function CanjearPage() {
  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/servicios/puntos-acumulables"} />
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold text-primary-700">
          Canjea tus puntos Cafam por cualquiera de los siguientes premios
        </p>
        <Image
          src={"/badge.png"}
          alt={"badge-image"}
          width={60}
          height={60}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}
