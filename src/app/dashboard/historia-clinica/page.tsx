import { getAllHistories } from "@/actions";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";

export default async function HistoriaPage() {
  const { histories } = await getAllHistories();
  console.log(histories);

  return (
    <div className="">
      <h1 className="font-bold border-b-2 border-black mb-4">
        Historias Clinicas
      </h1>

      <div className="flex justify-between mb-4">
        <h1>Aqui podras gestionar tus historias clinicas</h1>
        <Link href="/dashboard/historia-clinica/nueva-historia">
          <div className="flex items-center p-2 border-2 border-black rounded-xl">
            <span className="mr-2">Agregar</span>
            <IoAddCircleOutline size={25} />
          </div>
        </Link>
      </div>

      {histories.length ? (
        histories.map((h) => (
          <div
            className="flex flex-col border-2 border-black p-2 mb-4"
            key={h.id}
          >
            <span>
              {" "}
              <strong>ID historia clinica:</strong> {h.id}
            </span>

            <span>
              {" "}
              <strong>Nombre:</strong> {h.nombre} {h.apellido}
            </span>

            <span>
              {" "}
              <strong>Edad:</strong> {h.edad}
            </span>

            <span>
              {" "}
              <strong>Estado civil:</strong> {h.estadoCivil}
            </span>

            <span>
              {" "}
              <strong>Genero:</strong> {h.genero}
            </span>

            <span>
              {" "}
              <strong>Ocupación:</strong> {h.ocupacion}
            </span>

            <span>
              {" "}
              <strong>Teléfono:</strong> {h.telefono}
            </span>

            <span>
              {" "}
              <strong>Fecha nacimiento:</strong> {h.fechaNacimiento}
            </span>

            <span>
              {" "}
              <strong>Direccion:</strong> {h.direccion}
            </span>

            <span>
              {" "}
              <strong>Antecedentes:</strong> {h.antecedentes}
            </span>

            <span>
              {" "}
              <strong>Diagnostico:</strong> {h.diagnosticos}
            </span>

            <span>
              {" "}
              <strong>Tratamientos:</strong> {h.tratamientos}
            </span>

            <span className="border-b-2 border-black">
              {" "}
              <strong>Notas Medicas:</strong> {h.notasMedicas}
            </span>

            <span className="mt-4">Acciones:</span>
            <div className="flex">
              <Link
                href="/dashboard/citas-medicas"
                className="border-2 border-black p-2 mr-2"
              >
                Solicitar cita medica
              </Link>

              <Link href="#" className="border-2 border-black p-2 mr-2">
                Actualizar
              </Link>
              <Link href="#" className="border-2 border-black p-2 mr-2">
                Borrar
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>Nothin here</div>
      )}
      <div></div>
    </div>
  );
}
