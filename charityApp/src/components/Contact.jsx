import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaHome } from "react-icons/fa";
import NetherlandsFlag from "../assets/images/holland.png";
import GambiaFlag from "../assets/images/Gam.svg";

const Contact = ({ t }) => {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-16 lg:py-24"
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white opacity-70"></div>

      <div className="container mx-auto px-6 md:px-0 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-red-700 mb-8">
          {t("contactHeading")}
        </h2>
        <div className=" w-full lg:w-1/2 mx-auto">
          {/* Contact Details */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t("contactDetail")}
            </h3>
            <div className="flex items-center mb-4">
              <FaPhone className="text-gray-600 mr-3" />
              <p className="text-lg text-gray-800">
                {" "}
                {t("Netherlands")} +31 622832113.
              </p>
              <img
                src={NetherlandsFlag}
                alt="Netherlands Flag"
                className="w-6 ml-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-gray-600 mr-3" />
              <p className="text-lg text-gray-800">
                {t("Email")}: charity4gambia.nl@gmail.com
              </p>
            </div>
            <div className="flex items-center mb-4">
              <FaHome className="text-gray-600 mr-3" />
              <p className="text-lg text-gray-800">{t("Gambia")}</p>
              <img src={GambiaFlag} alt="Gambia Flag" className="w-6 ml-2" />
            </div>
            <div className="flex items-center mb-4">
              <FaWhatsapp className="text-green-500 mr-3" />
              <p className="text-lg text-gray-800">
                {t("WhatsApp")}: +220 4185729
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-800">
                {t("contactName")}: Karl Jawara
              </p>
            </div>
          </div>
          {/* Contact Form */}
          {/* <div className="rounded-lg shadow-lg bg-white p-6">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {t("senderName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("namePlaceHolder")}
                  className="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-red-700"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {t("senderEmail")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("emailPlaceHolder")}
                  className="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-red-700"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder={t("messagePlaceHolder")}
                  className="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-red-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:bg-red-600 transition duration-300"
              >
                {t("SendMessage")}
              </button>
            </form>
          </div> */}
        </div>
        {/* Google Maps Direction */}
        <div className="flex justify-center mt-8">
          <a
            href="https://maps.app.goo.gl/eK7F43V4VECZPfBS8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 font-bold text-lg hover:underline"
          >
            {t("getDirection")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
