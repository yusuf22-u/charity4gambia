import React from "react";
import { FaShippingFast, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdAccessTime, MdOutlineMail } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

const PickingUpGoodsSection = ({ t }) => {
  return (
    <section
      id="picking"
      className="relative bg-cover bg-center py-8 sm:py-16 lg:py-24"
    >
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          {t("pickheading")}
        </h2>
        <p className="py-2 lg:text-xl text-[#222222]">{t("pickingText")}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <MdLocationOn className="text-5xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center text-red-700">
              {t("warehouse")}
            </h3>
            <ul className="text-[#222222] font-normal">
              <li> {t("wareFirst")}</li>
              <li> {t("wareSecond")}</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <MdAccessTime className="text-5xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center text-red-700">
              Opening hours in The Gambia
            </h3>
            <p>{t("openHourText")}</p>
            <ul className="text-[#222222] font-normal">
              <li>{t("firstHour")}</li>
              <li>{t("secondHour")}</li>
              <li>{t("thirdHour")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            {t("contactPerson")}
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <li className="p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <FaPhoneAlt className="text-3xl text-blue-800 mr-2" />
              <span> +31 622832113</span>
            </li>
            <li className="p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <MdOutlineMail className="text-3xl mr-2" />
              <span>charity4gambia.nl@gmail.com</span>
            </li>
            <li className="p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <FaWhatsapp className="text-3xl text-green-500 mr-2" />
              <span> +220 4185729</span>
            </li>
            <li className="p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <BsPersonFill className="text-3xl text-blue-500 mr-2" />
              <span>Karl Jawara</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PickingUpGoodsSection;
