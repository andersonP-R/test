import Image from "next/image";

interface Props {
  w: string;
  h: string;
  imageUrl: string;
  wImage: number;
  hImage: number;
}

export const ImageIcon = ({ w, h, imageUrl, wImage, hImage }: Props) => {
  return (
    <div className={`w-[${w}px] h-[${h}px] rounded-full overflow-hidden`}>
      <Image src={imageUrl} alt="image" width={wImage} height={hImage} />
    </div>
  );
};
