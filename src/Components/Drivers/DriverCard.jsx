import React from "react";
import Image from "next/image";

function DriverCard({ name, exp, img }) {
  return (
    <div className="flex flex-col items-center border  border-[#C4C4C4] rounded-xl  hover:shadow-xl transition-all duration-300 hover:border-[#FD8D14]">
      <Image src={img} alt="Photo" />
      <p className="text-lg font-semibold p-2">{name}</p>
      <p className="inline-block text-base font-semibold px-4">
        Professional Driver :{" "}
        <span className="font-normal">{exp} experience</span>
      </p>
      <button className="bg-[#FD8D14] text-white p-2 transition-all  duration-300 uppercase tracking-wider font-semibold my-3 rounded-lg w-[90%] hover:bg-[#0D274E]">
        Contact Now
      </button>
    </div>
  );
}

export default DriverCard;
