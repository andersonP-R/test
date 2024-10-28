export const revalidate = 60; // 60 segundos

import { redirect } from "next/navigation";

// import { getPaginatedProductsWithImages } from "@/actions";
import { ServiceGrid } from "@/components";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function EscuelasPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // const { products, currentPage, totalPages } =
  //   await getPaginatedProductsWithImages({ page });

  // if (services.length === 0) {
  //   redirect("/");
  // }

  return (
    <>
      {/* <Title title="Tienda" subtitle="Todos los productos" className="mb-2" /> */}

      <ServiceGrid services={[]} />

      {/* <Pagination totalPages={totalPages} /> */}
    </>
  );
}
