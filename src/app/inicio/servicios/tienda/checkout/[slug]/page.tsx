import { auth } from "@/auth.config";
import { SelectCenter, TopNavTiendaItem } from "@/components";
import { titleFont } from "@/config/fonts";
import { SERVICES_MOCK } from "@/seed/mock-data";
import { checkUserCat, currencyFormat } from "@/utils";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export default async function CheckoutBySlugPage({ params }: Props) {
  const { slug } = params;
  const service = SERVICES_MOCK.find((e) => e.slug === slug);

  const session = await auth();
  const categoryUser = session?.user.categoriaAfiliacion;

  // TODO: improve user checking category system to load prices according user category
  const price = checkUserCat(categoryUser || "", service?.precios!);

  return (
    <div className="flex flex-col fade-in">
      <TopNavTiendaItem prevPage={`/inicio/servicios/tienda/${slug}`} />
      <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="flex gap-2 p-4">
          <Image
            src={`/services/${service?.imagenes[0]}`}
            alt={"image"}
            width={100}
            height={80}
            className="w-[100px] h-[80px] rounded-lg object-cover"
          />

          <div className="flex flex-col gap-1">
            <h1 className={` ${titleFont.className} antialiased text-base`}>
              {service?.nombre}
            </h1>

            <p className="text-base font-bold text-primary-700">
              ${currencyFormat(price)}
            </p>
          </div>
        </div>

        {/* available centers */}

        <SelectCenter service={service!} />
      </div>
    </div>
  );
}
