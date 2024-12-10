import Image from "next/image";
import { auth } from "@/auth.config";
import { BackButton, TopMenuHome } from "@/components";
import { ModalAvatarUpdate } from "../ui/ModalAvatarUpdate";
import { IoInformationCircleOutline } from "react-icons/io5";
import Link from "next/link";

export default async function MisDatosPage() {
  const session = await auth();
  const {
    nombres,
    apellidos,
    email,
    identificacion,
    categoriaAfiliacion,
    direccion,
  } = session!.user;

  return (
    <div className="flex flex-col">
      <TopMenuHome />

      {/*  */}
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-4 gap-2">
          <BackButton url={"/inicio/perfil"} />
          <span className="text-primary-700 font-bold text-xl flex-1">
            Mis Datos Personales
          </span>
          <div></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full relative mb-8">
          <Image
            src={"/user.jpeg"}
            alt={"user"}
            width={120}
            height={120}
            className="w-[120px] h-[120px] rounded-full object-cover"
          />
          <ModalAvatarUpdate />
          <span className="text-bold text-2xl text-primary-800 capitalize">
            {nombres} {apellidos}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-lg text-primary-800">Datos personales</span>
            <span className="text-slate-700 underline">Editar</span>
          </div>
          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">Correo</span>
            <span className="text-base text-slate-600 font-bold">{email}</span>
          </div>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">
              Número identificación
            </span>
            <span className="text-base text-slate-600 font-bold">
              {identificacion}
            </span>
          </div>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">
              Dirección residencia
            </span>
            <span className="text-base text-slate-600 font-bold">
              {direccion}
            </span>
          </div>

          <span className="text-lg text-primary-800 mt-6">
            Datos de afiliado
          </span>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">Categoría</span>
            <span className="text-base text-slate-600 font-bold">
              {categoriaAfiliacion}
            </span>
          </div>

          <div className="flex justify-between border-b border-primary-800 pb-1">
            <span className="text-base text-primary-700">
              Estado de afiliación
            </span>
            <span className="text-base text-slate-600 font-bold">Vigente</span>
          </div>

          {/*  */}
          <div className="flex flex-col">
            <span className="text-bold text-lg text-primary-700 mb-2 mt-6">
              Tu Grupo Familiar
            </span>
            <div className="flex flex-col items-center justify-center w-full h-[120px] text-primary-700">
              <IoInformationCircleOutline size={50} />
              <span className="font-light">No tienes beneficiarios</span>
            </div>

            <span className="text-center font-thin text-xs">
              Aquí puede leer los{" "}
              <Link
                href={"/inicio/perfil/mis-datos/terminos-condiciones"}
                className="text-primary text-xs underline text-center mb-4"
              >
                Términos y Condiciones
              </Link>{" "}
              de uso.
            </span>
          </div>

          <div className="mb-28"></div>
        </div>
      </div>
    </div>
  );
}
