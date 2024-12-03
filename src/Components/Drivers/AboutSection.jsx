import React from "react";
import car from "../../../public/about1.jpg";
import Image from "next/image";
import DriverCard from "./DriverCard";
import man from "/public/aboutman.jpg";
import Link from "next/link";

const drivers = [
  {
    id: 1,
    name: "Ahmad Hassan",
    exp: "5 years",
    img: man,
  },
  {
    id: 2,
    name: "Sohaib",
    exp: "3 years",
    img: man,
  },
  {
    id: 3,
    name: "Muteeb",
    exp: "2 years",
    img: man,
  },
];

const AboutSection = () => {
  return (
    <section>
      <div className="xl:h-[80vh]  md:h-[60vh] h-[45vh] relative w-full  z-10 ">
        <div className="bg-black/60  inset-0 absolute z-10 flex flex-col md:gap-4  items-center justify-center">
          <h1 className="text-white md:tracking-wider lg:text-5xl md:text-4xl text-2xl font-semibold">
            Travel With The Best in Town
          </h1>
          <h1 className="text-white md:tracking-wider lg:text-5xl md:text-4xl text-2xl text-center font-semibold ">
            Dive in and discover what drives us!
          </h1>
        </div>
        <Image src={car} alt="car" fill className="object-cover " />
      </div>

      <h1 className="text-center my-14 font-bold text-4xl">Our Drivers</h1>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-20">
        {drivers.map((driver, idx) => (
          <Link key={idx} href={`/drivers/${driver.id}`}>
            <DriverCard name={driver.name} exp={driver.exp} img={driver.img} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
