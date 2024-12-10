"use client";

import { AVATARS } from "@/utils";
import Image from "next/image";
import { useState } from "react";

export const EditAvatar = () => {
  const [image, setImage] = useState(AVATARS[0].image);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-primary-800 text-xl">
          Crea tu avatar
        </span>
        <button className="btn-disabled">Guardar</button>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex w-[160px] h-[160px] justify-center items-end bg-primary rounded-full">
          <Image
            src={`/avatars/${image}`}
            alt={"avatar-img"}
            width={150}
            height={150}
            className="w-[150px] h-[150px]"
          />
        </div>
        <div className="flex items-center justify-center h-[50px] w-full">
          <span className="text-xl">Selecciona un avatar</span>
        </div>

        <div className="w-full h-[300px] bg-[#dbdbdb] grid grid-cols-3 overflow-y-scroll gap-8 p-3 rounded-lg">
          {AVATARS.map((e) => (
            <button key={e.id} onClick={() => setImage(e.image)}>
              <Image
                src={`/avatars/${e.image}`}
                alt={"avatar-img"}
                width={100}
                height={90}
                className="w-[100px] h-[90px]"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
