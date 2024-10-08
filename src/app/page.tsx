import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-teal-400 p-4 justify-center items-center overflow-hidden">
      <div className="flex flex-col p-8 w-[500px]">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          Mediplus
        </h1>
        <p className="text-purple-700 mb-6">
          Gestiona todas tus citas médicas, procesos, historias clinicas y más
          desde un solo lugar.
        </p>
        <Link
          href="/auth/sign-in"
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded w-fit"
        >
          Empezar
        </Link>
      </div>

      <div>
        <Image src={"/img1.png"} alt={"image"} width={1200} height={1200} />
      </div>
    </div>
  );
}
