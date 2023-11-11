import React from "react";
import IMAGES from "../Assets";

export default function Help() {
  return (
    <div className="grid grid-cols-2 px-9 py-[120px] relative">
      <div className="">
        <img src={IMAGES.phone_2} alt="a xiaomi phone" className=" max-w-full absolute overflow-clip right-[220px] top-0" />
      </div>

      <div className="">
        <h3 className=" text-5xl font-bold lead-[56px]">
          Let your charger make money for you
        </h3>
        <p className="text-lg leading-8">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <p className=" text-xl leading-8 pt-11 pb-4">
          Leverage on your Blingcharge charger and create a stern of passive
          income at no cost.
        </p>
        <div className="grid grid-cols-4 items-center">
          <img src={IMAGES.buy_icon} alt="" className=" ml-[29px] mb-[38px]" />
          <p className=" text-xl col-span-3">Buy NFT adapter or take NFT 5W___ </p>
          <img src={IMAGES.charge_icon} alt="" className=" ml-[18px]" />
          <p className=" text-xl col-span-3">Cắm sạc điện thoại ___ app</p>
          <img src={IMAGES.money_icon} alt="" className=" ml-0" />
          <p className=" text-xl col-span-3">Sit back and watch money ____</p>
        </div>
      </div>
    </div>
  );
}
