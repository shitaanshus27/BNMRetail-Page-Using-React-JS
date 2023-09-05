import React from "react";
import Button from "./Button";
import logo from "../assets/shish.png";
import logo1 from "../assets/path.png";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const MD = () => {
  return (
    <div>
      <div className="flex w-11/12 max-w-[1168px] p-10 mx-auto gap-20 md:flex-row flex-col">
        <div
          className="md:max-w-[40%] md:p-6 flex flex-col justify-center text-sm text-gray-600 tracking-wider gap-10 "
          data-aos="fade-up"
        >
          <div>
            <h1 className="text-gray-700 text-4xl font-extrabold">
              From MD’s Pen
            </h1>
            <div className="w-[25%] h-2 bg-yellow-300"></div>
          </div>

          <div className="rounded-lg shadow-md p-4 relative">
            <BiSolidQuoteLeft />
            <div className="p-2">
              I have seen many brands come and go. The hype and disappointment
              caused by the arrival and subsequent departure of yet another
              brand made me consider what it took to create a unique, fun,
              functional and lasting product range that is also ethical,
              certified organic and natural and affordable for families. So I
              made it my mission and, finally after years of research, Baby &
              Mom was born.
            </div>
            <BiSolidQuoteRight className="absolute right-6 bottom-4" />
          </div>
          <Button buttontxt="Oue Other Brands" />
        </div>
        <div
          data-aos="fade-up"
          className="rounded-md md:max-w-[50%] md:max-h-[50%] md:p-6"
        >
          <img
            src={logo}
            alt="About-us-pic"
            className="w-[100%] rounded-xl"
          ></img>
        </div>
      </div>
      <div
        className="w-11/12 max-w-[1168px] md:p-10 pb-2 mx-auto"
        data-aos="fade-up"
      >
        <img
          src={logo1}
          alt="About-us-pic"
          className="w-[100%] rounded-xl"
        ></img>
      </div>
    </div>
  );
};

export default MD;
