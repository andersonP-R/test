import { Metadata } from "next";
import ChangeProfileGrid from "./ui/ChangeProfileGrid";
import { auth } from "@/auth.config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Página para el perfil de usuario",
};

export default async function PerfilPage() {
  const session = await auth();
  const { avatar, email, identificacion, direccion, nombres, apellidos, id } =
    session!.user;
  console.log(session?.user);

  return (
    <div
      id="profile-container"
      className="flex flex-col sm:flex-row gap-2 sm:gap-10 mb-10 px-2"
    >
      <div
        id="avatar-box"
        className="flex flex-col items-center justify-center w-full sm:w-1/2 h-auto gap-2 border border-red-300 p-1"
      >
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
          {avatar!.length === 0 ? (
            <ChangeProfileGrid id={id} />
          ) : (
            <Image
              src={`/images/${avatar}`}
              alt="image"
              width={300}
              height={300}
            />
          )}
        </div>
        <span className="text-bold text-xl capitalize">
          {nombres} {apellidos}
        </span>
      </div>
      <div
        id="description-box"
        className="w-full h-[300px] border border-red-300 p-2"
      >
        <p>Correo: {email}</p>
        <p>Cédula: {identificacion}</p>
        <p>Dirección: {direccion}</p>
      </div>
    </div>
  );
}
