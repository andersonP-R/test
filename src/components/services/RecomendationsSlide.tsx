import Image from "next/image";
import Link from "next/link";

export const RecomendationsSlide = () => {
  return (
    <div className="flex flex-col my-10 ">
      <div className="flex gap-2 mb-4 text-primary-700 items-center">
        <span className="font-semibold text-lg">Te puede interesar</span>
      </div>

      <div className="flex snap-x snap-mandatory w-full overflow-scroll mb-10 gap-4">
        <div className="flex snap-start shrink-0 w-[300px] h-[150px] bg-gradient-primary rounded-3xl relative overflow-hidden">
          <Image
            src="/images/fot_girl.png"
            alt="footbal-girl"
            width={150}
            height={150}
            className="w-[150px] h-[150px] mt-4"
          />
          <div className="flex flex-col items-end justify-center text-right gap-1 pr-4 z-10">
            <span className="text-base font-bold text-slate-100">
              Escuelas de Futbol
            </span>
            <span className="text-[14px] text-slate-200 mb-2">
              ¡Potencia tu juego y trabajo en equipo!
            </span>
            <Link
              href={"/tienda/escuelas-deportivas"}
              className="px-2 py-1 w-max border border-white rounded-full text-white text-[14px]"
            >
              Ver más
            </Link>
          </div>

          <Image
            src="/images/cinta-9.png"
            alt="cinta"
            width={300}
            height={120}
            className="w-[300px] h-[120px] absolute object-cover opacity-40 top-8"
          />
        </div>

        <div className="flex snap-start shrink-0 w-[300px] h-[150px] bg-gradient-primary rounded-3xl relative overflow-hidden">
          <Image
            src="/images/bask_girl.png"
            alt="basketball-girl"
            width={130}
            height={130}
            className="w-[130px] h-[130px] mt-4"
          />
          <div className="flex flex-col items-end justify-center text-right gap-1 pr-4 z-10">
            <span className="text-base font-bold text-slate-100">
              Escuela Baloncesto
            </span>
            <span className="text-[14px] text-slate-200 mb-2">
              ¡Cada canasta es un punto a tu favor!
            </span>
            <Link
              href={"/tienda/escuelas-deportivas"}
              className="px-2 py-1 w-max border border-white rounded-full text-white text-[14px]"
            >
              Ver más
            </Link>
          </div>

          <Image
            src="/images/cinta-9.png"
            alt="cinta"
            width={300}
            height={120}
            className="w-[300px] h-[120px] absolute object-cover opacity-40 top-8"
          />
        </div>
      </div>
    </div>
  );
};
