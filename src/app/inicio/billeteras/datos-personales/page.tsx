import { auth } from "@/auth.config";
import { BackButton } from "@/components";
import Link from "next/link";
import { IoInformationCircleOutline } from "react-icons/io5";

export default async function DatosPersonalesPage() {
  const session = await auth();
  const { identificacion, nombres, apellidos, categoriaAfiliacion } =
    session!.user;

  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/billeteras"} />
      <div className="flex flex-col gap-2 text-center mb-12">
        <span className="font-bold text-2xl text-primary-700">
          Datos Personales
        </span>
        <span className="font-light text-[#214061]">
          Aquí puedes visualizar los datos asociados a tu billetera
        </span>
      </div>

      <span className="text-bold text-lg text-primary-700 mb-4">
        Perfil de afiliación
      </span>
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex justify-between py-1 gap-2 border-b border-slate-500">
          <span className="font-bold text-primary-700">Titular</span>
          <span className="font-extralight text-[#214061]">
            {nombres} {apellidos}
          </span>
        </div>
        <div className="flex justify-between py-1 gap-2 border-b border-slate-500">
          <span className="font-bold text-primary-700">CC</span>
          <span className="font-extralight text-[#214061]">
            {identificacion}
          </span>
        </div>

        <div className="flex justify-between py-1 gap-2 border-b border-slate-500">
          <span className="font-bold text-primary-700">
            Estado de afiliación
          </span>
          <span className="font-extralight text-[#214061]">Vigente</span>
        </div>

        <div className="flex justify-between py-1 gap-2 border-b border-slate-500">
          <span className="font-bold text-primary-700">Categoria</span>
          <span className="font-extralight text-[#214061]">
            {categoriaAfiliacion}
          </span>
        </div>
      </div>

      <span className="text-bold text-lg text-primary-700 mb-2">
        Tu Grupo Familiar
      </span>
      <div className="flex flex-col items-center justify-center w-full h-[120px] text-primary-700">
        <IoInformationCircleOutline size={50} />
        <span className="font-light">No tienes beneficiarios</span>
      </div>

      <span className="text-center font-thin text-xs">
        Aquí puede leer los{" "}
        <Link
          href={"/inicio/billeteras/datos-personales/terminos-condiciones"}
          className="text-primary text-xs underline text-center mb-4"
        >
          Términos y Condiciones
        </Link>{" "}
        de uso.
      </span>
    </div>
  );
}
