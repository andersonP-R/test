import { BackButton, TopMenuHome } from "@/components";
import { IoKeyOutline } from "react-icons/io5";
import { QRcode } from "../../../ui/QrCode";

export default async function BillarServicePage() {
  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-6 gap-2">
          <BackButton url={"/inicio/perfil/mis-servicios"} />
          <span className="text-primary-700 font-bold text-xl flex-1">
            Servicio
          </span>

          <div></div>
        </div>

        <QRcode service={"Billar Club"} />

        <div className="flex w-full items-center justify-center gap-2 mb-6 text-primary-900">
          <span className="text-[14px] font-thin">Código de acceso</span>
          <IoKeyOutline size={18} />
        </div>

        <span className="font-bold text-xl text-primary-800 mb-4">
          Detalles
        </span>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">Precio</span>
            <span className="text-base text-slate-600 font-bold">$48.000</span>
          </div>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">Tipo de servicio</span>
            <span className="text-base text-slate-600 font-bold">
              Practica libre
            </span>
          </div>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">Duración</span>
            <span className="text-base text-slate-600 font-bold">1 mes</span>
          </div>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">Fecha de compra</span>
            <span className="text-base text-slate-600 font-bold">
              12/11/2024
            </span>
          </div>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">
              Fecha de vencimiento
            </span>
            <span className="text-base text-slate-600 font-bold">
              12/12/2024
            </span>
          </div>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">Sede</span>
            <span className="text-base text-slate-600 font-bold">
              Club Campestre
            </span>
          </div>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">Dirección sede</span>
            <span className="text-base text-slate-600 font-bold">
              Calle 61 #23-A34
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
