import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ({ t }) => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">{t("footerAbout")}</h3>
            <p className="text-sm text-gray-300">{t("welcomeText")}</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-300">
              <li className="mb-2">
                <a href="#about">{t("navAbout")}</a>
              </li>
              <li className="mb-2">
                <a href="#shipping">{t("navCost")}</a>
              </li>
              <li className="mb-2">
                <a href="#picking">{t("navPick")}</a>
              </li>
              <li className="mb-2">
                <a href="#delivering">{t("navDelivery")}</a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300">
              Email: charity4gambia@hotmail.com
            </p>
            <p className="text-sm text-gray-300">Phone: +31 622832113</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">{t("followUs")}</h3>
            <div className="flex space-x-4">
              <a
                href="https://m.facebook.com/groups/1540400973539162/?ref=share"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <FaFacebook />
              </a>

              {/* <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-300">
        © 2024 Charity4Gambia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
