import Image from "next/image";
import { BackButton, TopMenuHome } from "@/components";
import Link from "next/link";
import {
  IoArrowRedoOutline,
  IoLocationOutline,
  IoSparklesOutline,
} from "react-icons/io5";

export default async function MisServiciosPage() {
  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-6 gap-2">
          <BackButton url={"/inicio/perfil"} />
          <span className="text-primary-700 font-bold text-xl flex-1">
            Servicios Adquiridos
          </span>

          <div></div>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="flex gap-2">
            <Image
              src={`/services/bi_1.jpg`}
              alt={"image"}
              width={100}
              height={80}
              className="w-[100px] h-[80px] rounded-lg object-cover"
            />

            <div className="flex flex-col gap-1 flex-1">
              <div className="flex gap-1 items-center">
                <IoSparklesOutline size={18} />
                <span className={`antialiased text-base`}>Billar Club</span>
              </div>
              <div className="flex gap-1 items-center">
                <IoLocationOutline size={18} />
                <span className={`antialiased text-base`}>Club Campestre</span>
              </div>
              <Link
                href={
                  "/inicio/perfil/mis-servicios/servicio/billar_club_campestre"
                }
              >
                <div className="flex gap-1 items-center">
                  <IoArrowRedoOutline size={18} />
                  <span className="underline">Ver detalles</span>
                </div>
              </Link>
            </div>
            <span
              className={`antialiased text-base bg-green-600 py-1 px-2 rounded-2xl text-white h-max`}
            >
              Activo
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Image
              src={`/services/gy_2.jpg`}
              alt={"image"}
              width={100}
              height={80}
              className="w-[100px] h-[80px] rounded-lg object-cover"
            />

            <div className="flex flex-col gap-1 flex-1">
              <div className="flex gap-1 items-center">
                <IoSparklesOutline size={18} />
                <span className={`antialiased text-base`}>
                  Bodytech Antar...
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <IoLocationOutline size={18} />
                <span className={`antialiased text-base`}>Colégio Cafam</span>
              </div>
              <Link
                href={
                  "/inicio/perfil/mis-servicios/servicio/bodytech_antares_super_ano"
                }
              >
                <div className="flex gap-1 items-center">
                  <IoArrowRedoOutline size={18} />
                  <span className="underline">Ver detalles</span>
                </div>
              </Link>
            </div>
            <span
              className={`antialiased text-base bg-green-600 py-1 px-2 rounded-2xl text-white h-max`}
            >
              Activo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
