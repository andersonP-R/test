import {
  IoArchiveOutline,
  IoCheckmarkOutline,
  IoHomeOutline,
  IoMedicalOutline,
  IoTodayOutline,
} from "react-icons/io5";
import { AsideLinkOption } from "./AsideLinkOption";

export const Aside = () => {
  return (
    <div className=" flex flex-col min-w-[350px] border-r-2 border-gray-400 h-screen">
      <div className="w-[100%] h-[70px] bg-blue-800 flex items-center p-2">
        <h1 className="text-white text-2xl">MediPlus</h1>
      </div>

      {/* Link options */}
      <div id="links" className="flex flex-col">
        <AsideLinkOption
          name="Inicio"
          link="/dashboard"
          icon={<IoHomeOutline />}
        />
        <AsideLinkOption
          name="Citas medicas"
          link="/dashboard/citas-medicas"
          icon={<IoMedicalOutline />}
        />

        <AsideLinkOption
          name="Historias clinicas"
          link="/dashboard/historia-clinica"
          icon={<IoArchiveOutline />}
        />

        <AsideLinkOption
          name="Procesos"
          link="/dashboard/procesos"
          icon={<IoTodayOutline />}
        />

        <AsideLinkOption
          name="Resultados"
          link="/dashboard/resultados"
          icon={<IoCheckmarkOutline />}
        />
      </div>
    </div>
  );
};
