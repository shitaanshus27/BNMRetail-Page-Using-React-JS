import React from "react";
import logo from "../assets/aboutus.png";
import { FaMedapps, FaLeaf } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="w-11/12 max-w-[1168px] md:p-10 mx-auto flex md:flex-row flex-col-reverse gap-20"
    >
      <div
        data-aos="fade-up"
        className="rounded-md md:max-w-[50%] md:max-h-[50%] p-6"
      >
        <img
          src={logo}
          alt="About-us-pic"
          className="w-[100%] rounded-xl"
        ></img>
      </div>
      <div
        data-aos="fade-up"
        className="md:max-w-[40%] flex flex-col justify-center gap-10 p-6 text-sm text-gray-600 tracking-wider"
      >
        <div className="flex flex-col gap-2">
          <h1 className=" text-gray-700 text-4xl font-extrabold">About Us</h1>
          <div className="w-[25%] h-2 bg-yellow-300"></div>
        </div>

        <p>
          Baby & Mom Retail Private Limited is a global, diversified
          organization of 7 major brands. We deliver end-to-end solutions in
          Baby care, Personal care, Homecare and Pet care. Developing iconic
          landmarks since 2013, having dedicated workforce of over 250+ people
          and we listed our brand in over 6 countries & focused to capture the
          global market by 2025.
        </p>
        <p>
          The man behind the origination of Baby & Mom is{" "}
          <span className="font-bold">Mr. Shish Kharesia</span>, the founder of
          Baby & Mom Retail Pvt. Ltd. He is determined to bring to people the
          promise of best natural and chemical free products. We believe that
          goodness isn’t a superpower or a special gift, it’s inside all of us
          and it shows in the little choices we make.
        </p>
        <div className="flex gap-4 w-full">
          <div className=" bg-slate-300 w-[100%]  rounded-lg flex flx items-center p-4 gap-4">
            <div>
              <FaMedapps className=" text-white bg-green-800 rounded-md w-10 h-10 p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-black text-sm">Unique & Safe</h1>
              <p className="text-sm">We Combine Nature With Science</p>
            </div>
          </div>
          <div className=" bg-slate-300 w-[100%]  rounded-lg flex items-center p-4 gap-4">
            <div>
              <FaLeaf className=" text-white bg-green-800 rounded-md w-10 h-10 p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-black text-sm">Pocket Friendly</h1>
              <p className="text-sm">Best Sustainable Family Care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
