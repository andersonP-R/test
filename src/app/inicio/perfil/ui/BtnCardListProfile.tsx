"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  icon: React.ReactElement;
  url: string;
  title: string;
}

export const BtnCardListProfile = ({ icon, url, title }: Props) => {
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
      className="flex justify-between items-center border border-slate-400 bg-[#ffffffb4] rounded-lg p-2 pb-1"
    >
      <span className="text-base">{title}</span>
      {icon}
    </button>
  );
};
