"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  icon: React.ReactElement;
  url: string;
  title: string;
  subTitle: string;
}

export const RetirosCard = ({ icon, url, title, subTitle }: Props) => {
  const router = useRouter();
  const currentPath = usePathname();
  const searchParams = useSearchParams();

  const handleRedirect = () => {
    const params = new URLSearchParams(searchParams);
    params.set("prevPage", currentPath);
    router.push(`${url}?${params.toString()}`);
  };
  return (
    <button
      onClick={handleRedirect}
      className="flex items-start text-left justify-between mb-2 gap-2 border border-primary-700 p-2 rounded-lg bg-slate-200"
    >
      <div className="flex flex-col">
        <span className="font-bold text-primary-700">{title}</span>
        <span className="">{subTitle}</span>
      </div>
      {icon}
    </button>
  );
};
