import React from "react";
import { GiNotebook } from "react-icons/gi";

const DeliveringSection = ({ t }) => {
  return (
    <section
      className="relative bg-cover bg-center py-16 lg:py-24"
      id="delivery"
    >
      {/* Background image */}
      <div className="absolute delivery inset-0 bg-delivery bg-cover bg-center"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto md:text-xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 flex justify-between items-center">
          {t("Delivering")}
          <span className="underline text-red-700 lg:px-6">
            {" "}
            {t("guideLine")}
          </span>
          <span className="text-2xl">
            <GiNotebook />
          </span>
        </h2>
        <h2 className="font-bold text-2xl">{t("customernumber")}</h2>

        <p className="mb-8">{t("customerText")}</p>
        <div className="mb-8">
          <h1 className="font-bold text-2xl">{t("delihollad")}</h1>
          <p>{t("delitext")}</p>
          <ul className="list-disc pl-6">
            <li>{t("firstli")}</li>
            <li>{t("second")}</li>
          </ul>
          <div className="mt-4">
            <h1 className="font-bold text-2xl">{t("address")}</h1>
            <p>{t("addressText")}</p>
          </div>
        </div>
        <div className="mb-8">
          <h1 className="font-bold text-2xl">{t("DeliveryGuidelines")}</h1>
          <ul className="list-disc pl-6">
            <li>{t("firststep")}</li>
            <li>{t("secondstep")}</li>
            <li>{t("thirdstep")}</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl"> {t("tradeheading")}</h1>
          {t("tradeGood")}
        </div>
      </div>
    </section>
  );
};

export default DeliveringSection;
