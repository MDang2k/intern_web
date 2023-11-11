import React from "react";
import IMAGES from "../Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer bg-cover pt-[40px] pb-[80px] px-[120px]">
      <div className="grid grid-cols-5">
        <div className=" col-span-2 pr-[80px]">
          <img src={IMAGES.logo} alt="" />
          <p className=" pt-6 leading-8">
            Various kinds of NFT that are trending the trend will be reset and
            every week creator will show NFT
          </p>
        </div>

        <div>
          <ul>
            <li className=" font-semibold py-3">Catergories</li>
            <li className="py-3">
              <a href="/#">Art</a>
            </li>
            <li className="py-3">
              <a href="/#">Collections</a>
            </li>
            <li className="py-3">
              <a href="/#">Domain Name</a>
            </li>
            <li className="py-3">
              <a href="/#">Creator NFT</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className=" font-semibold py-3">Contact us</li>
            <li className="py-3">
              <a href="/#">Platform Status</a>
            </li>
            <li className="py-3">
              <a href="/#">Customer services</a>
            </li>
            <li className="py-3">
              <a href="/#">Partner</a>
            </li>
            <li className="py-3">
              <a href="/#">Privacy policy</a>
            </li>
          </ul>
        </div>

        <div >
          <p className=" font-semibold py-3">Get in touch</p>
          <p className=" py-1">Indonesia Sukabumi Utara </p>
          <p className=" py-1">Jl. Griya Permata Hijau no D1</p>
          <p className=" py-1">543881</p>

          <FontAwesomeIcon icon={faFacebook} className=" text-[40px] mr-4 pt-5 text-purple-600"/>
          <FontAwesomeIcon icon={faTwitter} className=" text-[40px] mr-4 text-purple-600"/>
          <FontAwesomeIcon icon={faInstagram} className=" text-[40px]  text-purple-600"/>        </div>
      </div>
    </div>
  );
}
