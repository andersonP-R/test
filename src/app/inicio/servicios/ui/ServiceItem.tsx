import Image from "next/image";
import Link from "next/link";

interface Props {
  icon: string;
  title: string;
  url: string;
}

export const ServiceItem = ({ icon, title, url }: Props) => {
  return (
    <Link href={url} className="">
      <div className="w-[110px] h-[120px] flex flex-col items-center justify-center gap-[3px] p-2 border-2 border-primary rounded-xl">
        <Image
          src={icon}
          alt={"tienda-img"}
          width={50}
          height={50}
          className="w-[50px] h-[50px]"
        />
        <span className="text-primary text-center">{title}</span>
      </div>
    </Link>
  );
};
