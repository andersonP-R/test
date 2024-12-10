"use client";

import {
  IoCartOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";

export const TopNavTienda = () => {
  return (
    <div className="flex px-3 py-4 justify-between items-center w-full bg-primary-700 sticky top-0 z-20 ">
      <div className="relative">
        <IoSearchOutline size={20} className="absolute top-2 left-2" />
        <input
          type="text"
          placeholder="Buscar"
          className="w-full rounded-full text-xl px-2 py-1 pl-8"
        />
      </div>

      <button className="mx-2">
        <div className="relative">
          <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-white text-primary-700">
            5
          </span>
          <IoCartOutline size={30} className="text-white" />
        </div>
      </button>

      <button className="mx-2">
        <div className="relative">
          <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-white text-primary-700">
            6
          </span>
          <IoNotificationsOutline size={30} className="text-white" />
        </div>
      </button>
    </div>
  );
};
