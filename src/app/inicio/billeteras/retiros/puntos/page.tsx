import { BackButton } from "@/components";
export default function CorresponsalesPage() {
  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/billeteras/retiros"} />
      <div className="flex flex-col gap-2 text-center mb-8">
        <span className="font-bold text-2xl text-primary-700">
          Mapa de puntos cercanos
        </span>
        <span className="font-light text-primary-700">
          Visualiza los puntos de retiro mas cercanos para que puedas sacar tu
          plata
        </span>
      </div>

      {/* map */}
      <div className="overflow-hidden border border-primary-700 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.483488831709!2d-74.07607482555977!3d4.685714995289238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ae08e12a799%3A0x84be228099c5bdff!2sCafam%20Floresta%2C%20Barrios%20Unidos%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1731949180441!5m2!1sen!2sco"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
}
