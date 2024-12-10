import { ProgresoElemtPage } from "../../ui/progreso/ProgresoElemtPage";

interface Props {
  searchParams: {
    pag?: string;
  };
}

export default async function ProgresoPage({ searchParams }: Props) {
  const page = searchParams.pag ?? "1";

  return (
    <div className="flex flex-col fade-in">
      <ProgresoElemtPage page={page} />
    </div>
  );
}
