"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DB_MOCK_CENTERS } from "@/utils";
import clsx from "clsx";
import {
  IoCalendarOutline,
  IoCardOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoTimeOutline,
} from "react-icons/io5";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal } from "@/components";
import { useRouter } from "next/navigation";
import { IService } from "@/interfaces/IService";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  service: IService;
}

export const SelectCenter = ({ service }: Props) => {
  const [view, setView] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isPurchVisible, setIsPurchVisible] = useState(false);
  const [value, onChange] = useState<Value>(null);
  const router = useRouter();

  const handleChangeState = (state: number) => {
    setView(state);
  };

  const handlePurchView = () => {
    setIsPurchVisible(true);
  };

  const handlePayment = () => {
    alert("¡Pago realizado de manera exitosa!");
    router.push(`/inicio/perfil/mis-servicios/servicio/${service.slug}`);
  };

  useEffect(() => {
    handleChangeState(view);
  }, [view]);
  return (
    <div className="">
      <div className="flex flex-col overflow-hidden">
        <span className="text-bold text-2xl pb-2 mb-1 mx-4 text-primary-800">
          Sedes disponibles
        </span>
        {/* tab navigation */}
        <div className="flex snap-x snap-mandatory w-full overflow-scroll mb-2 gap-4 mx-4">
          {DB_MOCK_CENTERS.map((e, i) => (
            <button
              key={e.id}
              onClick={() => handleChangeState(i + 1)}
              className={clsx(
                "flex items-center p-1 snap-start shrink-0 border-2 rounded-2xl mb-3 shadow-lg bg-[#ffffff91]",
                {
                  "border-2 border-primary-200": view === i + 1,
                }
              )}
            >
              <Image
                src={`/centers/${e.image}`}
                alt={e.shortName}
                width={70}
                height={60}
                className="w-[70px] h-[60px] object-cover rounded-xl"
              />
              <span className="capitalize text-[14px] px-2">{e.shortName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col px-4">
        {DB_MOCK_CENTERS.map(
          (e, i) =>
            view === i + 1 && (
              <div key={e.id} className="flex flex-col h-auto fade-in">
                <Image
                  src={`/centers/${e.image}`}
                  alt={e.shortName}
                  width={300}
                  height={160}
                  className="w-auto h-auto object-cover rounded-xl"
                />
                <span className="capitalize font-bold text-2xl my-3 text-primary-800">
                  {e.longName}
                </span>
                <div className="flex flex-col gap-2 mb-3">
                  <div className="flex gap-2 items-center">
                    <IoLocationOutline size={20} className="text-primary-700" />
                    <div>
                      <span className="font-bold text-primary-700">
                        Dirección:
                      </span>{" "}
                      {e.address}
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <IoPeopleOutline size={20} className="text-primary-700" />
                    <div>
                      <span className="font-bold text-primary-700">
                        Cupos disponibles:
                      </span>{" "}
                      {e.places}
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <IoTimeOutline size={20} className="text-primary-700" />
                    <div>
                      <span className="font-bold text-primary-700">
                        Horarios:
                      </span>{" "}
                      {e.schedule}
                    </div>
                  </div>

                  {value && (
                    <>
                      <div className="flex gap-2 items-center">
                        <IoCalendarOutline
                          size={20}
                          className="text-primary-700"
                        />
                        <div>
                          <span className="font-bold text-primary-700">
                            Fecha inicio:
                          </span>{" "}
                          {value?.toString().slice(0, 15) || "-"}
                        </div>
                      </div>

                      <div className="flex gap-2 items-center">
                        <IoCalendarOutline
                          size={20}
                          className="text-primary-700"
                        />
                        <div>
                          <span className="font-bold text-primary-700">
                            Fecha fin:
                          </span>{" "}
                          {e.availableSchedules}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="py-1 px-2 w-max mb-8 text-primary-800 rounded-xl text-[14px] border border-primary-800"
                >
                  {value ? "Editar fecha" : "Ver fechas disponibles"}
                </button>

                {!isPurchVisible && (
                  <div className="flex w-full items-center justify-center mb-6">
                    <button
                      disabled={!value}
                      className={clsx("btn-primary", {
                        "btn-disabled": !value,
                      })}
                      onClick={handlePurchView}
                    >
                      Comprar
                    </button>
                  </div>
                )}

                {isPurchVisible && (
                  <div className="flex flex-col gap-2 fade-in">
                    <span className="text-bold text-xl border-b border-black pb-2 mb-2">
                      Seleccione el método de pago
                    </span>
                    <button
                      onClick={handlePayment}
                      className="flex justify-between items-center gap-2 border border-slate-500 rounded-lg p-2"
                    >
                      <span>Pagar con tarjeta debito/credito</span>
                      <Image
                        src={"/payment.jpg"}
                        alt={"payment"}
                        width={70}
                        height={25}
                        className="w-[70px] h-[25px] rounded-lg"
                      />
                    </button>

                    <button
                      onClick={handlePayment}
                      className="flex justify-between items-center gap-2 border border-slate-500 rounded-lg p-2"
                    >
                      <span>Pagar con tarjeta TIC</span>
                      <IoCardOutline size={25} />
                    </button>
                  </div>
                )}

                <div className="mb-10"></div>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                  <Calendar onChange={onChange} value={value} />

                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="btn-secondary"
                    >
                      Cerrar
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="btn-primary"
                    >
                      Aceptar
                    </button>
                  </div>
                </Modal>
              </div>
            )
        )}
      </div>
    </div>
  );
};
