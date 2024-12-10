import { ServiceGrid } from "@/components";
import { IService2 } from "@/seed/mock-data";
import { FilterComponent } from "./FilterComponent";

import { Dispatch, SetStateAction } from "react";

interface Props {
  services: IService2[];
  filterOp: string;
  setFilterOp: Dispatch<SetStateAction<string>>;
}

export const DeporteElements = ({ services, filterOp, setFilterOp }: Props) => {
  return (
    <>
      {/* -------------------------- FILTERS ------------------------------- */}
      <FilterComponent filterOp={filterOp} setFilterOp={setFilterOp} />
      {/* -------------------------- FILTERS END ------------------------------- */}
      <div className="px-4">
        <ServiceGrid services={services} />
      </div>
      <div className="mb-28"></div>
    </>
  );
};
