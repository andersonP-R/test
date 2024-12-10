import { BackButton, TopMenuHome } from "@/components";
import {
  IoCashOutline,
  IoHelpCircleOutline,
  IoInformationCircleOutline,
  IoMapOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { RetirosCard } from "../ui/RetirosCard";

interface Props {
  searchParams: {
    prevPage?: string;
  };
}

export default function RetirosPage({ searchParams }: Props) {
  const prevPage = searchParams.prevPage;

  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-4">
          <BackButton url={prevPage ?? "/inicio/billeteras"} />
          <span className="text-primary-700 font-bold text-xl">Retiros</span>

          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center mb-8">
          <span className="font-light text-primary-700">
            Aqui puedes gestionar en donde y como retirar tu dinero
          </span>
        </div>

        <span className="font-light text-primary-700 mb-2">
          ¿De donde saldra la plata?
        </span>
        <div className="flex flex-col mb-2">
          <select className="p-2 border rounded-md bg-gray-200">
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
          <span className="font-light text-primary-700">
            Puedes retirar en:
          </span>

          <RetirosCard
            icon={<IoStorefrontOutline size={40} />}
            url={"/inicio/billeteras/retiros/corresponsales"}
            title={"Puntos físicos"}
            subTitle={"En cualquiera de nuestros corresponsales aliados"}
          />

          <RetirosCard
            icon={<IoCashOutline size={30} />}
            url={"/inicio/billeteras/retiros/cajeros"}
            title={"Cajeros"}
            subTitle={"En nuestra red de cajeros aliados"}
          />

          <RetirosCard
            icon={<IoMapOutline size={30} />}
            url={"/inicio/billeteras/retiros/puntos"}
            title={"¿Dónde retirar?"}
            subTitle={"Visualiza un mapa de los puntos mas cercanos"}
          />
        </div>
      </div>
    </div>
  );
}
