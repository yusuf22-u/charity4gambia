import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay, Pagination } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import image1 from "../assets/images/name.jpg";
import image2 from "../assets/images/name1.jpeg";
import image3 from "../assets/images/name2.jpeg";
import image4 from "../assets/images/name1.jpeg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
//import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = ({ t }) => {
  const [view, setView] = useState(2);
  useEffect(() => {
    if (screen.width <= 767) {
      setView(1);
    } else {
      setView(2);
    }
  });
  return (
    <>
      <section className=" testimonial py-16  bg-[#f7faff]" id="customer">
        <div className="py-4 px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            {t("clientHeading")}
          </h2>

          <p className="text-center text-[#6c6c6f] md:w-[75%] md:mx-auto">
            {t("clientText")}
          </p>
        </div>
        <Swiper
          className="px-4"
          // install Swiper modules
          autoplay={{
            delay: 1500,
          }}
          modules={[Pagination, Autoplay]}
          spaceBetween={100}
          slidesPerView={view}
          navigation
          pagination={{ clickable: true }}
        >
          <div className="swiper mySwiper  ">
            <div className="swiper-wrapper w-[80%] lg:w-[70%] md:w-[50%] md:px-16 md:ml-6 md:mx-auto lg:mx-auto lg:px-64 lg:ml-8">
              {/* section start */}
              <SwiperSlide className="lg:px-16 md:px-[10px] px-2 mx-auto shadow-lg rounded-md">
                <div className="   ">
                  <p className="">
                    <FaQuoteLeft className="text-blue-800" />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <FaQuoteRight className="text-blue-800" />
                  </p>
                </div>
                <div className="">
                  <figure className="rounded-full w-[100px] h-[100px] mt-8">
                    <img
                      className=" border-blue-900 rounded-full "
                      src={image2}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="text-[15px]">
                    <p className="text-blue-900 font-bold">Ousman Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
              <SwiperSlide className="lg:px-16 md:px-[10px] px-2 mx-auto shadow-lg rounded-md">
                <div className="   ">
                  <p className="">
                    <FaQuoteLeft className="text-blue-800" />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <FaQuoteRight className="text-blue-800" />
                  </p>
                </div>
                <div className="">
                  <figure className="rounded-full w-[100px] h-[100px] mt-8">
                    <img
                      className=" border-blue-900 rounded-full "
                      src={image2}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="text-[15px]">
                    <p className="text-blue-900 font-bold">Yusupha Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
              <SwiperSlide className="lg:px-16 md:px-[10px] px-2 mx-auto shadow-lg rounded-md">
                <div className="   ">
                  <p className="">
                    <FaQuoteLeft className="text-blue-800" />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <FaQuoteRight className="text-blue-800" />
                  </p>
                </div>
                <div className="">
                  <figure className="rounded-full w-[100px] h-[100px] mt-8">
                    <img
                      className=" border-blue-900 rounded-full "
                      src={image2}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="text-[15px]">
                    <p className="text-blue-900 font-bold">Ousman Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
              <SwiperSlide className="lg:px-16 md:px-[10px] px-2 mx-auto shadow-lg rounded-md">
                <div className="   ">
                  <p className="">
                    <FaQuoteLeft className="text-blue-800 " />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    totam incidunt laborum mollitia quis fuga optio! Eum quia
                    magnam, deserunt ducimus totam ex, saepe earum, quaerat
                    facilis hic reiciendis necessitatibus!
                    <FaQuoteRight className="text-blue-800" />
                  </p>
                </div>
                <div className="">
                  <figure className="rounded-full w-[100px] h-[100px] mt-8">
                    <img
                      className=" border-blue-900 rounded-full "
                      src={image2}
                      alt="img"
                      srcSet=""
                    />
                  </figure>
                  <div className="text-[15px]">
                    <p className="text-blue-900 font-bold">Ousman Darboe</p>
                    <p className="text-blue-400 font-serif">Developer</p>
                  </div>
                </div>
                {/* section end */}
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
