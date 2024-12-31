"use client";
import CustomInput from "@/Components/FormFields/CustomInput";
import AdminProvider from "@/Provider/AdminProvider";
import React, { useState } from "react";

const AddDriverPage = () => {
  const [driverData, setDriverData] = useState({
    name: "",
    experience: 0,
    safeDriving: 0,
    navigationSkills: 0,
    customerService: 0,
    vehicleMaintenance: 0,
    timeManagement: 0,
    profilePic: null,
  });

  const handleChange = (key, value) => {
    setDriverData({ ...driverData, [key]: value });
   
  };

  const handleProfilePicUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setDriverData({ ...driverData, profilePic: e.target.result });
      reader.readAsDataURL(file);
    }
  };

  const handleCreateDriver = () => {
    console.log("Driver Data:", driverData);
  };

  return (
    <AdminProvider>
      <div className="px-5 xl:px-0">
        <div>
          <div className="relative ">
            <h1 className="text-black font-semibold md:text-4xl text-3xl ml-3 uppercase tracking-wider">
              Add Driver Details
            </h1>
            <div className="absolute -bottom-3 left-0 w-1 h-14 bg-[#FD8D14] rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-4 mt-12 md:mt-0">
            <div className="lg:w-[50%] xl:w-[20%] h-[50%]  flex items-center flex-col ">
              {driverData.profilePic ? (
                <img
                  src={driverData.profilePic}
                  alt="Profile Picture"
                  className="object-cover w-60 h-60  rounded-full"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/400"
                  alt="Profile Picture Placeholder"
                  className="object-cover w-60 h-60  rounded-full"
                />
              )}
              <div className=" mt-4 flex items-center justify-center">
                <label
                  htmlFor="profilePicUpload"
                  className="cursor-pointer text-white bg-[#FD8D14]  px-4 py-2 rounded-lg"
                >
                  Upload Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePicUpload"
                  onChange={handleProfilePicUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex md:flex-row flex-col gap-3 mt-8 ">
              <div className="flex-1">
                <CustomInput placeholder={"Driver Name "} onChange={(e) => handleChange("name", e.target.value)} />
              </div>
              <div className="flex-1">
                <CustomInput placeholder={"Driver Experience "} type="number" onChange={(e) => handleChange("experience", parseInt(e.target.value, 10))} />
              </div>
            </div>
            {/* _______________________________________________ */}
            <div className="flex md:flex-row flex-col items-center my-4 gap-3 ">
              <h1 className="md:text-2xl text-xl font-semibold tracking-wide">
                Skills & Expertise
              </h1>
              <p className="text-sm font-medium text-[#FD8D14]">
                (Skills & Expertise must be in Numbers ){" "}
              </p>
            </div>
            {/* _____________Safe Driving and Navigation Skill_________________ */}
            <div className="flex md:flex-row flex-col gap-3 my-3 ">
              <div className="flex-1">
                <CustomInput placeholder={"Safe Driving"} type="number" onChange={(e) => handleChange("safeDriving", parseInt(e.target.value, 10))} />
              </div>
              <div className="flex-1">
                <CustomInput placeholder={"Navigation Skills"} type="number" onChange={(e) => handleChange("navigationSkills", parseInt(e.target.value, 10))} />
              </div>
              <div className="flex-1">
                <CustomInput placeholder={"Customer Service"} type="number" onChange={(e) => handleChange("customerService", parseInt(e.target.value, 10))} />
              </div>
            </div>
            {/* _____________Safe Driving and Navigation Skill_________________ */}
            <div className="flex md:flex-row flex-col gap-3 ">
              <div className="flex-1">
                <CustomInput placeholder={"Vehicle Maintenance"} type="number" onChange={(e) => handleChange("vehicleMaintenance", parseInt(e.target.value, 10))} />
              </div>
              <div className="flex-1">
                <CustomInput placeholder={"Time Management"} type="number" onChange={(e) => handleChange("timeManagement", parseInt(e.target.value, 10))} />
              </div>
            </div>

            <div className="flex items-center justify-center mt-8">
              <button
                onClick={handleCreateDriver}
                className="uppercase py-2.5 flex items-center gap-2 justify-center tracking-wider rounded-lg text-white text-base 
        bg-[#FD8D14] hover:bg-[#0D274E] transform transition-all duration-300 w-1/2"
              >
                Create Driver
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminProvider>
  );
};

export default AddDriverPage;
