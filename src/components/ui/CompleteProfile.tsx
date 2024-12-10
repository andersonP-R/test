import Image from "next/image";
import Link from "next/link";

export const CompleteProfile = () => {
  return (
    <div className="flex w-full justify-center items-center px-6">
      <div className="flex flex-col items-center gap-3 text-center bg-white shadow-xl rounded-3xl px-6 py-8">
        <Image
          src={"/images/notebook-icon.png"}
          alt={"note-book"}
          width={150}
          height={150}
          className="w-[150px] h-[150px]"
        />

        <span className="text-xl font-bold text-primary-700">
          Ayúdanos a conocerte mejor
        </span>
        <span className="text-slate-600">
          Para ofrecerte una experiencia única y hecha a tu medida
        </span>
        <Link href={"/inicio/perfil/mis-datos"} className="btn-primary">
          Completa tus datos
        </Link>
      </div>
    </div>
  );
};
