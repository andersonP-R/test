export const revalidate = 60; // 60 segundos

import { redirect } from "next/navigation";

import { Pagination, ServiceGrid } from "@/components";
import { getPaginatedServices } from "@/actions";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function EscuelasPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const type = "escuelas-deportivas";

  const { services, totalPages } = await getPaginatedServices({
    page,
    type,
  });

  if (services.length === 0) {
    redirect("/");
  }

  return (
    <>
      {/* <Title title="Tienda" subtitle="Todos los productos" className="mb-2" /> */}

      <ServiceGrid services={services} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
