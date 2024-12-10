import { auth } from "@/auth.config";
import { HomeELements } from "./ui/HomeELements";

export default async function BilleterasPage() {
  const session = await auth();
  const { nombres } = session!.user;
  return (
    <div className="flex flex-col relative">
      <HomeELements name={nombres!} />
    </div>
  );
}
