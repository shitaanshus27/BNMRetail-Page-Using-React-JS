import React from "react";
import "../Components/Brands.css";
import logo from "../assets/asset 6.png";

const Brands = () => {
  return (
    <div className="bg-green-100 ">
      <div className="w-11/12 max-w-[1168px] md:p-10 mx-auto flex md:flex-row  gap-8 justify-between items-center">
        <div className="max-w-[50%]">
          <div
            className="text-[#00204a] md:text-6xl text-4xl font-semibold"
            data-aos="fade-up"
          >
            Our Brands
          </div>
          <div className="w-[35%] h-2 bg-yellow-300"></div>
        </div>
        <div className="max-w-[50%]">
          <img src={logo} className="spin" data-aos="fade-up"></img>
        </div>
      </div>
    </div>
  );
};

export default Brands;
