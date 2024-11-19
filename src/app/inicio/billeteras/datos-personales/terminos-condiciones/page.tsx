import { BackButton } from "@/components";

export default async function TerminosCondicionesPage() {
  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/billeteras/datos-personales"} />
      <span>pdf</span>
    </div>
  );
}
