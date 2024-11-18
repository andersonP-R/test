import { Metadata } from "next";
// import ChangeProfileGrid from "./ui/ChangeProfileGrid";
import { auth } from "@/auth.config";
// import Image from "next/image";
// import ChangeProfile from "./ui/ChangeProfile";
import { ImageIcon } from "@/components";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Página para el perfil de usuario",
};

export default async function PerfilPage() {
  const session = await auth();
  const {
    email,
    identificacion,
    direccion,
    nombres,
    apellidos,
    categoriaAfiliacion,
  } = session!.user;
  console.log(session?.user);

  return (
    <div
      id="profile-container"
      className="flex flex-col sm:flex-row gap-2 sm:gap-10 mb-10"
    >
      <div
        id="avatar-box"
        className="flex flex-col items-center justify-center w-full sm:w-1/2 h-auto gap-2 p-1"
      >
        <ImageIcon
          w={"150"}
          h={"150"}
          imageUrl={"/images/default_user.jpeg"}
          wImage={150}
          hImage={150}
        />
        <span className="text-bold text-xl capitalize">
          {nombres} {apellidos}
        </span>
      </div>
      <div id="description-box" className="w-full h-[300px] p-2">
        <p>Correo: {email}</p>
        <p>Cédula: {identificacion}</p>
        <p>Dirección: {direccion}</p>
        <p>Categoria: {categoriaAfiliacion}</p>
      </div>
    </div>
  );
}
