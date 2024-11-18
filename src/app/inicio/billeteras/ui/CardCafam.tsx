import Image from "next/image";

export const CardCafam = () => {
  return (
    <div className="w-full border border-primary rounded-3xl p-6 overflow-hidden relative mb-4">
      <Image
        src="/cinta.png"
        alt="cinta-img"
        width={200}
        height={200}
        className="w-[200px] h-[200px] absolute right-[-20px] bottom-[-20px] z-[-10]"
      />

      <Image
        src={"/logo.jpg"}
        alt={"logo-img"}
        width={80}
        height={80}
        className="mb-8 w-[100px] h-[50px]"
      />
      <span className="font-bold text-2xl">Tarjeta integral</span>

      <div className="flex justify-between mt-10">
        <span>7388422939934</span>
        <span>Código control 01</span>
      </div>
    </div>
  );
};
