import Link from "next/link";

interface Props {
  link: string;
  name: string;
  icon: React.ReactElement;
}

export const AsideLinkOption = ({ link, name, icon }: Props) => {
  return (
    <Link href={link} className="hover:bg-slate-200">
      <div className="flex items-center p-4">
        <div className="mr-4 ">{icon}</div>
        <span className=" font-bold">{name}</span>
      </div>
    </Link>
  );
};
