import { BackButton, TopMenuHome } from "@/components";
import { EditAvatar } from "../ui/EditAvatar";

export default function AvatarPage() {
  return (
    <div className="flex flex-col fade-in">
      <TopMenuHome />
      <div className="flex flex-col gap-2 px-4">
        <div className="flex justify-between items-center mb-4 gap-2">
          <BackButton url={"/inicio/perfil/mis-datos"} />
          <span className="text-primary-700 font-bold text-xl flex-1">
            Editar foto
          </span>
          <div></div>
        </div>
        <EditAvatar />
      </div>
    </div>
  );
}
