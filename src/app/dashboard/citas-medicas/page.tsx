import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import { RegisterNexCita } from "./ui/RegisterNewCita";

export default function CitasPage() {
  return (
    <div className="">
      <h1 className="font-bold border-b-2 border-black mb-4">Citas medicas</h1>

      <div className="flex justify-between mb-4">
        <h1>Gestionar una nueva cita médica</h1>
        {/* <Link href="/dashboard/historia-clinica/nueva-historia">
          <div className="flex items-center p-2 border-2 border-black rounded-xl">
            <span className="mr-2">Agregar</span>
            <IoAddCircleOutline size={25} />
          </div>
        </Link> */}
      </div>

      <RegisterNexCita />
    </div>
  );
}
