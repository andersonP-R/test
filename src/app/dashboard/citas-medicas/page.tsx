import { RegisterNexCita } from "./ui/RegisterNewCita";

export default function CitasPage() {
  return (
    <div className="">
      <h1 className="font-bold border-b-2 border-black mb-4">Citas medicas</h1>

      <div className="flex justify-between mb-4">
        <h1>Gestionar una nueva cita médica</h1>
      </div>

      <RegisterNexCita />
    </div>
  );
}
