import { t } from "i18next";
import React from "react";
import {
  FaShippingFast,
  FaMoneyBillAlt,
  FaHandHoldingUsd,
  FaFileInvoice,
  FaFileSignature,
  FaBalanceScale,
  FaExclamationTriangle,
} from "react-icons/fa";

const ShippingCostsSection = () => {
  return (
    <section
      id="cost"
      className="relative bg-cover bg-center py-8 sm:py-16 lg:py-24"
    >
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="max-w-6xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl textshadow font-bold text-white shadow-inner mb-8">
            {t("mainHeading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shipping cost cards */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaShippingFast className="text-5xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">
                {" "}
                {t("standardHeading")}
              </h3>
              <p>{t("standardText")}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaMoneyBillAlt className="text-5xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">
                {t("shipingCostHeading")}
              </h3>
              <p>{t("shipingCostText")}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaHandHoldingUsd className="text-5xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">{t("homePicking")}</h3>
              <p>{t("homePickingText")}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaFileInvoice className="text-5xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">{t("paymentHeading")}</h3>
              <p>{t("paymentText")}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaFileSignature className="text-5xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">{t("invoiceHeading")}</h3>
              <p>{t("invoiceText")}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaBalanceScale className="text-5xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">{t("customHeading")}</h3>
              <p>{t("customText")}</p>
            </div>
            {/* Fine and Costs in Gambia */}
            <div className="lg:flex lg:justify-between sm:grid-cols-2 md:flex md:justify-center md:space-x-4 md:w-[750px] gap-8 lg:w-[950px] lg:space-x-4">
              <div className="p-6 bg-white  rounded-lg shadow-lg">
                <FaExclamationTriangle className="text-5xl text-red-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4">{t("fineHeading")}</h3>
                <p>{t("finesText")}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg ">
                <h3 className="text-xl font-bold mb-4">
                  {t("costInTheGambia")}
                </h3>
                <p>{t("costInTheGambiaText")}</p>
                <h3 className="text-xl font-bold mt-6 mb-4">
                  {t("importDuty")}
                </h3>
                <p>{t("importDutyText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingCostsSection;
