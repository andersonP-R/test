import { EntretenimientoElemtPage } from "../../ui/EntretenimientoElemtPage";

interface Props {
  searchParams: {
    pag?: string;
  };
}

export default async function EntretenimientolPage({ searchParams }: Props) {
  const page = searchParams.pag ?? "1";

  console.log(page);
  return (
    <div className="flex flex-col fade-in">
      <EntretenimientoElemtPage page={page} />
    </div>
  );
}
