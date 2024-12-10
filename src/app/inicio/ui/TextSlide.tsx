"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideshow.css";
import { IoCheckmarkOutline } from "react-icons/io5";

export const TextSlide = () => {
  return (
    <div className={"px-4"}>
      <Swiper
        style={{
          width: "100%",
          height: "auto",
        }}
        pagination
        autoplay={{
          delay: 4000,
        }}
        modules={[FreeMode, Autoplay]}
        loop
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-2">
            <span className="font-thin text-primary-700 text-center">
              Gestione y administre todos sus servicios Cafam en un solo lugar
            </span>
            <div className="bg-[#9fadf8] p-2 rounded-full">
              <IoCheckmarkOutline size={25} className="text-white font-bold" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-2">
            <span className="font-thin text-primary-700 text-center">
              Utilice su dinero de una manera rapida, segura y flexible
            </span>
            <div className="bg-[#9fadf8] p-2 rounded-full">
              <IoCheckmarkOutline size={25} className="text-white font-bold" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-2">
            <span className="font-thin text-primary-700 text-center">
              Genere certificados, paz y salvos y estractos en un solo lugar
            </span>
            <div className="bg-[#9fadf8] p-2 rounded-full">
              <IoCheckmarkOutline size={25} className="text-white font-bold" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
