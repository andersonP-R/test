"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components";

interface Props {
  slugService: string;
}
export const AddToCheckout = ({ slugService }: Props) => {
  const [isPosted, setIsPosted] = useState(false);
  const router = useRouter();

  const handleCheck = () => {
    setIsPosted(true);
    router.push(`/inicio/servicios/tienda/checkout/${slugService}`);
  };

  return (
    <button
      onClick={handleCheck}
      className="w-[180px] bg-primary-700 text-white py-2 px-5 rounded-3xl self-center mb-8"
    >
      {isPosted ? <Spinner /> : "Seleccionar sede"}
    </button>
  );
};
