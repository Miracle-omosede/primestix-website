import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedImages = () => {
  return (
    <div className="bg-black">
      <div>
      <div className="max-w-[1100px] mx-auto w-full flex flex-col items-center justify-center py-5 px-5 three">
            <h1 className="capitalize heading text-white font-raleway">
              Our communities - luxury homes for sale
            </h1>
    
            <div className="grid grid-cols-12 gap-6 w-full justify-center items-center">
            <div className="col-span-12 flex flex-col h-full w-full justify-center items-center">
                <div className="w-full relative py-5 h-full">
                  <Image
                    src="/home-1.jpg"
                    className="relative object-cover h-[400px]"
                    width={1200}
                    height={300}
                  />
                  <div className="home__overlay2"></div>

                  <div className="w-full absolute bottom-0 font-opensans text-white flex flex-col">
                  <div className='px-5'>
                  <h1 className="text-3xl font-[600]">Damic Hills.</h1>
                  {/* sub-heading */}
                  <h2 className="font-[300] tracking-wider">
                    Dubailand, Dubai, United Arab Emirates
                  </h2>
                  <p className="text-sm md:w-2/5 w-full font-raleway py-2 font-[500]">
                    An established and prestigious international golf community in
                    Dubailand comprising luxury villas, apartments and a hotel
                  </p>
                  </div>
                  {/* <button>
                           <span>learn more</span>
                           <span></span>
                        </button> */}
                  <div className="divider w-full bg-[#AD8F31] h-[1px]"></div>
                  <div className="w-full font-raleway px-5">
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
              <div className="col-span-12 md:col-span-6">
                <div className="w-full relative py-5 h-full">
                  <Image
                    src="/home-3.jpg"
                    className="relative object-cover h-[400px]"
                    width={1200}
                    height={300}
                  />
                  <div className="home__overlay2"></div>
                  <div className="w-full absolute bottom-0 font-opensans text-white flex flex-col">
                  <div className='px-5'>
                  <h1 className="text-3xl font-[600]">Damic Hills.</h1>
                  {/* sub-heading */}
                  <h2 className="font-[300] tracking-wider">
                    Dubailand, Dubai, United Arab Emirates
                  </h2>
                  <p className="text-sm w-full font-raleway py-2 font-[500]">
                    An established and prestigious international golf community in
                    Dubailand comprising luxury villas, apartments and a hotel
                  </p>
                  </div>
                  {/* <button>
                           <span>learn more</span>
                           <span></span>
                        </button> */}
                  <div className="divider w-full bg-[#AD8F31] h-[1px]"></div>
                  <div className="w-full font-raleway px-5">
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
              <div className="col-span-12 md:col-span-6">
                <div className="w-full relative py-5 h-full">
                  <Image
                    src="/home-2.jpg"
                    className="relative object-cover h-[400px]"
                    width={1200}
                    height={300}
                  />
                  <div className="home__overlay2"></div>
                  <div className="w-full absolute bottom-0 font-opensans text-white flex flex-col">
                  <div className='px-5'>
                  <h1 className="text-3xl font-[600]">Damic Hills.</h1>
                  {/* sub-heading */}
                  <h2 className="font-[300] tracking-wider">
                    Dubailand, Dubai, United Arab Emirates
                  </h2>
                  <p className="text-sm w-full font-raleway py-2 font-[500]">
                    An established and prestigious international golf community in
                    Dubailand comprising luxury villas, apartments and a hotel
                  </p>
                  </div>
                  {/* <button>
                           <span>learn more</span>
                           <span></span>
                        </button> */}
                  <div className="divider w-full bg-[#AD8F31] h-[1px]"></div>
                  <div className="w-full font-raleway px-5">
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
      </div>
    </div>
  )
}

export default FeaturedImages