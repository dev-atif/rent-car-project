import React from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { MdFreeCancellation } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";
import Image from "next/image";
import support from "../../../public/supportcar.png";
const SupportSection = () => {
  return (
    <div className="bg-[#0D274E] relative w-full py-10 mt-20">
      <div className="flex flex-col md:flex-row  h-full max-w-7xl mx-auto">
        <div className="p-6 w-full">
          <div>
            <h1 className="md:text-5xl text-4xl  text-center font-semibold uppercase tracking-wider text-white">
              Why Choose Us
            </h1>
          </div>
          <div className="md:my-14 my-10 md:w-7/12 mx-auto">
            <p className="text-white text-sm  md:text-base  text-center">
              We offer a wide selection of well-maintained vehicles at
              affordable, transparent prices, ensuring a safe and hassle-free
              rental experience. With flexible rental options and 24/7 customer
              support, we make your journey easy and convenient. Trust us to
              provide the best car rental service for your needs!
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-16 ">
            <div className=" flex flex-col gap-4 items-center justify-center ">
              <div className="flex justify-center rounded-full items-center bg-[#FD8D14] w-fit p-3">
                <span className="text-7xl">
                  <TbMessageChatbot color="white" />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold uppercase text-center tracking-wider text-white">
                  24/7 Support
                </h1>
                <p className="text-white/60 w-[25ch] text-center">
                  Always here to assist you, anytime, day or night.
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-4 items-center justify-center ">
              <div className="flex justify-center rounded-full items-center bg-white w-fit p-3">
                <span className="text-7xl">
                  <IoWalletOutline color="#0D274E" />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold uppercase text-center tracking-wider text-white">
                  Affordable Price
                </h1>
                <p className="text-white/60 w-[30ch] text-center">
                  Competitive rates with no hidden fees for a stress-free
                  experience.
                </p>
              </div>
            </div>
            {/* ------------------------------- */}
            <div className=" flex flex-col gap-4 items-center justify-center ">
              <div className="flex justify-center rounded-full items-center bg-[#FD8D14] w-fit p-3">
                <span className="text-7xl">
                  <MdFreeCancellation color="white" />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold uppercase text-center tracking-wider text-white">
                  Easy To Cancel
                </h1>
                <p className="text-white/60 w-[30ch] text-center">
                  Flexible cancellation policy for your convenience and peace of
                  mind.
                </p>
              </div>
            </div>
            {/* --------------------------------------- */}
            <div className=" flex flex-col gap-4 items-center justify-center ">
              <div className="flex justify-center rounded-full items-center bg-white w-fit p-3">
                <span className="text-7xl">
                  <GiClockwork color="#0D274E" />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold uppercase text-center tracking-wider text-white">
                  Reserve Anytime
                </h1>
                <p className="text-white/60 w-[32ch]  text-center">
                  Effortless booking at your convenience, anytime and anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
