import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiFlag } from "react-icons/fi"; // Assuming you have icons for flags, import them here
import NetherlandsFlag from "../assets/images/holland.png";
import GambiaFlag from "../assets/images/uk.webp";

const languages = [
  {
    code: "en",
    lang: "English",
    flag: <img src={GambiaFlag} alt="Netherlands Flag" className="w-6 ml-2" />,
  }, // Add flag emojis or image paths for each language
  {
    code: "nl",
    lang: "Dutch",
    flag: (
      <img src={NetherlandsFlag} alt="Netherlands Flag" className="w-6 ml-2" />
    ),
  },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close the dropdown after selecting a language
  };

  return (
    <div className="container">
      <div className="relative ml-16 inline-block text-left">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)} // Toggle the dropdown
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="md:hidden">
            {languages.find((l) => l.code === i18n.language)?.flag}
          </span>{" "}
          <span className="hidden md:inline lg:flex">
            {languages.find((l) => l.code === i18n.language)?.flag}{" "}
            {languages.find((l) => l.code === i18n.language)?.lang}
          </span>
        </button>
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
            tabIndex="-1"
          >
            <div className="py-1 ml-16 lg:ml-0" role="none">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  onClick={() => changeLanguage(lang.code)}
                >
                  {/* <span className="md:hidden">{lang.flag}</span>{" "} */}
                  <span className="flex space-x-2  md:inline">
                    {lang.flag} {lang.lang}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
