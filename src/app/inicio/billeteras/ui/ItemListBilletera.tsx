import Image from "next/image";

interface Props {
  title: string;
  valueMonedero: string;
}

export const ItemListBilletera = ({ title, valueMonedero }: Props) => {
  return (
    <div className="flex py-2 px-4 rounded-2xl border border-primary">
      <Image
        src={"/monedero.png"}
        alt={"monedero-img"}
        width={50}
        height={50}
        className="h-[50px] w-[50px] mr-6"
      />

      <div className="flex flex-col">
        <span className="font-bold text-xl">{title}</span>
        <span className="font-light">${valueMonedero}</span>
      </div>
    </div>
  );
};
