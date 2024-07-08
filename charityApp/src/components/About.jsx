import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";
import Team from "./Team";

const About = ({ t }) => {
  return (
    <section id="about" className="bg-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid md:grid-cols-2 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-red-700 mb-6 leading-tight">
              {t("heading")}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {t("about")}
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Team />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:gap-12 py-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-6">
              <FaEye className="text-green-700 text-4xl mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-green-700">
                {t("visionh1")}
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-700">{t("vision")}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-6">
              <FaBullseye className="text-blue-700 text-4xl mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
                {t("missionh1")}
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-700">{t("mission")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
