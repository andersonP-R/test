import { titleFont } from "@/config/fonts";
import {
  AddToCheckout,
  ServiceMobileSlideshow,
  ServiceTab,
  TopNavTiendaItem,
} from "@/components";
import { auth } from "@/auth.config";
import { checkUserCat, currencyFormat } from "@/utils";
import { SERVICES_MOCK } from "@/seed/mock-data";
// import { AddToCart } from './ui/AddToCart';

interface Props {
  params: {
    slug: string;
  };
}

export default async function ServiceBySlugPage({ params }: Props) {
  const { slug } = params;
  const service = SERVICES_MOCK.find((e) => e.slug === slug);

  const session = await auth();
  const categoryUser = session?.user.categoriaAfiliacion;

  // TODO: improve user checking category system to load prices according user category
  const price = checkUserCat(categoryUser || "", service?.precios!);

  return (
    <div className="flex flex-col fade-in">
      <TopNavTiendaItem prevPage={"/inicio/servicios"} />
      <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Slideshow */}
        <div className="col-span-1 md:col-span-2 ">
          {/* Mobile Slideshow */}
          <ServiceMobileSlideshow
            title={service?.nombre || ""}
            images={service?.imagenes || []}
            className="block md:hidden"
          />
        </div>

        {/* Detalles */}
        <div className="col-span-1 px-4">
          <h1
            className={` ${titleFont.className} antialiased font-bold text-xl`}
          >
            {service?.nombre}
          </h1>

          <span className="text-lg mb-5">Categoria: {categoryUser}</span>
          <p className="text-lg mb-5 font-bold">${currencyFormat(price)}</p>

          {/* <AddToCart product={ product } /> */}
          <div className="mb-2">
            <AddToCheckout slugService={slug} />
          </div>

          {/* Descripción */}
          <h3 className="font-bold text-xl text-primary-800 mb-4">
            Descripción
          </h3>
          <p className="font-light mb-6 text-primary-900 leading-7">
            {service?.descripcion}
          </p>
          <ServiceTab
            objetivo={service?.objetivo || ""}
            requisitos={service?.requisitos || []}
            recomendaciones={service?.recomendaciones || []}
          />
        </div>
      </div>
    </div>
  );
}
