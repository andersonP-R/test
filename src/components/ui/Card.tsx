import Link from "next/link";

interface Props {
  icon: React.ReactElement;
  url: string;
  title: string;
}

export const Card = ({ icon, url, title }: Props) => {
  return (
    <Link
      href={url}
      className="w-[85px] h-[90px] flex flex-col gap-1 border border-primary-200 text-primary p-1 items-center rounded-lg text-center justify-center"
    >
      {icon}
      <span className="text-gray-700 leading-5">{title}</span>
    </Link>
  );
};
