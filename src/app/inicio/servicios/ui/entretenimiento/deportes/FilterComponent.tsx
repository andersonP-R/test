import { Dispatch, SetStateAction } from "react";

interface Props {
  filterOp: string;
  setFilterOp: Dispatch<SetStateAction<string>>;
}

export const FilterComponent = ({ filterOp, setFilterOp }: Props) => {
  return (
    <div className="flex items-center mb-4 w-full gap-2 sticky top-[60px] z-20 bg-white border-b border-slate-500">
      <span className="bg-primary text-white p-4">Filtrar:</span>
      <div className="flex snap-x snap-mandatory w-full overflow-scroll py-2">
        <div className="flex items-center gap-2 snap-start shrink-0 pr-2 ">
          <span>Escuela</span>
          <select
            onChange={(e) => setFilterOp(e.target.value)}
            className="p-2 border rounded-md bg-gray-200 outline-none"
          >
            <option value="all">Todos</option>
            <option value="futbol">Fútbol</option>
            <option value="natacion">Natación</option>
            <option value="tenis">Tenis</option>
            <option value="voleibol">Voleibol</option>
          </select>
        </div>

        <div className="flex items-center gap-2 snap-start shrink-0 pr-2 ">
          <span>Jornada</span>

          <select className="p-2 border rounded-md bg-gray-200">
            <option value="all">Todos</option>
            <option value="dia">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </select>
        </div>

        <div className="flex items-center gap-2 snap-start shrink-0 pr-2 ">
          <span>Sede</span>

          <select className="p-2 border rounded-md bg-gray-200">
            <option value="all">Todas</option>
            <option value="dia">Club Madelena</option>
            <option value="tarde">Centro de bienestar</option>
            <option value="noche">Colégio Cafam</option>
          </select>
        </div>
      </div>
    </div>
  );
};
