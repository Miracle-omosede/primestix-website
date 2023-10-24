"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="py-32 max-w-[600px] mx-auto w-full overflow-hidden flex flex-col justify-center leading-7 items-center gap-3 two alt-two">
        <h1 className="primary-heading text-center capitalize font-[600] leading-8">
          The premier luxury
          <span className="leading-3">property developer in Dubai</span>
        </h1>
        <h2 className="text-center font- md:text-xl text-sm leading-6 font-raleway">
          DAMAC Properties is part of DAMAC Group that has been shaping the
          Middle East's luxury real estate market since 1982, delivering iconic
          residential, commercial and leisure properties for sale across the
          region and beyond.
        </h2>
      </div>

      <div className="max-w-[1100px] mx-auto w-full flex flex-col items-center justify-center py-5 three">
        <h1 className="capitalize heading font-raleway">
          Our communities - luxury homes for sale
        </h1>

        <div className="grid grid-cols-12 gap-6 w-full justify-center items-center">
          <div className="col-span-12 flex flex-col w-full h-full items-center justify-center">
            <div className="w-full py-5 h-full">
              <Image
                src="/home-5.jpg"
                className="relative object-cover h-[400px]"
                width={1200}
                height={300}
              />
              <div className="home__overlay2"></div>
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-2xl font-[600]">Damic Lagoons.</h1>
              {/* sub-heading */}
              <h2 className="font-[300] tracking-wider">
                Dubailand, Dubai, United Arab Emirates
              </h2>
              <p className="text-sm font-raleway py-2 font-[500]">
                A new master community inspired by wonders of the Mediterranean
              </p>
              {/* <button>
                       <span>learn more</span>
                       <span></span>
                    </button> */}
              <div className="divider w-full bg-black h-[1px]"></div>
              <div className="w-full">
                <Link
                  href="/page"
                  className="w-full flex items-center justify-between py-3"
                >
                  <span className="uppercase font-raleway">Learn more</span>
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
          <div className="col-span-12 md:col-span-6">
            <div className="w-full relative py-5 h-full">
              <Image
                src="/home-3.jpg"
                className="relative object-cover h-[400px]"
                width={1200}
                height={300}
              />
              <div className="home__overlay2"></div>
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-2xl font-[600]">Damic Hills.</h1>
              {/* sub-heading */}
              <h2 className="font-[300] tracking-wider">
                Dubailand, Dubai, United Arab Emirates
              </h2>
              <p className="text-sm font-raleway py-2 font-[500]">
                An established and prestigious international golf community in
                Dubailand comprising luxury villas, apartments and a hotel
              </p>
              {/* <button>
                       <span>learn more</span>
                       <span></span>
                    </button> */}
              <div className="divider w-full bg-black h-[1px]"></div>
              <div className="w-full">
                <Link
                  href="/page"
                  className="w-full flex items-center justify-between py-3"
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
          <div className="col-span-12 md:col-span-6">
            <div className="w-full py-5 h-full">
              <Image
                src="/home-2.jpg"
                className="relative object-cover h-[400px]"
                width={1200}
                height={300}
              />
              <div className="home__overlay2"></div>
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-2xl font-[600]">Damic Hills 2.</h1>
              {/* sub-heading */}
              <h2 className="font-[300] tracking-wider">
                Dubailand, Dubai, United Arab Emirates
              </h2>

              <p className="text-sm font-raleway py-2 font-[500]">
                A unique master community with luxury homes surrounded by water
                features, sports amenities and leisure experiences
              </p>
              {/* <button>
                       <span>learn more</span>
                       <span></span>
                    </button> */}
              <div className="divider w-full bg-black h-[1px]"></div>
              <div className="w-full">
                <Link
                  href="/page"
                  className="w-full flex items-center justify-between py-3"
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
      </div>
    </div>
  );
};

export default Featured;
