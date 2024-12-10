"use client";

import { logout } from "@/actions";
import { IoLogOutOutline } from "react-icons/io5";

export const LogOutBtnProfile = () => {
  const logOut = async () => {
    await logout();
    window.localStorage.removeItem("isVisted");
    window.location.reload();
  };
  return (
    <button
      onClick={logOut}
      className="flex justify-between items-center border border-slate-400 bg-[#ffffffb4] rounded-lg p-2 pb-1"
    >
      <span className="text-base">Cerrar sesión</span>
      <IoLogOutOutline size={20} />
    </button>
  );
};
