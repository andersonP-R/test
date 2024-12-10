import {
  IoCardOutline,
  IoEyeOffOutline,
  IoHelpCircleOutline,
  IoShieldHalfOutline,
} from "react-icons/io5";
import { CardCafam } from "../ui/CardCafam";
import { ItemListBilletera } from "../ui/ItemListBilletera";
import { BackButton, TopMenuHome } from "@/components";
import Link from "next/link";

interface Props {
  searchParams: {
    prevPage: string;
  };
}

export default function TarjetaIntegralPage({ searchParams }: Props) {
  const prevPage = searchParams.prevPage;

  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-6">
          <BackButton url={prevPage ?? "/inicio/billeteras"} />
          <span className="text-primary-700 font-bold text-xl">Producto</span>

          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>
        <CardCafam />

        <div className="flex p-2 justify-around w-full mb-6">
          <Link
            href={"/inicio/billeteras/generar-token"}
            className="flex flex-col items-center justify-center gap-2"
          >
            <IoShieldHalfOutline size={25} />
            <span>Activar</span>
          </Link>

          <div className="flex flex-col items-center justify-center gap-2 text-primary">
            <IoCardOutline size={25} />
            <span>Productos</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <IoEyeOffOutline size={25} />
            <span>Ocultar</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          <ItemListBilletera
            title={"Monedero Principal"}
            valueMonedero={"230.000"}
          />
          <ItemListBilletera
            title={"Subsidio Familiar"}
            valueMonedero={"400.000"}
          />
          <ItemListBilletera
            title={"Credito Afiliado"}
            valueMonedero={"20.000"}
          />
        </div>
      </div>
    </div>
  );
}
