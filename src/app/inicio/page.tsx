import { auth } from "@/auth.config";

export default async function InicioPage() {
  const session = await auth();
  const { nombres, apellidos } = session!.user;

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center">
        <span className="text-2xl">Bienvenido,</span>
        <span className="font-bold text-2xl capitalize">
          {nombres} {apellidos}
        </span>
      </div>
    </div>
  );
}
