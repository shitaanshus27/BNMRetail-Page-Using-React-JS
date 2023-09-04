import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="md:max-w-[50%] flex flex-col justify-center max-h-screen">
        <div className="text-white p-6 font-bold md:text-6xl text-4xl">
          <TypeAnimation
            sequence={[
              "Trusted and Leading brand in personal and baby care since 2013.",
              2000,
              "We believe that goodness isn’t a superpower or a special gift.",
              2000,
            ]}
            speed={10}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>
        <div className="p-5">
          <Button buttontxt="Know More About Us" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
