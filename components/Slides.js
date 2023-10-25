"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "./swiper-slider.modules.css"
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="flex flex-col items-center justify-ceneter mx-auto md:w-[1100px] h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 22500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Image
              src="/home-8.jpg"
              className="object-cover absolute top-0 left-0"
              layout="fill"
            />
            <div className="absolute left-0 flex w-full items-end justify-start bottom-0 py-20 px-16 h-24 glass-bg text-black">
              <div className="flex justify-between flex-row w-full ">
                <div className="font-raleway flex flex-col gap-2 items-start justify-between">
                  <span className="font-bold text-xl capitalize">
                    Damac Tower views
                  </span>
                  <span className="capitalize text-sm">
                    London, United Kingdom
                  </span>
                </div>
                <div>
                  <Link
                    href="/page"
                    className="w-full flex items-center justify-between py-2 px-6 gap-5 border-black border-2 hover:scale-105 hover:bg-white font-semibold font-raleway transition-all duration-300 text-sm"
                  >
                    <span className="uppercase">Learn more</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div>
            <Image
              src="/home-7.jpg"
              className="object-cover absolute top-0 left-0"
              layout="fill"
            />
            <div className="absolute left-0 flex w-full items-end justify-start bottom-0 py-20 px-16 h-24 glass-bg text-black">
              <div className="flex justify-between flex-row w-full ">
                <div className="font-raleway flex flex-col gap-2 items-start justify-between">
                  <span className="font-bold text-xl capitalize">
                    Damac Tower views
                  </span>
                  <span className="capitalize text-sm">
                    London, United Kingdom
                  </span>
                </div>
                <div>
                  <Link
                    href="/page"
                    className="w-full flex items-center justify-between py-2 px-6 gap-5 border-black border-2 hover:scale-105 hover:bg-white font-semibold font-raleway transition-all duration-300 text-sm"
                  >
                    <span className="uppercase">Learn more</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
            <Image
              src="/home-10.jpg"
              className="object-cover absolute top-0 left-0"
              layout="fill"
            />
            <div className="absolute left-0 flex w-full items-end justify-start bottom-0 py-20 px-16 h-24 glass-bg text-black">
              <div className="flex justify-between flex-row w-full ">
                <div className="font-raleway flex flex-col gap-2 items-start justify-between">
                  <span className="font-bold text-xl capitalize">
                    Damac Tower views
                  </span>
                  <span className="capitalize text-sm">
                    London, United Kingdom
                  </span>
                </div>
                <div>
                  <Link
                    href="/page"
                    className="w-full flex items-center justify-between py-2 px-6 gap-5 border-black border-2 hover:scale-105 hover:bg-white font-semibold font-raleway transition-all duration-300 text-sm"
                  >
                    <span className="uppercase">Learn more</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
            <Image
              src="/home-9.jpg"
              className="object-cover absolute top-0 left-0"
              layout="fill"
            />
            <div className="absolute left-0 flex w-full items-end justify-start bottom-0 py-20 px-16 h-24 glass-bg text-black">
              <div className="flex justify-between flex-row w-full ">
                <div className="font-raleway flex flex-col gap-2 items-start justify-between">
                  <span className="font-bold text-xl capitalize">
                    Damac Tower views
                  </span>
                  <span className="capitalize text-sm">
                    London, United Kingdom
                  </span>
                </div>
                <div>
                  <Link
                    href="/page"
                    className="w-full flex items-center justify-between py-2 px-6 gap-5 border-black border-2 hover:scale-105 hover:bg-white font-semibold font-raleway transition-all duration-300 text-sm"
                  >
                    <span className="uppercase">Learn more</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className="mt-5">
        <Link
          href="/page"
          className="w-full flex items-center justify-between py-3 px-10 gap-10 border-black border-2 hover:scale-105 hover:bg-white font-semibold font-raleway transition-all duration-300"
        >
          <span className="uppercase">Learn more</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
