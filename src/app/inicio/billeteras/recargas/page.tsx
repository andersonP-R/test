import { BackButton, TopMenuHome } from "@/components";
import { IoHelpCircleOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { RetirosCard } from "../ui/RetirosCard";

interface Props {
  searchParams: {
    prevPage?: string;
  };
}

export default function RecargasPage({ searchParams }: Props) {
  const prevPage = searchParams.prevPage;

  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-4">
          <BackButton url={prevPage ?? "/inicio/billeteras"} />
          <span className="text-primary-700 font-bold text-xl">Recargas</span>

          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center mb-8">
          <span className="font-light text-primary-700">
            ¡Aquí puedes recargar el saldo de tu telefono, tarjetas de
            transporte y más!
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {/* <span className="font-light text-primary-700">Puedes retirar en:</span> */}

          <RetirosCard
            icon={<IoPhonePortraitOutline size={30} />}
            url={"/inicio/billeteras/recargas/celular"}
            title={"Celular"}
            subTitle={"Recarga el saldo de tu teléfono"}
          />

          {/* <RetirosCard
          icon={<IoBusOutline size={30} />}
          url={"/inicio/billeteras/recargas/tu-llave"}
          title={"Maas tullave"}
          subTitle={"Recarga tu tarjeta de transporte masivo"}
        /> */}
        </div>
      </div>
    </div>
  );
}
