import React from "react";

const Button = (props) => {
  return (
    <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-yellow-600 transition duration-300 ease-out border-2 border-yellow-300 rounded-full shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-yellow-300 group-hover:translate-x-0 ease">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-yellow-300 transition-all duration-500 transform group-hover:translate-x-full ease ">
        {props.buttontxt}
      </span>
      <span className="relative invisible">{props.buttontxt}</span>
    </div>
  );
};

export default Button;
