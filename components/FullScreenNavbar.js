"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// mobile view
function MobileView({ open, setOpen }) {
  return (
    <div
      className={`z-[9999] absolute top-0 left-0 w-screen h-[70vh] bg-white transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter font-raleway`}
    >
      <div className="flex flex-col justify-center  items-center">
        <div className="grid grid-cols-12">
            <div className="col-span-6"></div>
            <div className="col-span-6 w-full h-full">
            </div>
        </div>
      </div>
    </div>
  );
}

const FullScreenNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <MobileView open={open} setOpen={setOpen} />
      <div className="w-full max-w-[1100px] flex justify-between items-center mx-auto py-5 font-raleway">
        <div className="flex items-center justify-center gap-4">
          <div
            className="group z-[9999] relative w-6 h-4  cursor-pointer flex-col justify-between items-center flex"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`h-[1px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-[1px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "hidden w-0" : "w-full"
              }`}
            />
            <span
              className={`h-[1px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
          <Link href="/" className="uppercase font-[500]">
            LOGO
          </Link>
        </div>

        <div className="relative">
          <div class="border rounded overflow-hidden flex">
            <input type="text" class="px-4 py-2" placeholder="Search..." />
            <button class="flex items-center justify-center px-4 border-l">
              <svg
                class="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="">
            <ul className="flex items-center justify-center gap-4">
              <li className="flex items-center justify-center">
                <Link href="home" className="flex items-center">
                  <i class="ri-calendar-2-line"></i>
                  &nbsp;
                  <span className="uppercase font-[500]">schedule a call</span>
                </Link>
              </li>

              <li className="items-center flex justify-center">
                <span className="divider text-xs">|</span>
              </li>
              <li>
                <Link href="home" className="flex items-center">
                  <i class="ri-mail-line"></i>
                  &nbsp;
                  <span className="uppercase font-[500]">Enquire</span>
                </Link>
              </li>

              <li className="items-center flex justify-center">
                <span className="divider text-xs">|</span>
              </li>

              <li>
                <Link
                  href="home"
                  className="flex items-center hover:text-red-500"
                >
                  <span className="">
                    <i class="ri-translate-2"></i>
                  </span>
                  <span className="">
                    <i class="ri-arrow-drop-down-fill"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNavbar;
