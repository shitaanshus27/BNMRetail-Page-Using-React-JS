import React from "react";

const Sell = () => {
  return (
    <div className="bg-yellow-300 flex justify-center items-center p-2">
      <p className="mr-2 text-white md:text-lg text-sm font-bold">
        Get <span className="text-sm text-green-700">15%off</span> On
        Independence Day
      </p>
      <div className="animate-bounce bg-green-600 rounded-md p-1 text-white">
        New
      </div>
      <a href="https://newishkart.com/" className="pl-10">
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-sm">
          Shop Now
        </button>
      </a>
    </div>
  );
};

export default Sell;
