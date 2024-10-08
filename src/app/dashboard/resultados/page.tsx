import { getAllProcess } from "@/actions/process/get-all-process";
import Link from "next/link";

export default async function ResultadosPage() {
  const data = await getAllProcess();
  const { process } = data;
  return (
    <div>
      <h1 className="font-bold border-b-2 border-black mb-4">
        Todos los resultados
      </h1>

      {process!.map((elem) => (
        <div
          className="flex flex-col border-2 border-black p-2 mb-4"
          key={elem.id}
        >
          <span>
            {" "}
            <strong>Fecha:</strong> {elem.fecha}
          </span>

          <span>
            {" "}
            <strong>Hora:</strong> {elem.hora}
          </span>

          <span>
            {" "}
            <strong>Motivo:</strong> {elem.motivo}
          </span>

          <span>
            {" "}
            <strong>Estado:</strong> {elem.estado}
          </span>

          <span>
            {" "}
            <strong>Resultado:</strong> En revisión
          </span>

          <span className="mt-4">Acciones:</span>
          <div className="flex">
            <Link href="/#" className="border-2 border-black p-2 mr-2">
              Descargar resultado
            </Link>

            <Link href="#" className="border-2 border-black p-2 mr-2">
              Borrar
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
