import React, { useState } from "react";
import IMAGES from "../Assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const [active, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!active);
      };
    
  return (
    <nav className=" w-full border-0">
      <img id="light" src={IMAGES.bg_1} alt="" className={active ? "absolute top-0 !z-0 w-full h-full" : "hidden" } />
      <div className="container mx-auto flex justify-between items-center">
        {/* left logo  */}
        <div className="cotainer py-5 flex justify-between items-center z-20 ">
          <img src={IMAGES.logo} alt="" />
        </div>

        {/* right buttons  */}
        <div className="space-x-4 flex justify-between items-center z-20 ">
          <a className=" text-base" href="/#">
            How to play
          </a>
          <a className="" href="/#">
            Token
          </a>
          <a className="" href="/#">
            Pogs
          </a>
          <a className="" href="/#">
            Help
          </a>
          <div className=" inline">
            <a
              className=" font-semibold text-white px-4 py-4 bg-purple-800 rounded-2xl"
              href="/#"
            >
              Contact Us
            </a>

            <button onClick={handleToggle} className=" pl-4">
              <FontAwesomeIcon icon={faCloud} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
