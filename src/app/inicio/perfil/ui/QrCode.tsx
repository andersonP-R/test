"use client";
import Image from "next/image";
import { IoExpand, IoInformationCircleOutline } from "react-icons/io5";
import { Modal } from "@/components";
import { useState } from "react";
import { IService } from "@/interfaces/IService";

interface Props {
  service: IService;
}

export const QRcode = ({ service }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 mb-2">
      <span className="font-bold text-xl text-primary-800 text-center">
        {service.nombre}
      </span>
      <div className="relative flex flex-col items-center w-[60%]">
        <Image
          src={`/qr-code.jpeg`}
          alt={"image"}
          width={140}
          height={140}
          className="w-[140px] h-[140px] rounded-md"
        />
        <IoExpand
          className="text-primary-700 absolute top-0 right-0"
          size={30}
          onClick={() => setIsOpen(true)}
        />

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={`/qr-code.jpeg`}
              alt={"image"}
              width={240}
              height={240}
              className="w-[240px] h-[240px] rounded-md"
            />
            <div className="flex gap-2 items-start text-primary-700">
              <IoInformationCircleOutline size={40} />
              <span className="font-light text-[14px]">
                Usa este código para redimir tus servicios adquiridos en las
                diferentes sedes
              </span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="btn-primary">
            Aceptar
          </button>
        </Modal>
      </div>
    </div>
  );
};
