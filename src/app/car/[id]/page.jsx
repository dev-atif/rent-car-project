import Image from "next/image";
import React from "react";
import car from "../../../../public/car.jpg";
const page = () => {
  return (
    <div>
      <div>
        <div className="md:h-[80vh] h-[50vh] relative w-full bg-red-600 -z-10">
          <div className="bg-black/50  inset-0 absolute z-10" />
          <Image src={car} alt="car" fill className="object-cover " />
        </div>
        <div className="-mt-20 z-30">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main content - 7 columns on large screens */}
              <div className="lg:col-span-7">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">
                    Tesla Model S Plaid
                  </h2>
                  <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9]  rounded-lg overflow-hidden">
                    <Image
                      src={car}
                      alt="car"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="object-cover object-center rounded-lg"
                    />
                  </div>
                  <div className="mt-4 text-gray-600">
                    <p>
                      Our commitment to excellence is what keeps customers
                      coming back to us. We provide our cars for charter during
                      festivals, events, parties, business meetings, and regular
                      daily commutes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar - 5 columns on large screens */}
              <div className="lg:col-span-5">
                <div className="bg-white  rounded-t-xl rounded-b-xl shadow-md">
                  <div className="bg-[#0D274E] text-white p-4 rounded-lg ">
                    <h1 className="text-2xl font-semibold tracking-wider uppercase">
                      Vehicle Rates
                    </h1>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="w-1/2 text-center">
                      <p className="font-semibold">Duration</p>
                    </div>
                    <div className="w-1/2 text-center border-l-2 border-gray-200">
                      <p className="font-semibold">Rent in Pkr</p>
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="w-1/2 text-center">
                      <p className="font-semibold">1-15 Days</p>
                    </div>
                    <div className="w-1/2 text-center border-l-2 border-gray-200">
                      <p className="font-semibold">7500</p>
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="w-1/2 text-center">
                      <p className="font-semibold">16-26 Days</p>
                    </div>
                    <div className="w-1/2 text-center border-l-2 border-gray-200">
                      <p className="font-semibold">7000</p>
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="w-1/2 text-center">
                      <p className="font-semibold">25+ Days</p>
                    </div>
                    <div className="w-1/2 text-center border-l-2 border-gray-200">
                      <p className="font-semibold">6500</p>
                    </div>
                  </div>
                </div>
                {/* ----------------Second section ---------------- */}
                <div className="bg-white  mt-8 rounded-t-xl rounded-b-xl shadow-md">
                  <div className="bg-[#0D274E] text-white p-4 rounded-lg ">
                    <h1 className="text-2xl font-semibold tracking-wider uppercase">
                      Vehicle Details
                    </h1>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="w-1/2 text-center">
                      <p className="font-semibold">Name</p>
                    </div>
                    <div className="w-1/2 text-center border-l-2 border-gray-200">
                      <p className="font-semibold line-clamp-1">Honda civic </p>
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="w-1/2 text-center">
                      <p className="font-semibold">Color</p>
                    </div>
                    <div className="w-1/2 text-center border-l-2 border-gray-200">
                      <p className="font-semibold">Black</p>
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="w-1/2 text-center">
                      <p className="font-semibold">Manufacturer</p>
                    </div>
                    <div className="w-1/2 text-center border-l-2 border-gray-200">
                      <p className="font-semibold">Honda</p>
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="w-1/2 text-center">
                      <p className="font-semibold">Model Year</p>
                    </div>
                    <div className="w-1/2 text-center border-l-2 border-gray-200">
                      <p className="font-semibold">2017-18</p>
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="w-1/2 text-center">
                      <p className="font-semibold">Transmission</p>
                    </div>
                    <div className="w-1/2 text-center border-l-2 border-gray-200">
                      <p className="font-semibold">Auto</p>
                    </div>
                  </div>
                  <div className="">
                    <button className="bg-[#FD8D14] font-semibold tracking-wider rounded-lg text-white text-lg w-full py-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
