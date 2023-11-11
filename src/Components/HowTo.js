import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IMAGES from "../Assets";

export default function HowTo() {
  return (
    <div className=" mx-[120px] flex flex-col flex-nowrap items-center justify-center">
      <h2 className="text-5xl font-bold py-4">How to bling charge</h2>
      <p className=" text-lg leading-8 text-center py-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <Carousel
        className=" px-8 pt-8 rounded-2xl bg-black"
        showArrows={false}
        showStatus={false}
      >
        <div className="grid grid-cols-3">
          <div className=" col-span-1">
            <img src={IMAGES.carousel_1} alt="" />
          </div>

          <div className=" col-span-2 pt-10 px-10 text-left">
            <h3 className=" font-semibold text-[32px] leading-12">NFT to the bone makes you collect project 3D</h3>
            <p className=" text-lg leading-8 pt-4 opacity-50">
              We are a community based collection project featuring 3D and NFT
              artwork. Cool 3D from me and comes in all kinds of evil shape
              traits and sizes with a few surprises along the way
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 bg-black">
          <div className=" col-span-1">
            <img src={IMAGES.carousel_1} alt="" />
          </div>

          <div className=" col-span-2">
            <h3>NFT to the bone makes you collect project 3D</h3>
            <p>
              We are a community based collection project featuring 3D and NFT
              artwork. Cool 3D from me and comes in all kinds of evil shape
              traits and sizes with a few surprises along the way
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 bg-black">
          <div className=" col-span-1">
            <img src={IMAGES.carousel_1} alt="" />
          </div>

          <div className=" col-span-2">
            <h3>NFT to the bone makes you collect project 3D</h3>
            <p>
              We are a community based collection project featuring 3D and NFT
              artwork. Cool 3D from me and comes in all kinds of evil shape
              traits and sizes with a few surprises along the way
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
