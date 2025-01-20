import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo2.jpg";
import { BsGlobe2 } from "react-icons/bs";
import { HiMiniXMark } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import LanguageSwitcher from "./LanguageSwitcher"; // Import the LanguageSwitcher component
// import { useTranslation } from "react-i18next";

function Navbar({ t }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setTransparent] = useState(true);
  // const { t } = useTranslation(); // Initialize the translation function

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById("hero").offsetHeight;
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < heroSectionHeight) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const navItem = [
    { link: t("navHome"), path: "Home" },
    { link: t("navAbout"), path: "about" },
    { link: t("navCost"), path: "cost" },
    { link: t("navDelivery"), path: "delivery" },

    { link: t("navPick"), path: "picking" },
    { link: t("navTerms"), path: "terms" },
    { link: t("navContact"), path: "contact" },
  ];

  return (
    <>
      <nav
        className={`${
          isTransparent ? "bg-transparent text-white" : "bg-white "
        } md:px-8 py-2  max-w-screen-4xl mx-auto  fixed top-0 right-0 left-0 z-50`}
      >
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <Link
              to="home"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt="logo"
                className="w-20 lg:w-30  px-2 inline-block items-center"
              />
              {/* <span className="text-white">charity4gambia</span> */}
            </Link>
            {/* nav links */}
            <ul className="md:flex space-x-12 hidden ">
              {navItem.map(({ link, path }) => (
                <Link
                  to={path}
                  key={link}
                  className="block hover:text-gray-300 cursor-Pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          {/* language and sign up */}
          <div className="space-x-12 hidden md:flex items-center">
            {/* <a href="/" className="lg:flex items-center hover:text-secondary">
              <BsGlobe2 className="mr-2 " /> <span>{t("language")}</span>
            </a> */}
            {/* Include LanguageSwitcher component */}
            <LanguageSwitcher />
          </div>
          {/* mobile navbar */}
          <div className="md:hidden block">
            <button
              onClick={toggleMenu}
              className=" focus:outline-none focus:text-gray-300 text-lg"
            >
              {isMenuOpen ? (
                <HiMiniXMark
                  className={`${
                    isTransparent ? "text-white" : "text-black"
                  } w-6 h-6`}
                />
              ) : (
                <FaBars
                  className={`${
                    isTransparent ? "text-white" : "text-black"
                  } w-6 h-6`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* // navitem for mobile */}
      <div
        className={`${
          isMenuOpen ? "block " : "hidden"
        } space-y-4 px-4 pt-24 text-white pb-24  bg-black z-30 fixed top-0 right-0  left-0 `}
      >
        {navItem.map(({ link, path }) => (
          <Link
            to={path}
            key={link}
            className="block text-white hover:text-gray-300 text-xl z-50"
          >
            {link}
          </Link>
        ))}
        <div className=" flex lg:hidden">
          <BsGlobe2 className="mr-2  text-2xl " /> <span>{t("language")}</span>
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
}

export default Navbar;
