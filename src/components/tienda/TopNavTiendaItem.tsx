import Link from "next/link";
import {
  IoArrowBack,
  IoCartOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";

interface Props {
  prevPage: string;
}

export const TopNavTiendaItem = ({ prevPage = "/inicio" }: Props) => {
  return (
    <div className="flex px-2 py-4 justify-between items-center w-full bg-primary-700 sticky top-0 z-10">
      <Link
        href={prevPage}
        className="bg-white p-[6px] mr-2 w-max rounded-full"
      >
        <IoArrowBack size={25} className="text-slate-700" />
      </Link>
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
