"use client";
import HeaderNavbar from "@/Components/Admin/Header/HeaderNavbar";
import CustomInput from "@/Components/FormFields/CustomInput";
import Dropdown from "@/Components/FormFields/Dropdown";
import AdminProvider from "@/Provider/AdminProvider";
import React, { useState } from "react";
const options = [
  { value: "ford", label: "Ford" },
  { value: "chevrolet", label: "Chevrolet" },
  { value: "toyota", label: "Toyota" },
  { value: "honda", label: "Honda" },
  { value: "nissan", label: "Nissan" },
];
const TransmittionType = [
  {
    value: "AT",
    label: "Atomatic",
  },
  {
    value: "MT",
    label: "Manual",
  },
  {
    value: "AT/MT",
    label: "Atomatic & Manual",
  },
];
const Cartype = [
  {
    value: "Petrol",
    label: "Petrol",
  },
  {
    value: "Electric",
    label: "Electric",
  },
  {
    value: "Hybrid",
    label: "Hybrid",
  },
];

const index = () => {
  const [carDetails, setCarDetails] = useState({
    carName: "",
    price: "",
    brand: null,
    transmission: null,
    type: null,
    image: null,
  }); // State to store all car details

  const handleChange = (key, value) => {
    setCarDetails({ ...carDetails, [key]: value }); // Update state with the selected option
    console.log("Selected option:", value.label); // Log the actual value (not setSelectedOption)
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) =>
        setCarDetails({ ...carDetails, image: e.target.result });
      reader.readAsDataURL(file);
    }
  };

  console.log("Car Details:", carDetails); // Log the entire carDetails state

  return (
    <AdminProvider>
      <div>
        <div>
          <div className="relative">
            <h1 className="text-black font-semibold text-4xl ml-3 uppercase tracking-wider">
              Add Cars Details
            </h1>
            <div className="absolute -bottom-3 left-0 w-1 h-14 bg-[#FD8D14] rounded-full"></div>
          </div>
        </div>
        <div>
          {/* ---------add Cars Input fields------------------- */}

          <div className="grid grid-cols-2  gap-20  mt-14 ">
            <div className="w-full h-full">
              <div className="border rounded-xl h-full">
                <div className="relative h-96">
                  {carDetails.image ? (
                    <img
                      src={carDetails.image}
                      alt="Car Image"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Car Image"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <label
                      htmlFor="imageUpload"
                      className="cursor-pointer text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg"
                    >
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id="imageUpload"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full">
                <CustomInput
                  placeholder="Enter Car Name "
                  onChange={(e) => handleChange("carName", e.target.value)}
                />
              </div>
              <div className="w-full ">
                <CustomInput
                  placeholder="Enter Price "
                  onChange={(e) => handleChange("price", e.target.value)}
                />
              </div>

              <div className="w-full">
                <Dropdown
                  placeholder={"Select Model"}
                  data={options}
                  handleChange={(value) => handleChange("brand", value)}
                  value={carDetails.brand}
                />
              </div>
              <div className="w-full ">
                <Dropdown
                  placeholder={"Select Transmission"}
                  data={TransmittionType}
                  handleChange={(value) => handleChange("transmission", value)}
                  value={carDetails.transmission}
                />
              </div>

              <div className="w-full">
                <Dropdown
                  placeholder={"slect Engine type"}
                  data={Cartype}
                  handleChange={(value) => handleChange("type", value)}
                  value={carDetails.type}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminProvider>
  );
};

export default index;
