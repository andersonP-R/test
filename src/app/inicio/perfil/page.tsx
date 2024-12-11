import { auth } from "@/auth.config";
import Image from "next/image";
import {
  IoFingerPrintOutline,
  IoGridOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import Link from "next/link";
import { TopMenuHome } from "@/components";
import { LogOutBtnProfile } from "./ui/LogOutBtnProfile";

export default async function PerfilPage() {
  const session = await auth();
  const { nombres, apellidos } = session!.user;

  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex flex-col items-center justify-center w-full relative mb-8">
          <Image
            src={"/user.jpeg"}
            alt={"user"}
            width={120}
            height={120}
            className="w-[120px] h-[120px] rounded-full object-cover"
          />
          <span className="text-bold text-2xl text-primary-800 capitalize">
            {nombres} {apellidos}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href="/inicio/perfil/mis-datos"
            className="flex justify-between items-center border border-slate-400 bg-[#ffffffb4] rounded-lg p-2 pb-1"
          >
            <span className="text-base">Mis datos personales</span>
            <IoFingerPrintOutline size={20} />
          </Link>

          <Link
            href="/inicio/perfil/mis-servicios"
            className="flex justify-between items-center border border-slate-400 bg-[#ffffffb4] rounded-lg p-2  pb-1"
          >
            <span className="text-base">Mis servicios adquiridos</span>
            <IoGridOutline size={20} />
          </Link>

          <Link
            href="/inicio/perfil/cafalover"
            className="flex justify-between items-center border border-slate-400 bg-[#ffffffb4] rounded-lg p-2  pb-1"
          >
            <span className="text-base">Cafalover</span>
            <IoTrophyOutline size={20} />
          </Link>

          {/* <BtnCardListProfile
            icon={<IoTrophyOutline size={20} />}
            url={"/inicio/perfil/cafalover"}
            title={"Cafalover"}
          /> */}

          <LogOutBtnProfile />
        </div>
      </div>
    </div>
  );
}
