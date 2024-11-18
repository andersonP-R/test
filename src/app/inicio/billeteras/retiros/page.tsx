import { BackButton } from "@/components";
import Link from "next/link";
import {
  IoCashOutline,
  IoInformationCircleOutline,
  IoMapOutline,
  IoStorefrontOutline,
} from "react-icons/io5";

export default function RetirosPage() {
  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/billeteras"} />
      <div className="flex flex-col gap-2 text-center mb-8">
        <span className="font-bold text-2xl text-primary-700">Retiros</span>
        <span className="font-light text-primary-700">
          Aqui puedes gestionar en donde y como retirar tu dinero
        </span>
      </div>

      <span className="font-light text-primary-700 mb-2">
        ¿De donde saldra la plata?
      </span>
      <div className="flex flex-col mb-2">
        <select className="p-2 border rounded-md bg-gray-200">
          <option value="">Seleccione un bolsillo</option>
          <option value="saab">Monedero principal</option>
          <option value="mercedes">Subsidio familiar</option>
          <option value="audi">Crédito afiliado</option>
        </select>
      </div>

      <div className="flex gap-2 items-start mb-10 text-primary-700">
        <IoInformationCircleOutline size={25} />
        <span className="text-[13px]">
          Recuerda tener minimo $10.000 pesos en el bolsillo seleccionado
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-light text-primary-700">Puedes retirar en:</span>
        <Link
          className="flex items-start justify-between mb-2 gap-2 border border-primary-700 p-2 rounded-lg bg-slate-200"
          href={"/inicio/billeteras/retiros/corresponsales"}
        >
          <div className="flex flex-col">
            <span className="font-bold text-primary-700">Puntos físicos</span>
            <span className="">
              En cualquiera de nuestros corresponsales aliados
            </span>
          </div>
          <IoStorefrontOutline size={40} />
        </Link>

        <Link
          className="flex items-start justify-between mb-2 gap-2 border border-primary-700 p-2 rounded-lg bg-slate-200"
          href={"/inicio/billeteras/retiros/cajeros"}
        >
          <div className="flex flex-col">
            <span className="font-bold text-primary-700">Cajeros</span>
            <span className="">En nuestra red de cajeros aliados</span>
          </div>
          <IoCashOutline size={30} />
        </Link>

        <Link
          className="flex items-start justify-between mb-2 gap-2 border border-primary-700 p-2 rounded-lg bg-slate-200"
          href={"/inicio/billeteras/retiros/puntos"}
        >
          <div className="flex flex-col">
            <span className="font-bold text-primary-700">¿Donde retirar?</span>
            <span className="">
              Visualiza un mapa de los puntos mas cercanos
            </span>
          </div>
          <IoMapOutline size={30} />
        </Link>
      </div>
    </div>
  );
}
