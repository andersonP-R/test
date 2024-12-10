import Image from "next/image";
import Link from "next/link";

export const BienestarSlide = () => {
  return (
    <div className="flex flex-col">
      <div className="flex snap-x snap-mandatory w-full overflow-scroll mb-4 pb-6">
        <div className="flex flex-col items-center snap-start shrink-0 relative pl-4">
          <Image
            src={"/images/s_ese.jpg"}
            alt={"image"}
            width={350}
            height={240}
            className="w-[350px] h-[240px] object-cover rounded-3xl"
          />
          <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
            <span className="text-primary-800 text-center">
              Servicios que contribuyen a mantener y mejorar su salud y su
              calidad de vida.
            </span>
            <Link
              href={"/inicio/servicios/tienda/esencial"}
              className="btn-primary"
            >
              Ver más
            </Link>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center snap-start shrink-0 relative pl-4">
          <Image
            src={"/images/s_pro.jpg"}
            alt={"image"}
            width={350}
            height={240}
            className="w-[350px] h-[240px] object-cover rounded-3xl"
          />
          <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
            <span className="text-primary-800 text-center">
              Servicios diseñados para impulsar su desarrollo y alcanzar sus
              objetivos.
            </span>
            <Link
              href={"/inicio/servicios/tienda/progreso"}
              className="btn-primary"
            >
              Ver más
            </Link>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center snap-start shrink-0 relative pl-4">
          <Image
            src={"/images/s_entre.jpg"}
            alt={"image"}
            width={350}
            height={240}
            className="w-[350px] h-[240px] object-cover rounded-3xl"
          />

          <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
            <span className="text-primary-800 text-center">
              Espacios y actividades pensados para su bienestar y disfrute en
              familia.
            </span>
            <Link
              href={"/inicio/servicios/tienda/entretenimiento"}
              className="btn-primary"
            >
              Ver más
            </Link>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center snap-start shrink-0 relative pl-4">
          <Image
            src={"/images/s_bie.jpg"}
            alt={"image"}
            width={350}
            height={240}
            className="w-[350px] h-[240px] object-cover rounded-3xl"
          />

          <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
            <span className="text-primary-800 text-center">
              Promovemos el equilibrio integral para una vida plena y saludable.
            </span>
            <Link href={"#"} className="btn-primary">
              Ver más
            </Link>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center snap-start shrink-0 relative px-4">
          <Image
            src={"/images/s_exp.jpg"}
            alt={"image"}
            width={350}
            height={240}
            className="w-[350px] h-[240px] object-cover rounded-3xl"
          />

          <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
            <span className="text-primary-800 text-center">
              Creamos experiencias únicas al entender las necesidades de quienes
              nos eligen.
            </span>
            <Link href={"#"} className="btn-primary">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
