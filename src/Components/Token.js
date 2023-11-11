import React from "react";
import IMAGES from "../Assets";

export default function Token() {
  return (
    <div className=" px-[150px] py-[200px] relative">
      <img src={IMAGES.cube} alt="a giant cube" className="" />
      <div className="flex flex-col flex-nowrap items-center justify-center absolute top-0 bottom-0 left-0 right-0 m-auto">
        <img src={IMAGES.logo_large} alt="" />
        <h2 className="text-[56px] text-white py-4 ">Just Charge and Earn</h2>
        <p className=" text-lg leading-8 text-center px-[100px]">You can get started with your marketing automation in a few minutes and you can send email newsletter with your audience. You can get started with your marketing automation in a few. </p>
      </div>
    </div>
  );
}
