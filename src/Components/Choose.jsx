import React from "react";
import { FaSuitcase } from "react-icons/fa6";
const Choose = (props) => {
  return (
    <div id={props.id} className=" bg-green-100">
      <div className="w-11/12 max-w-[1168px] md:p-10 pt-5 pb-5 mx-auto">
        <div
          className="flex justify-center items-center flex-col gap-4 w-[90%] mx-auto"
          data-aos="fade-up"
        >
          <h6 className="font-bold text-gray-400">ANSWERS TO YOUR WHY</h6>
          <h1 className="text-gray-700 md:text-4xl text-xl font-extrabold">
            Amazing Reasons To Choose Us
          </h1>
          <div className="max-w-[80%] flex flex-col justify-center gap-10 md:p-6 pb-4 text-sm text-gray-600 tracking-wider">
            <p>
              From finding the right natural ingredients to developing, testing
              and finally demonstrating how to use the product correctly, we are
              here to make sure that your baby and you deserve the best.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 transition ease-in-out duration-200">
          <div className="group md:max-w-[30%] bg-white rounded-lg p-6 hover:bg-gray-700">
            <div className="flex w-[full] justify-between">
              <div className="md:w-[20%] w-[15%] md:h-[20%] h-[15%] rounded-full group-hover:bg-white">
                <FaSuitcase className="w-full h-full p-2" />
              </div>
              <div className="text-[#317167] text-5xl font-bold opacity-20 group-hover:text-gray-500">
                01
              </div>
            </div>
            <h1 className="text-gray-700 text-xl font-extrabold group-hover:text-white">
              Sustainable Products
            </h1>
            <p className=" group-hover:text-white">
              All our products are composed of natural active ingredients and
              essential oils. All our products have been clinically tested to
              ensure your safety!
            </p>
          </div>

          <div className="group md:max-w-[30%] bg-white rounded-lg p-6 hover:bg-gray-700">
            <div className="flex w-[full] justify-between">
              <div className="md:w-[20%] w-[15%] md:h-[20%] h-[15%] rounded-full group-hover:bg-white">
                <FaSuitcase className="w-full h-full p-2" />
              </div>
              <div className="text-[#317167] text-5xl font-bold opacity-20 group-hover:text-gray-500">
                02
              </div>
            </div>
            <h1 className="text-gray-700 text-xl font-extrabold group-hover:text-white">
              Environment Friendly
            </h1>
            <p className=" group-hover:text-white">
              We create our products for the betterment of society and
              environment. Your happiness and satisfaction is what we are
              passionate about.
            </p>
          </div>

          <div className="group md:max-w-[30%] bg-white rounded-lg p-6 hover:bg-gray-700">
            <div className="flex w-[full] justify-between">
              <div className="md:w-[20%] w-[15%] md:h-[20%] h-[15%] rounded-full group-hover:bg-white">
                <FaSuitcase className="w-full h-full p-2" />
              </div>
              <div className="text-[#317167] text-5xl font-bold opacity-20 group-hover:text-gray-500">
                03
              </div>
            </div>
            <h1 className="text-gray-700 text-xl font-extrabold group-hover:text-white">
              Cost Effective
            </h1>
            <p className=" group-hover:text-white">
              Our mission is to bring you the best of nature through our purest
              and most nurturing products at most affordable and pocket friendly
              price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
