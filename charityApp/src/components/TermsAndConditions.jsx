import React from "react";
import { MdCancel, MdCheckCircle, MdInfo } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { SiPeerlist } from "react-icons/si";
import logo from "../assets/images/tc.png";
import { FaBicycle, FaBalanceScale } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";
import { LuContainer } from "react-icons/lu";

const TermsAndConditions = ({ t }) => {
  const dou_url = "/Docu/Paklijst_form.doc";

  return (
    <section id="terms" className="bg-gray-100 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-red-700 mb-6 lg:mb-8">
          {t("termandConditionmainHeading")}
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {/* General Terms and Conditions */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg lg:text-xl font-bold text-center text-red-700 mb-3 lg:mb-4">
              <img
                className="text-red-500 mb-2 lg:mb-3 mx-auto"
                src={logo}
                alt="tc"
                style={{ height: "3rem" }}
              />
              {t("termsConditionHeadind")}
            </h3>
            <p className="text-sm lg:text-base text-gray-700 mb-3 lg:mb-4">
              {t("termsConditionText")}
            </p>
            <ul className="list-disc list-inside text-sm lg:text-base text-gray-700 mb-4 lg:mb-6">
              <li>
                <MdCancel className="inline-block mr-2 text-red-700" />
                {t("firstCondition")}
              </li>
              <li>
                <MdCancel className="inline-block mr-2 text-red-700" />
                {t("secondCondition")}
              </li>
            </ul>
            <p className="text-sm lg:text-base text-gray-700">
              {t("conditionParagrph")}
            </p>
          </div>
          {/* Prohibited Items */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-700 mb-4 text-center">
              <MdCancel className="text-5xl text-red-500 mb-4 mx-auto" />
              {t("prohibitedItemsheading")}
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>{t("firstItems")}</li>
              <li>{t("secondItems")}</li>
              <li>{t("thirdItems")}</li>
              <li>{t("fourItems")}</li>
              <li>{t("fifthItems")}</li>
              <li>{t("sixItems")}</li>
              <li>{t("sevenItems")}</li>
              <li>{t("eightItems")}</li>
              <li>{t("nineItems")}</li>
              {/* <li>{t("tenItems")}</li> */}
            </ul>
            <p className="text-gray-700">{t("itemsParagraph")}</p>
          </div>
          {/* Add more grid items here */}
          {/* Allowed with Conditions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">
              <FcApproval className="text-5xl text-green-500 mb-4 mx-auto" />
              {t("allowWithCondition")}
            </h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>{t("firstAllowItem")}</li>
              <li>{t("secondAllowItem")}</li>
              <li>{t("thirdAllowItem")}</li>
              <li>{t("fouthdAllowItem")}</li>
            </ul>
            <MdInfo className="text-red-700 text-2xl mt-4" />
            <p className="text-gray-700">{t("AllowItemParagraph")}</p>
          </div>
          {/* packlist */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-center text-red-700 mb-4">
              <SiPeerlist className="text-5xl text-green-500 mb-4 mx-auto" />
              {t("packingList")}
            </h3>
            <p className="text-gray-700">{t("packingListText")}</p>
            <div className="mt-4 py-4">
              <a href={dou_url} download className="btnPrimary btn ">
                Download form
              </a>
            </div>
          </div>
          {/* bicyle */}
          <div className="bg-white p-6 rounded-lg shadow-md md:w-full">
            <h3 className="text-xl text-center font-bold text-red-700 mb-4">
              <FaBicycle className="text-6xl text-blue-900 mb-4 mx-auto" />
              {t("Bicyclesheading")}
            </h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>{t("firstBicycle")}</li>
            </ul>
          </div>
          {/* container track */}
          <div className="bg-white p-6 rounded-lg shadow-md md:w-full">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">
              <LuContainer className="text-5xl text-blue-500 mb-4 mx-auto" />
              {t("containerTracker")}
            </h3>
            <p className="text-gray-700">{t("containerTrackerText")}</p>
          </div>
          {/* weigth/dimension */}
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h3 className=" text-center font-bold text-red-700 mb-4">
              <FaBalanceScale className="text-5xl text-gray-900 mb-4 mx-auto" />
              {t("DimensionsWeightsPackaging")}
            </h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>{t("firstDimension")}</li>
              <li>{t("secondDimension")}</li>
              <li>{t("thirdDimension")}</li>
            </ul>
            <h3 className="text-xl text-center mt-4  font-bold flex space-x-2 text-red-700 mb-4">
              {t("paymentMainHeading")}
              {/* <MdPayments className="text-5xl text-gray-900  " /> */}
            </h3>
            <p className="text-gray-700">{t("paymentContent")}</p>
          </div>
          {/* shippin on your risk */}
          <div className="bg-white p-6 rounded-lg shadow-md md:w-full">
            <h3 className="text-xl font-bold text-center text-red-700 mb-4">
              <MdInfo className="text-5xl text-red-500 mb-4 mx-auto" />
              {t("shippingOnYourOwn")}
            </h3>
            <p className="text-gray-700">{t("shippingOnYourOwnText")}</p>
            <h3 className="text-xl font-bold text-red-700 mb-4 mt-4">
              {t("InspectionOfGoods")}
            </h3>
            <p className="text-gray-700">{t("InspectionText")}</p>
            <h3 className="text-xl font-bold text-red-700 mb-4 mt-4">
              {t("vatTax")}
            </h3>
            <p className="text-gray-700">{t("vatText")}</p>
          </div>
          {/* scooter */}
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h3 className="text-xl text-center font-bold text-red-700 mb-4">
              <GiScooter className="text-6xl text-gray-900 mb-4 mx-auto" />
              {t("MopedScooter")}
            </h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>{t("scooterFirst")}</li>
              <li>{t("scooterSecond")}</li>
              <li>{t("scooterThird")}</li>
              <li>{t("fourSecond")}</li>
              <li>{t("fiveSecond")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
