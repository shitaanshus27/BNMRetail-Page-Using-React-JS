import React from "react";
const ContactUs = () => {
  return (
    <div className="flex md:flex-row flex-col gap-6 justify-between items-center">
      <div className="md:max-w-[25%] flex flex-col gap-4" data-aos="fade-up">
        <h1 className="text-white text-4xl font-bold">
          Looking To Join Baby & Mom Team?
        </h1>
        <div className="w-[25%] h-2 bg-yellow-300"></div>
        <p className="text-white text-lg">
          Fill out the form with all your details including your resume. One of
          your team member will get back to you as soon as possible.
        </p>
      </div>
      <form
        className="max-w-[70%] overflow-hidden bg-white rounded-2xl p-6  opacity-70 "
        data-aos="fade-up"
      >
        <div className="flex">
          <div>
            <label
              htmlFor="firstName"
              className="font-semibold text-gray-500 text-sm"
            >
              First Name<sup className=" text-red-700 ml-1">*</sup>
            </label>
            <br></br>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              required
              className="max-w-[90%] border-2 rounded-md p-3 mt-2"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="font-semibold text-sm  text-gray-500"
            >
              Last Name<sup className=" text-red-700 ml-1">*</sup>
            </label>
            <br></br>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              className="max-w-[90%] border-2 rounded-md p-3 mt-2"
              required
            />
          </div>
        </div>

        <br></br>
        <label htmlFor="email" className="font-semibold text-sm  text-gray-500">
          Email Address<sup className=" text-red-700 ml-1">*</sup>
        </label>
        <br></br>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="abc@xyz.com"
          className="w-[100%] border-2 rounded-md p-3 mt-2"
          required
        />

        <br></br>
        <label
          htmlFor="Phone"
          className="font-semibold text-sm  text-gray-500 "
        >
          Mobile Number<sup className=" text-red-700 ml-1">*</sup>
        </label>
        <br></br>
        <input
          type="text"
          name="Phone"
          id="Phone"
          placeholder="Enter Mobile Number"
          className="w-[100%] border-2 rounded-md p-3 mt-2"
          required
        />

        <br></br>
        <label
          htmlFor="Resume"
          className="font-semibold text-sm   text-gray-500"
        >
          Resume<sup className=" text-red-700 ml-1">*</sup>
        </label>
        <br></br>
        <input
          type="file"
          name="file"
          id="file"
          placeholder="Upload File"
          className="w-[100%] border-2 rounded-md p-3 mt-2 bg-white"
          required
        />
        <br></br>
        <br></br>
        <div className="w-full relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-yellow-300 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Submit
          </span>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
