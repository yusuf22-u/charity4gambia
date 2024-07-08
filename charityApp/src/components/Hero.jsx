import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../components/style.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Navbar from "./Navbar";
import image3 from "../assets/images/pc1.jpg";
import image2 from "../assets/images/pc2.jpg";
import image4 from "../assets/images/pc3.jpg";
import Home from "./Home";
import Customer from "./Customer";
import Rates from "./Rate";

export default function Hero({ t }) {
  return (
    <section id="Home" className="">
      <div className="relative" id="hero">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        {/* Swiper */}
        <Swiper
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper relative z-20"
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="image-overlay">
              <img
                className="full-screen-img"
                src={image2}
                style={{ width: "2000px" }}
                alt="pic1"
                srcSet=""
              />
              <div className="text-container">
                <h2 className="hero-title text-5xl lg:text-7xl font-bold text-white text-center mb-6">
                  {t("welcomeHeading")}
                </h2>
                <p className="hero-description text-lg lg:text-xl text-white w-full text-center mb-6">
                  {t("welcomeText")}
                </p>
                <div className="button-container flex justify-center items-center">
                  <a href="#about" className="btnPrimary btn mr-4">
                    {t("welcomeBtn")}
                  </a>
                  {/* <button className="btnPrimary">Contact</button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-overlay">
              <img
                className="full-screen-img"
                src={image4}
                alt="pic2"
                style={{ width: "2000px" }}
                srcSet=""
              />
              <div className="text-container">
                <h2 className="hero-title  text-5xl lg:text-7xl font-bold text-white text-center mb-6">
                  {t("getIntochHeading")}
                </h2>
                <p className="hero-description text-lg lg:text-xl text-white w-[300px] md:w-full text-center mb-6">
                  {t("getIntochText")}
                </p>
                <div className="button-container flex justify-center items-center">
                  <a href="#contact" className="btnPrimary btn mr-4">
                    {t("btnContact")}
                  </a>
                  {/* <button className="btnPrimary">Contact</button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-overlay">
              <img
                className="full-screen-img"
                src={image4}
                alt="pic3"
                style={{ width: "2000px" }}
                srcSet=""
              />
              <div className="text-container">
                <h2 className="hero-title text-5xl lg:text-7xl font-bold text-white text-center mb-6">
                  {t("ourPoliciesHeading")}
                </h2>
                <p className="hero-description text-lg lg:text-xl text-white w-full text-center mb-6">
                  {t("ourPoliciesText")}
                </p>
                <div className="button-container flex justify-center items-center">
                  <a href="#terms" className="btnPrimary btn mr-4">
                    {t("ourPoliciesBtn")}
                  </a>
                  {/* <button className="btnPrimary">Contact</button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* rate */}
          {/* <Rates t={t} /> */}
        </Swiper>
      </div>
      {/* home */}
      <Home t={t} />
      {/* <Customer t={t} /> */}
    </section>
  );
}
