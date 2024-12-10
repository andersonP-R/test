"use client";

import { Modal } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  IoCameraOutline,
  IoClose,
  IoHappyOutline,
  IoPencil,
} from "react-icons/io5";

export const ModalAvatarUpdate = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const router = useRouter();

  const handleRedir = (url: string) => {
    router.push(url);
  };

  return (
    <div className="">
      <button
        onClick={openModal}
        className="border border-primary-700 rounded-full p-1 absolute top-1 right-[95px] text-primary-700"
      >
        <IoPencil size={20} className="" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-[300px] h-min-[200px] flex flex-col justify-center items-center relative">
          <IoClose
            size={30}
            className="absolute top-0 right-0"
            onClick={closeModal}
          />
          <span className="font-bold text-primary-900 mt-8 mb-4">
            Editar foto de perfil
          </span>
          <div className="flex gap-6 mb-4">
            {/* <button
              className="w-[70px] flex flex-col p-2 items-center justify-center border-2 border-primary rounded-2xl text-primary"
              onClick={() => handleRedir("/inicio/perfil/avatar")}
            >
              <IoCameraOutline size={25} />
              <span>Foto</span>
            </button> */}

            <button
              className="w-[70px] flex flex-col p-2 items-center justify-center border-2 border-primary rounded-2xl text-primary"
              onClick={() => handleRedir("/inicio/perfil/avatar")}
            >
              <IoHappyOutline size={25} />
              <span>Avatar</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
