"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./slideshow.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const SubSecSlide = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100%",
          height: "100%",
        }}
        pagination
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Autoplay, Pagination, EffectFade]}
        effect="fade"
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img
              width={400}
              height={200}
              // loading="lazy"
              src={`${image}`}
              alt={title}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
