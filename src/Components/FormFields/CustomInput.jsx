import React from "react";

const CustomInput = ({ onChange, placeholder }) => {
  return (
    <div className="bg-[#FD8D14] rounded-b-xl rounded-t-2xl pb-1">
      <div>
        <input
          className="bg-[#F9F6EE] focus:outline-none w-full py-2 text-lg rounded-xl px-3"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default CustomInput;
