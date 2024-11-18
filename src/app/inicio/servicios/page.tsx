import { ServiceItem } from "./ui/ServiceItem";

export default function ServiciosPage() {
  return (
    <div className="flex flex-col">
      <span className="text-2xl mb-4">Todos los servicios</span>
      <div className="grid grid-cols-3 gap-4">
        <ServiceItem icon="/tienda.png" title={"Tienda"} url={"/tienda"} />
        <ServiceItem
          icon="/educacion.png"
          title={"Educacion"}
          url={"/inicio/servicios/educacion"}
        />

        <ServiceItem
          icon="/salud.png"
          title={"Salud"}
          url={"/inicio/servicios/salud"}
        />

        <ServiceItem
          icon="/seguros.png"
          title={"Seguros"}
          url={"/inicio/servicios/seguros"}
        />

        <ServiceItem
          icon="/turismo.png"
          title={"Turismo"}
          url={"/inicio/servicios/turismo"}
        />

        <ServiceItem
          icon="/empleo.png"
          title={"Empleo"}
          url={"/inicio/servicios/empleo"}
        />

        <ServiceItem
          icon="/ocio.png"
          title={"Ocio y recreación"}
          url={"/inicio/servicios/ocio-recreacion"}
        />
      </div>
    </div>
  );
}
