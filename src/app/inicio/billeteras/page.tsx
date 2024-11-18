import {
  IoApps,
  IoCardOutline,
  IoCashOutline,
  IoHappyOutline,
  IoIdCardOutline,
  IoKeyOutline,
  IoPhonePortraitOutline,
  IoQrCodeOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { Card } from "@/components";
import Image from "next/image";

export default function BilleterasPage() {
  return (
    <div className="flex flex-col gap-12 fade-in">
      <div className="flex p-2 justify-between items-center">
        <p className="text-xl font-bold text-primary-700">
          Maneja tu plata desde la palma de tu mano
        </p>
        <Image
          src={"/seguros.png"}
          alt={"billetera-image"}
          width={60}
          height={60}
          className="w-[60px] h-[60px]"
        />
      </div>
      {/* Tus productos */}
      <div className="flex flex-col">
        <div className="flex gap-2 mb-4 text-primary-700 items-center">
          <IoApps size={25} />
          <span className="font-semibold text-lg">Tus Productos</span>
        </div>
        <Card
          icon={<IoCardOutline size={35} />}
          url={"/inicio/billeteras/tarjeta-integral"}
          title={"Tarjeta integral"}
        />
      </div>

      {/* Tus opciones */}
      <div className="flex flex-col">
        <div className="flex gap-2 mb-4 text-primary-700 items-center">
          <IoWalletOutline size={25} />
          <span className="font-semibold text-lg">Tus Opciones</span>
        </div>

        <div className="flex gap-4">
          <Card
            icon={<IoCashOutline size={35} />}
            url={"/inicio/billeteras/retiros"}
            title={"Retiros"}
          />

          <Card
            icon={<IoPhonePortraitOutline size={35} />}
            url={"/inicio/billeteras/recargas"}
            title={"Recargas"}
          />

          <Card
            icon={<IoQrCodeOutline size={35} />}
            url={"/inicio/billeteras/pagar-qr"}
            title={"Pagar con QR"}
          />

          <Card
            icon={<IoKeyOutline size={35} />}
            url={"/inicio/billeteras/generar-token"}
            title={"Generar token"}
          />
        </div>
      </div>

      {/* Tus datos */}
      <div className="flex flex-col">
        <div className="flex gap-2 mb-4 text-primary-700 items-center">
          <IoHappyOutline size={25} />
          <span className="font-semibold text-lg">Tus Datos</span>
        </div>

        <Card
          icon={<IoIdCardOutline size={35} />}
          url={"/inicio/billeteras/datos-personales"}
          title={"Datos personales"}
        />
      </div>
    </div>
  );
}
