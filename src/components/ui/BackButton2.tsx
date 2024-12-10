import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

interface Props {
  url: string;
}

export const BackButton2 = ({ url }: Props) => {
  return (
    <Link
      href={url}
      className="flex items-center gap-1 py-2 px-3 mb-6 border border-primary-700 text-primary-700 w-max rounded-full"
    >
      <IoArrowBack size={20} />
      <span>Volver</span>
    </Link>
  );
};
