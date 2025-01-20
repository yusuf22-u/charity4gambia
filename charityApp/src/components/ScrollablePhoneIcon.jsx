import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const ScrollablePhoneIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-blue-500 p-4 rounded-xl shadow-lg text-white hover:bg-blue-600 cursor-pointer">
      <a
        href="tel:+32494803332"
        className="flex items-center justify-center flex-col space-y-2 text-center"
      >
        <FaPhoneAlt size={32} className="mb-2" />
        <div>
          <p className="font-semibold text-sm md:text-base">
            Depot Gent{"-->"} Anne Moyaert
          </p>
          <p className="text-xs md:text-sm">Tel: +32 494 803332</p>
        </div>
      </a>
    </div>
  );
};

export default ScrollablePhoneIcon;
