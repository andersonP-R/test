import {
  IoCardOutline,
  IoEyeOffOutline,
  IoShieldHalfOutline,
} from "react-icons/io5";
import { CardCafam } from "../ui/CardCafam";
import { ItemListBilletera } from "../ui/ItemListBilletera";
import { BackButton } from "@/components";

export default function TarjetaIntegralPage() {
  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/billeteras"} />
      <CardCafam />

      <div className="flex p-2 justify-around w-full mb-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <IoShieldHalfOutline size={25} />
          <span>Bloquear</span>
        </div>

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
        <ItemListBilletera
          title={"Descuento Afiliado"}
          valueMonedero={"120.000"}
        />

        <ItemListBilletera
          title={"Descuento Afiliado"}
          valueMonedero={"120.000"}
        />

        <ItemListBilletera
          title={"Descuento Afiliado"}
          valueMonedero={"120.000"}
        />
      </div>
    </div>
  );
}
