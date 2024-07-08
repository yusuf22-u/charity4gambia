import React, { useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import DeliveringSection from "./components/DeliveringSection";
import PickingUpGoodsSection from "./components/PickingUpGoodSection";
import ShippingCostsSection from "./components/ShippingCostsSection";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";
import Contact from "./components/Contact";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

export function App() {
  const { t } = useTranslation();
  console.log("first", t);
  return (
    <>
      <div className="">
        <Navbar t={t} />
        <Hero t={t} />
        {/* <LanguageSwitcher /> */}
        <About t={t} />
        <DeliveringSection t={t} />
        <PickingUpGoodsSection t={t} />
        <ShippingCostsSection t={t} />
        <TermsAndConditions t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </div>
    </>
  );
}
