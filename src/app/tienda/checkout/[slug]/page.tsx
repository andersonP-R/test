import { getServiceBySlug } from "@/actions";
import { auth } from "@/auth.config";
import { titleFont } from "@/config/fonts";
import { checkUserCat, currencyFormat } from "@/utils";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export default async function CheckoutBySlugPage({ params }: Props) {
  const { slug } = params;
  const service = await getServiceBySlug(slug);

  const session = await auth();
  const categoryUser = session?.user.categoriaAfiliacion;

  // TODO: improve user checking category system to load prices according user category
  const price = checkUserCat(categoryUser || "", service?.precios!);

  return (
    <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="flex gap-2 p-2">
        <Image
          src={`/services/${service?.imagenes[0]}`}
          alt={"image"}
          width={100}
          height={80}
          className="w-[100px] h-[80px]"
        />

        <div className="flex flex-col gap-1">
          <h1 className={` ${titleFont.className} antialiased text-base`}>
            {service?.nombre}
          </h1>

          <span className="text-base">Categoria: {categoryUser}</span>
          <p className="text-base font-bold">${currencyFormat(price)}</p>
        </div>
      </div>

      {/* available centers */}
      <span className="text-bold text-2xl border-b border-black pb-2">
        Seleccione un sede
      </span>
    </div>
  );
}
