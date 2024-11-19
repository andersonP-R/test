import { BackButton } from "@/components";
import Link from "next/link";
import { IoBusOutline, IoPhonePortraitOutline } from "react-icons/io5";

export default function RecargasPage() {
  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/billeteras"} />
      <div className="flex flex-col gap-2 text-center mb-8">
        <span className="font-bold text-2xl text-primary-700">Recargas</span>
        <span className="font-light text-primary-700">
          ¡Aquí puedes recargar el saldo de tu telefono, tarjetas de transporte
          y más!
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {/* <span className="font-light text-primary-700">Puedes retirar en:</span> */}
        <Link
          className="flex items-start justify-between mb-2 gap-2 border border-primary-700 p-2 rounded-lg bg-slate-200"
          href={"/inicio/billeteras/recargas/celular"}
        >
          <div className="flex flex-col">
            <span className="font-bold text-primary-700">Celular</span>
            <span className="">Recarga el saldo de tu teléfono</span>
          </div>
          <IoPhonePortraitOutline size={30} />
        </Link>

        <Link
          className="flex items-start justify-between mb-2 gap-2 border border-primary-700 p-2 rounded-lg bg-slate-200"
          href={"/inicio/billeteras/recargas/tu-llave"}
        >
          <div className="flex flex-col">
            <span className="font-bold text-primary-700">Maas tullave</span>
            <span className="">Recarga tu tarjeta de transporte masivo</span>
          </div>
          <IoBusOutline size={30} />
        </Link>
      </div>
    </div>
  );
}
