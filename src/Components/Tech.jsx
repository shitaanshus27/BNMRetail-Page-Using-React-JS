import React from "react";
import logo from "../assets/Tech.png";

const Tech = () => {
  return (
    <div className=" bg-green-100">
      <div className="w-11/12 max-w-[1168px] p-6 mx-auto flex md:flex-row flex-col gap-20 relative">
        <div
          data-aos="fade-up"
          className="md:max-w-[40%]  flex flex-col gap-6 justify-center md:relative"
        >
          <div>
            <h1 className=" text-gray-700 text-4xl font-extrabold">
              We Believe That You Deserve The Best
            </h1>
            <div className="w-[25%] h-2 bg-yellow-300"></div>
          </div>
          <div>
            <div className="text-white bg-blue-600 w-[30%] text-lg flex justify-center items-center rounded-md p-2">
              Our Mission
            </div>
            <div className="text-white bg-blue-600 md:w-[40%] md:h-20 md:text-sm text-lg flex justify-center items-center rounded-md p-4 absolute md:-right-24 md:top-32 right-24 bottom-2 z-10">
              <span className="md:text-4xl text-2xl">10+</span>
              Years Experience
            </div>
            <div
              className=" flex
            flex-col
            justify-center
            gap-10
            p-6
            text-sm
            text-gray-600
            tracking-wider bg-white rounded-lg"
            >
              <p>
                Our central goal is to present to you the best of natural
                products through our most perfect and most supporting
                ingredients that are made with no toxins or destructive
                synthetic compounds.
              </p>
              <p>
                We accept that each individual ought to merit the best. Every
                product is made out of regular dynamic fixings and fundamental
                oils, and have been clinically tested to guarantee your
                security! There are no counterfeit flavors and added substances.
                The wellbeing of children is our main concern. As an excellent
                Baby care brand, we give the best products, yet we additionally
                put forth a valiant effort to keep costs serious.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="rounded-md md:max-w-[50%] max-w-[100%] md:max-h-[50%]"
        >
          <img
            src={logo}
            alt="About-us-pic"
            className="w-[100%] rounded-xl"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Tech;
