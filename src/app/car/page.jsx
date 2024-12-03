import React from "react";
import CarsCards from "@/Components/Cards/CarsCards";
import car1 from "/public/car1.jpeg";
import car2 from "/public/car2.jpeg";
import car3 from "/public/car3.jpeg";
import car4 from "/public/car4.jpeg";
import car5 from "/public/car.jpg";
import Image from "next/image";
import Link from "next/link";

const carData = [
  {
    id: 1,
    title: "Mercedes-Benz AMG GT63 S E Performance 4-Door Coupe ",
    price_per_hour: 26.0,
    currency: "USD",
    rate_type: "Hours",
    seats: "4 seats",
    transmission: "AT / MT",
    fuel_type: "Petrol",
    image: car1,
  },

  {
    id: 2,
    title: "BMW M5 Competition",
    price_per_hour: 30.0,
    currency: "USD",
    rate_type: "Hours",
    seats: "5 seats",
    transmission: "Automatic",
    fuel_type: "Petrol",
    image: car2,
  },
  {
    id: 3,
    title: "Audi RS7 Sportback",
    price_per_hour: 28.5,
    currency: "USD",
    rate_type: "Hours",
    seats: "4 seats",
    transmission: "Automatic",
    fuel_type: "Hybrid",
    image: car3,
  },
  {
    id: 4,
    title: "Porsche Taycan 4S",
    price_per_hour: 35.0,
    currency: "USD",
    rate_type: "Hours",
    seats: "4 seats",
    transmission: "Automatic",
    fuel_type: "Electric",
    image: car4,
  },
  {
    id: 5,
    title: "Lamborghini Huracan EVO",
    price_per_hour: 45.0,
    currency: "USD",
    rate_type: "Hours",
    seats: "2 seats",
    transmission: "Automatic",
    fuel_type: "Petrol",
    image: car5,
  },
];

function page() {
  return (
    <section>
      <div className="md:h-[80vh] h-[50vh] relative w-full bg-red-600 -z-10">
        <div className="bg-black/50  inset-0 absolute z-10" />
        <Image src={car5} alt="car" fill className="object-cover " />
      </div>

      <h1 className="text-center my-14 font-bold text-4xl">
        Available Vehicles
      </h1>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-20">
        {carData.map((car, idx) => (
          <Link key={idx} href={`/car/${car.id}`}>
            <CarsCards key={car.title} item={car} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default page;
