// export const revalidate = 604800; //7 días
import { Metadata, ResolvingMetadata } from "next";

import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";
import { ServiceMobileSlideshow } from "@/components";
import { getServiceBySlug } from "@/actions";
import { auth } from "@/auth.config";
import { checkUserCat, currencyFormat } from "@/utils";
import Link from "next/link";
// import { AddToCart } from './ui/AddToCart';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const service = await getServiceBySlug(slug);

  return {
    title: service?.nombre ?? "Producto no encontrado",
    description: service?.descripcion ?? "",
    openGraph: {
      title: service?.nombre ?? "Producto no encontrado",
      description: service?.descripcion ?? "",
      // images: [], // https://misitioweb.com/products/image.png
      images: [`/services/${service?.imagenes[1]}`],
    },
  };
}

export default async function ServiceBySlugPage({ params }: Props) {
  const { slug } = params;
  const service = await getServiceBySlug(slug);

  const session = await auth();
  const categoryUser = session?.user.categoriaAfiliacion;

  // TODO: improve user checking category system to load prices according user category
  const price = checkUserCat(categoryUser!, service?.precios!);

  console.log(session?.user);

  if (!service) {
    console.log("error");
  }

  return (
    <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ServiceMobileSlideshow
          title={service?.nombre || ""}
          images={service?.imagenes || []}
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        {/* <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        /> */}
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-2">
        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          {service?.nombre}
        </h1>

        <span className="text-lg mb-5">Categoria: {categoryUser}</span>
        <p className="text-lg mb-5 font-bold">${currencyFormat(price)}</p>

        {/* <AddToCart product={ product } /> */}
        <div className="mb-4">
          <Link href={"/checkout"} className="btn-primary">
            Selecionar una sede
          </Link>
        </div>

        {/* Descripción */}
        <h3 className="font-bold text-lg">Descripción</h3>
        <p className="font-light">{service?.descripcion}</p>
      </div>
    </div>
  );
}
