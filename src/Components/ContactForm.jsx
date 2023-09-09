import React from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing Form Data");
    console.log(formData);
  }

  return (
    <div
      id="contactus"
      className="w-11/12 max-w-[1168px] md:p-8  mx-auto flex md:flex-row flex-col p-2 gap-2"
    >
      <div className="md:max-w-[45%] flex flex-col gap-4 bg-green-500 p-4 text-white rounded-3xl">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg">
          Our friendly support team is ready and excited to answer your
          questions and help you along the way. You can submit the contact form
          with your query and we’ll get back to you as soon as possible.
        </p>
        <div className="flex gap-4 text-lg items-center">
          <HiOutlineGlobeAlt className="md:h-8 md:w-8 w-14 h-14 " />
          <div>
            <h1>Office Location:</h1>
            <p>
              Baby & Mom Retail Pvt. Ltd. Building no. 667, Phase 5, Udyog
              Vihar, Sector 19 122016
            </p>
          </div>
        </div>
        <div className="flex gap-4 text-lg items-center">
          <AiFillClockCircle className="h-6 w-6" />
          <div>
            <h1>Opening Hours</h1>
            <p>
              Mon-Fri: 10:00 - 17:00 <br></br>Sat-Sun: Weekend
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-100 w-full rounded-3xl md:p-4 p-2">
        <h1 className="text-[#00204a] md:text-4xl text-2xl font-semibold pl-4">
          Get in Touch
        </h1>
        <form
          onSubmit={submitHandler}
          className="rounded-2xl p-6  opacity-70 "
          data-aos="fade-up"
        >
          <label
            htmlFor="firstName"
            className="font-semibold text-gray-500 text-sm"
          >
            Name<sup className=" text-red-700 ml-1">*</sup>
          </label>
          <br></br>
          <input
            type="text"
            name="name"
            id="Name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="Name"
            required
            className="w-full border-2 rounded-md p-3 mt-2"
          />

          <br></br>
          <label
            htmlFor="email"
            className="font-semibold text-sm  text-gray-500"
          >
            Email Address<sup className=" text-red-700 ml-1">*</sup>
          </label>
          <br></br>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
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
            name="phone"
            id="Phone"
            value={formData.phone}
            onChange={changeHandler}
            placeholder="Enter Mobile Number"
            className="w-[100%] border-2 rounded-md p-3 mt-2"
            required
          />

          <br></br>
          <br></br>

          <label
            htmlFor="Message"
            className="font-semibold text-sm text-gray-500"
          >
            Message<sup className="text-red-700 ml-1">*</sup>
          </label>
          <textarea
            type="text"
            value={formData.message}
            name="message"
            id="Message"
            onChange={changeHandler}
            placeholder="Enter Your Message"
            className="w-full border-2 rounded-md p-3 mt-2"
          ></textarea>

          <button>
            <div className="md:w-full cursor-pointer w-full relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
              <span class="w-48 h-48 rounded rotate-[-40deg] bg-yellow-300 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Submit
              </span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
