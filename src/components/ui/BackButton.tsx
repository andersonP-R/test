import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

interface Props {
  url: string;
}

export const BackButton = ({ url }: Props) => {
  return (
    <Link href={url} className="bg-slate-200 p-3 w-max rounded-full">
      <IoArrowBack size={25} className="text-slate-700" />
    </Link>
  );
};
