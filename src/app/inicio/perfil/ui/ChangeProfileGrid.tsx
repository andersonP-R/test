"use client";

import { uploadImage } from "@/actions";
import { Modal } from "@/components";
import { FormEvent, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface Props {
  id: string;
}

export default function ChangeProfileGrid({ id }: Props) {
  const [message, setMessage] = useState<string | null>(null);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await uploadImage(formData, id);
    } catch (error) {
      console.log(error);
      setMessage("error al subir la imagen");
    }

    closeModal();
  };

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
        <div className="w-screen">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg, image/avif"
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Subir
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </Modal>
    </div>
  );
}
