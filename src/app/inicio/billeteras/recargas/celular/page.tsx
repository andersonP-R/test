import { BackButton, TopMenuHome } from "@/components";
import { IoHelpCircleOutline } from "react-icons/io5";
interface Props {
  searchParams: {
    prevPage?: string;
  };
}
export default function CelularPage({ searchParams }: Props) {
  const prevPage = searchParams.prevPage;

  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-4">
          <BackButton url={prevPage ?? "/inicio/billeteras/recargas"} />
          <span className="text-primary-700 font-bold text-xl">
            Recargar Celular
          </span>

          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center mb-8">
          <span className="font-light text-primary-700">
            Elige tu bolsillo y el valor a recargar
          </span>
        </div>

        <div className="flex flex-col gap-1">
          {/* <span className="font-light text-primary-700">Puedes retirar en:</span> */}
          <span className="font-light text-primary-700">
            Producto origen del dinero
          </span>
          <div className="flex flex-col mb-2">
            <select className="p-2 border border-black rounded-md bg-gray-200">
              <option value="audi">Tarjeta integral Cafam</option>
            </select>
          </div>

          <span className="font-light text-primary-700">
            Seleccione el bolsillo origen del dinero
          </span>
          <div className="flex flex-col mb-2">
            <select className="p-2 border border-black rounded-md bg-gray-200">
              <option value="saab">Monedero principal</option>
              <option value="mercedes">Subsidio familiar</option>
              <option value="audi">Crédito afiliado</option>
            </select>
          </div>

          <span className="font-light text-primary-700">
            Seleccione el operador telefónico
          </span>
          <div className="flex flex-col mb-2">
            <select className="p-2 border border-black rounded-md bg-gray-200">
              <option value="">Indica el operador</option>
              <option value="saab">Claro</option>
              <option value="mercedes">Movistar</option>
              <option value="audi">Tigo</option>
            </select>
          </div>

          <span className="font-light text-primary-700">
            Indique número de celular a recargar
          </span>
          <input
            className={
              "p-2 border border-black rounded outline-primary bg-gray-200 mb-2"
            }
            type="number"
            placeholder="(###) ###-####"
          />

          <span className="font-light text-primary-700">
            Indique el monto a recargar
          </span>
          <input
            className={
              "p-2 border border-black rounded outline-primary bg-gray-200 mb-8"
            }
            type="number"
            placeholder="$0"
          />

          <button className="btn-primary self-center">Recargar</button>
        </div>
      </div>
    </div>
  );
}
