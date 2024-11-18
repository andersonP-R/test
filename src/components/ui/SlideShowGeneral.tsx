"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../services/slideshow.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const SlideShow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100%",
          height: "200px",
        }}
        pagination
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img
              // width={600}
              // height={500}
              // loading="lazy"
              src={`${image}`}
              alt={title}
              className="object-fill w-auto h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
