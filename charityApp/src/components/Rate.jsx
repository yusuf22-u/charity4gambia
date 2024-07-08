import React from "react";
import "./rate.css";

const Rates = ({ t }) => {
  return (
    <div className="ticket-wrapper relative max-w-full md:max-w-3/5 mt-[-100px] z-20  mx-auto rounded-md w-full ">
      <div className="bighea block absolute font-italic text-lg md:text-2xl bg-red-500 text-white uppercase py-2 px-4 italic z-10 lg:h-[120px] h-[200px] rounded-md">
        {/* {t('containernew')} */}
        Container news
      </div>
      <div className="text-up h-[50px] md:h-[78px] bg-bgColor shadow-inner overflow-hidden relative text-white uppercase text-lg md:text-2xl font-semibold flex items-center left-[12px]">
        <ul className="flex rate-text justify-between w-full space-x-8 md:absolute top-0 left-0 mx-0 my-0">
          <li className="flex flex-row relative space-x-2">
            <span>{t("nextContainer")}</span>
          </li>
          {/* <li className="flex flex-row relative space-x-2">
            <span className="text-[16px] flex">
              container: {"20/11/24"}
              
            </span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Rates;
