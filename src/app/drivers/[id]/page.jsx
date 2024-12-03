"use client";
import React from "react";
import Image from "next/image";
import profile from "../../../../public/profile.jpg";
import driver from "../../../../public/driver.jpg";
import ProgressBar from "@ramonak/react-progress-bar";

const driverSkills = [
  {
    skill: "Safe Driving",
    percentage: 95,
  },
  {
    skill: "Navigation Skills",
    percentage: 90,
  },
  {
    skill: "Customer Service",
    percentage: 85,
  },
  {
    skill: "Vehicle Maintenance",
    percentage: 80,
  },
  {
    skill: "Time Management",
    percentage: 92,
  },
];

const page = () => {
  return (
    <div>
      <div className="xl:h-[80vh]  md:h-[60vh] h-[45vh] relative w-full  -z-10 ">
        <div className="bg-black/60  inset-0 absolute z-10 flex flex-col md:gap-4  items-center justify-center">
          <h1 className="text-white max-w-[45ch] !leading-snug   md:tracking-wider lg:text-5xl md:text-4xl text-2xl text-center font-semibold ">
            Our staff of experienced drivers is committed to making your trip
            fun, safe and dependable.
          </h1>
        </div>
        <Image src={driver} alt="driver" fill className="object-cover " />
      </div>
      <div className="max-w-7xl mx-auto px-5 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div className="relative md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full ">
              <Image
                src={profile}
                alt="driver profile"
                fill
                className="object-cover  rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4">John Smith</h2>
              <p className="text-gray-600 mb-4">
                Professional Driver -{" "}
                <span className="font-semibold">5 Years Experience</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                A skilled and courteous driver with an excellent safety record.
                Specializes in both city navigation and long-distance trips.
                Committed to providing comfortable and reliable transportation
                services.
              </p>
            </div>
            <div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  Skills & Expertise
                </h3>
                <div className="space-y-4">
                  {driverSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{skill.skill}</span>
                        <span className="text-gray-600">
                          {skill.percentage}%
                        </span>
                      </div>
                      <ProgressBar
                        completed={skill.percentage}
                        bgColor="#FD8D14"
                        height="15px"
                        isLabelVisible={false}
                        animateOnRender={true}
                      />
                    </div>
                  ))}
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
