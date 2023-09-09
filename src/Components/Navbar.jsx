import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import Button from "./Button";
import ScrollIntoView from "react-scroll-into-view";
const Navbar = (props) => {
  return (
    <div className="flex md:items-center md:flex-row flex-col justify-between gap-4 w-11/12 max-w-[1168px] p-6 mx-auto">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            className="md:w-[50%] w-[20%]"
            height={32}
            loading="lazy"
            alt="Logo"
          ></img>
        </div>
      </Link>
      <ul className="flex text-white font-bold md:text-lg text-base md:gap-x-8 gap-x-2 items-center md:flex-row flex-col">
        <ScrollIntoView selector="#aboutus">
          <li>
            <Link
              to={"/"}
              onClick={() => {
                props.setContact(false);
              }}
              className="hover:text-yellow-300"
            >
              About Us
            </Link>
          </li>
        </ScrollIntoView>
        <ScrollIntoView selector="#tech">
          <li>
            <Link
              to="/"
              onClick={() => {
                props.setContact(false);
              }}
              className="hover:text-yellow-300"
            >
              Our Mission
            </Link>
          </li>
        </ScrollIntoView>
        <ScrollIntoView selector="#choice">
          <li>
            <Link
              to="/"
              onClick={() => {
                props.setContact(false);
              }}
              className="hover:text-yellow-300"
            >
              Why Choose Us
            </Link>
          </li>
        </ScrollIntoView>
        <ScrollIntoView selector="#brands">
          <li>
            <Link
              to="/"
              onClick={() => {
                props.setContact(false);
              }}
              className="hover:text-yellow-300"
            >
              Our Brands
            </Link>
          </li>
        </ScrollIntoView>
        <ScrollIntoView selector="#contactus">
          <li>
            <Link
              to="/"
              onClick={() => {
                props.setContact(false);
              }}
              className="hover:text-yellow-300"
            >
              Contacts US
            </Link>
          </li>
        </ScrollIntoView>
      </ul>
      <Link
        to="/contactus"
        onClick={() => {
          props.setContact(true);
        }}
      >
        <div className="flex justify-center items-center">
          <Button buttontxt="Career" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
