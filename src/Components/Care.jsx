import React from "react";
import logo from "../assets/category.png";
import Button from "./Button";
const Care = () => {
  return (
    <div className="w-11/12 max-w-[1168px] md:p-10 mx-auto flex md:flex-row flex-col  gap-8">
      <div className="md:max-w-[50%]">
        <img src={logo} className="rounded-3xl"></img>
      </div>
      <div className="p-6 md:max-w-[50%] flex flex-col gap-8">
        <h1 className="text-[#00204a] text-4xl font-semibold">
          Personal Care Products For Your Entire Family
        </h1>
        <p>
          We are a sustainable family care brand of clean and effective, organic
          and natural, vegan and cruelty free products that are formulated for
          your skin’s health. Baby & Mom Retail Pvt Ltd. company deals in Baby,
          Mom & personal care products, the company owned brands “OYO BABY”,
          “Newish” “REDCOP”, “St. Shish” & “Amorite”, “MATTRESS PROTECTOR”,
          “GADDA CO” which deals in Beauty & Heath (Skin Care, Hair Care,
          Personal Care) & Baby & Mom (Baby powders, baby bedding, baby
          furniture, Massage Oil, Wipes, Sunscreen Lotion, Baby Lotion, Diaper
          Bag, etc. Our current strength is 250+ employees and 4 Warehouses
          across India.
        </p>
        <div className="w-[40%]">
          <Button buttontxt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Care;
