"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import next image
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import './styles.css';

// import required modules
import { FreeMode, Autoplay, Thumbs } from "swiper/modules";

export default function ImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image layout='fill' src="/home-1.jpg" />
          <div className="absolute top-0">
              <p className="text-white">Hello</p>
          </div>
          <div className="home__shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <div className="home__shadow"></div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <div className="home__shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className="home__shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          <div className="home__shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          <div className="home__shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          <div className="home__shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          <div className="home__shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          <div className="home__shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          <div className="home__shadow"></div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Autoplay, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image layout='fill' src="/home-1.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          <div className="home__card-shadow"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
