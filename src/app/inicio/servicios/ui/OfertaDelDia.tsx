import Image from "next/image";

export const OfertaDelDia = () => {
  return (
    <div className="mt-4 mb-8">
      <Image
        src={"/images/banner8_crop.jpg"}
        alt={"banner"}
        width={400}
        height={150}
        className="w-[400px] h-[150px] object-cover"
      />
    </div>
  );
};
