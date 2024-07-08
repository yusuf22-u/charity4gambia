import React from "react";
import bannerImg from "../assets/images/ma2.webp";
import Banner from "./share/Banner";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const Home = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to get the t function

  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
        <Banner
          bannerImg={bannerImg}
          heading={t("welcome")}
          btn1={t("btn1")}
          btn2={t("btn2")}
          subheading={t("home")} // Access translation using t function
        />
      </div>
    </>
  );
};

export default Home;
