"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  icon: React.ReactElement;
  url: string;
  title: string;
}

export const Card = ({ icon, url, title }: Props) => {
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
      className="flex flex-col items-center gap-2 w-max h-max justify-center text-center"
    >
      <div className="p-4 bg-white rounded-xl shadow-lg shadow-slate-400 text-primary-700 border border-slate-500">
        {icon}
      </div>
      <span className="text-gray-700 text-base w-[75px]">{title}</span>
    </button>
  );
};
