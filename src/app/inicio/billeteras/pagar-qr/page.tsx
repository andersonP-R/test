"use client";

import { BackButton, Modal, TopMenuHome } from "@/components";
import { useEffect, useRef, useState } from "react";
import { IoHelpCircleOutline } from "react-icons/io5";

interface Props {
  searchParams: {
    prevPage?: string;
  };
}

export default function PagarQrPage({ searchParams }: Props) {
  const prevPage = searchParams.prevPage;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { exact: "environment" } }, // Seleccionar cámara trasera
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        setError("Error al acceder a la cámara. Verifica los permisos.");
        console.error(err);
      }
    };

    startCamera();

    return () => {
      // Limpia el flujo de video cuando el componente se desmonte
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);
  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col px-4">
        <div className="flex justify-between items-center mb-4">
          <BackButton url={prevPage ?? "/inicio/billeteras"} />
          <span className="text-primary-700 font-bold text-xl">
            Pagar con QR
          </span>

          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <video ref={videoRef} style={{ width: "100%", maxHeight: "800px" }} />

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col gap-4 p-2 items-center">
            <ul className="flex flex-col gap-3">
              <span className="font-bold text-xl text-primary-900">
                Recomendaciones
              </span>
              <li>
                - Coloque el código QR dentro del marco en la pantalla y
                asegúrese de que esté completamente visible.
              </li>
              <li>
                - Asegúrese de que el dispositivo esté a una distancia adecuada
                del código QR, ni demasiado cerca ni demasiado lejos.
              </li>
              <li>
                - Mantenga el dispositivo estable y enfoque la cámara en el
                código QR.
              </li>
              <li>- Evite obstrucciones en frente del código.</li>
            </ul>
            <button onClick={() => setIsOpen(false)} className="btn-primary">
              Aceptar
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
