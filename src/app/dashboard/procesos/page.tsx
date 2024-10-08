import { getAllCitas } from "@/actions";
import Link from "next/link";
import React from "react";

export default async function ProcesosPage() {
  const data = await getAllCitas();
  const { citas } = data;
  return (
    <div className="">
      <h1 className="font-bold border-b-2 border-black mb-4">
        Todos los procesos actuales/citas médicas
      </h1>

      {citas!.map((elem) => (
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

          <span className="mt-4">Acciones:</span>
          <div className="flex">
            <Link
              href="/dashboard/resultados"
              className="border-2 border-black p-2 mr-2"
            >
              Ver resultado
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
