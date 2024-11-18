"use client";

// import { uploadImage } from "@/actions";
import { Modal } from "@/components";
import { useState } from "react";
import {
  IoCameraOutline,
  IoCloudUploadOutline,
  IoHappyOutline,
} from "react-icons/io5";

interface Props {
  id: string;
}

export default function ChangeProfile({ id }: Props) {
  const [message, setMessage] = useState<string | null>(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isAvatarBoxVisible, setAvatarBoxVisible] = useState(false);

  const showAvatarBox = () => setAvatarBoxVisible(true);
  //   const hideAvatarBox = () => setAvatarBoxVisible(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  //   const handleSubmit = async () => {
  //     closeModal();
  //   };

  return (
    <div className="border h-full">
      <div className="flex justify-center items-center bg-slate-300 w-full h-full">
        <button
          className="flex flex-col items-center justify-center rounded-full p-3"
          onClick={openModal}
        >
          <IoCloudUploadOutline size={25} />
          <span className="text-xs">Subir</span>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-[300px] h-min-[200px] flex flex-col justify-center items-center">
          <div className="flex gap-6 mt-6">
            <button
              className="w-[70px] flex flex-col p-2 items-center justify-center border-2 border-primary rounded-2xl text-primary"
              onClick={() => alert("brayan gay")}
            >
              <IoCameraOutline size={25} />
              <span>Foto</span>
            </button>

            <button
              className="w-[70px] flex flex-col p-2 items-center justify-center border-2 border-primary rounded-2xl text-primary"
              onClick={showAvatarBox}
            >
              <IoHappyOutline size={25} />
              <span>Avatar</span>
            </button>
          </div>

          {isAvatarBoxVisible && <div>Avatar</div>}

          {message && <p>{message}</p>}
        </div>
      </Modal>
    </div>
  );
}
