import { ServiceGridItem } from "./ServiceGridItem";
import { IService2 } from "@/seed/mock-data";

interface Props {
  services: IService2[];
}

export const ServiceGrid = ({ services }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 mb-10">
      {services.map((s) => (
        <ServiceGridItem key={s.id} service={s} />
      ))}
    </div>
  );
};
