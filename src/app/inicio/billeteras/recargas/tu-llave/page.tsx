import { BackButton } from "@/components";

export default function TuLlavePage() {
  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/billeteras/recargas"} />
      <div className="flex flex-col gap-2 text-center mb-8">
        <span className="font-bold text-2xl text-primary-700">
          Recarga tullave
        </span>
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
            <option value="">Seleccione un bolsillo</option>
            <option value="saab">Monedero principal</option>
            <option value="mercedes">Subsidio familiar</option>
            <option value="audi">Crédito afiliado</option>
          </select>
        </div>

        <span className="font-light text-primary-700">Número de tarjeta</span>
        <input
          className={
            "p-2 border border-black rounded outline-primary bg-gray-200 mb-2"
          }
          type="number"
        />

        <span className="font-light text-primary-700">Monto a recargar</span>
        <input
          className={
            "p-2 border border-black rounded outline-primary bg-gray-200 mb-8"
          }
          type="number"
          placeholder="$0"
        />

        <button className="btn-primary">Recargar</button>
      </div>
    </div>
  );
}
