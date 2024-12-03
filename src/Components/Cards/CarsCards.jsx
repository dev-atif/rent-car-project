import Image from "next/image";
import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
const CarsCards = ({ item }) => {
  return (
    <div className="border border-[#C4C4C4] rounded-xl  hover:shadow-xl transition-all duration-300 hover:border-[#FD8D14] shadow-lg">
      <div>
        <div className="relative h-[350px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[300px]">
          <Image
            src={item.image}
            fill
            alt="Cars"
          />
        </div>
        <div className="p-4">
          <div>
            <h1 className="lg:text-2xl text-xl   text-[#272727] h-16 line-clamp-2 font-bold">
              {item.title}
            </h1>
          </div>
          <div className="py-2">
            <h1 className="lg:text-2xl text-xl font-bold text-[#FD8D14]">
              ${item.price_per_hour}{" "}
              <span className="text-gray-500 font-medium text-lg">/ Hours</span>
            </h1>
          </div>
          <div className="flex items-center gap-10">
            <section className="flex items-center justify-between w-full">

              <article className="flex items-center gap-2 ">
                <span className="lg:text-2xl text-xl">
                  <FaCarAlt color="#0D274E" />
                </span>
                <h1 className="text-gray-500 lg:text-xl text-base font-semibold">
                  {item.transmission}
                </h1>
              </article>

              <span className="h-10 w-[1px] bg-gray-300"></span>

              <article className="flex items-center gap-2 ">
                <span className="lg:text-2xl text-xl">
                  <MdLocalGasStation color="#0D274E" />
                </span>
                <h1 className="text-gray-500 lg:text-xl text-base font-semibold">
                  {item.fuel_type}
                </h1>
              </article>
            </section>
          </div>
          <div className="mt-5">
            <button className="transition-all uppercase tracking-wider font-semibold w-full  duration-300 bg-[#FD8D14] hover:text-white hover:bg-[#0D274E] text-white px-5 py-2 rounded-md">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsCards;
