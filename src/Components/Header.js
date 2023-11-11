import React from "react";
import IMAGES from "../Assets/index";

export default function Header() {
  return (
    <div id="header" className=" mx-auto pt-8 border-0">
      <div className="grid grid-cols-2 gap-4 p-8 z-20">
        {/* first col  */}
        <div className="flex flex-col flex-nowrap items-start justify-center z-10">
          <h2 className="text-[56px] text-white py-4">Charge & Earn</h2>
          <p className=" inline m-0 leading-8">
            You can get started with your marketing automation in a few
            minutesand you can send email newsletter with your audience. You can
            get started with your marketing automation in a few.
          </p>
          <div className=" mt-8">
            <button className=" text-sm t-semibold text-white px-8 py-4 bg-gradient-to-b from-purple-600 to-purple-400 rounded-2xl">Explore Now</button>
            <button className="text-sm t-semibold text-white px-8 py-4 ml-2 bg-transparent border border-white rounded-2xl">Get early Access</button>
          </div>
        </div>
        {/* second col  */}
        <div className=" relative">
          <img src={IMAGES.phone} className="z-20 overflow-hidden" alt="" />
          <img src={IMAGES.metal_ball_2} className=" absolute left-[-138px] top-[578px] z-21" alt="" />
          <img src={IMAGES.metal_ball_1} className=" absolute right-0 top-[258px] z-20 object-left !overflow-clip" alt="" />
        </div>
      </div>
    </div>
  );
}
