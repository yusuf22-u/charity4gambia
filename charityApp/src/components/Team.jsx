import React from "react";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import logo from "../assets/images/logo2.jpg";

const Team = () => {
  return (
    <div className="lg:pl-4 pb-6 lg:py-8 lg:mt-5">
      <div className="px-8">
        {" "}
        <img
          className="lg:w-[50%] md:px-4 w-full"
          src={logo}
          alt=""
          srcset=""
        />
        {/* Add padding here */}
        {/* <h1 className="text-center">Official Logo</h1> */}
        <ul className="flex space-x-16 mt-2 w-full mx-auto lg:px-16">
          <li className="rounded-full bg-white p-1">
            <a
              href="https://m.facebook.com/groups/1540400973539162/?ref=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-800 text-lg" />
            </a>
          </li>
          <li className="rounded-full bg-white p-1">
            {/* <FaTwitter className="text-blue-400 text-lg" /> */}
          </li>
          {/* <li className="rounded-full bg-white p-1">
            <FaLinkedin className="text-[#5239af] text-lg" />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Team;
