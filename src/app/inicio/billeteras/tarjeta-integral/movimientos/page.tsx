import { BackButton, TopMenuHome } from "@/components";
import { AnaliticDashboard } from "../../ui/AnaliticDashboard";
import { IoHelpCircleOutline } from "react-icons/io5";

export default function MovimientosPage() {
  return (
    <div className="flex flex-col">
      <TopMenuHome />

      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-6">
          <BackButton url={"/inicio/billeteras"} />
          <span className="text-primary-700 font-bold text-xl">
            Movimientos
          </span>

          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>

        <AnaliticDashboard />
      </div>
    </div>
  );
}
