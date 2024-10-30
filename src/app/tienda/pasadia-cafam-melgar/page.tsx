export const revalidate = 60; // 60 segundos

import { redirect } from "next/navigation";

import { Pagination, ServiceGrid } from "@/components";
import { getPaginatedServices } from "@/actions";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function PasadiaCafamPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const type = "pasadia cafam";

  const { services, currentPage, totalPages } = await getPaginatedServices({
    page,
    type,
  });

  if (services.length === 0) {
    return <h1>No hay datos por ahora</h1>;
  }

  return (
    <>
      {/* <Title title="Tienda" subtitle="Todos los productos" className="mb-2" /> */}

      <ServiceGrid services={services} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
