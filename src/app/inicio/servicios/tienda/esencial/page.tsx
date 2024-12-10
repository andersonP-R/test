import { EsencialElemtPage } from "../../ui/EsencialElemtPage";

interface Props {
  searchParams: {
    pag?: string;
  };
}

export default async function EsencialPage({ searchParams }: Props) {
  const page = searchParams.pag ?? "1";

  return (
    <div className="flex flex-col fade-in">
      <EsencialElemtPage page={page} />
    </div>
  );
}
