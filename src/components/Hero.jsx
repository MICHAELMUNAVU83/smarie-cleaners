import React from "react";
import homebg1 from "../images/homebg1.png";
import homebg2 from "../images/homebg2.png";
import homebg3 from "../images/homebg3.png";
import homebg4 from "../images/homebg4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper";
const Hero = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };
  const slides = [
    {
      id: 1,
      image: homebg1,
      title: "We Prioritize Customer Satisfaction",
      description1:
        "Exceeding expectations, building lasting relationships through tailored services.",
    },
    {
      id: 2,
      image: homebg2,
      title: "We Employ Skilled Professionals",
      description1: "Reliable, professional solutions you can trust.",
    },
    {
      id: 3,
      image: homebg3,
      title: "We Maintain High Standards of Excellence",
      description1: "Thorough, efficient cleaning with eco-friendly products",
    },
    {
      id: 4,
      image: homebg4,
      title: "We Value Clear Communication and Transparency",
      description1: "Open, honest communication ensuring satisfaction",
    },
  ];
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      id="home"
      className="flex justify-center pb-8  items-center swiper-container"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="swiper-slide">
          <div
            className="flex h-[80vh] justify-between items-center bg-cover md:bg-center bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-[#5FBED6] p-2 mx-2 group cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out hover:bg-white">
              <MdArrowBackIosNew
                className="text-white  group-hover:text-[#5FBED6] md:text-4xl text-xl cursor-pointer"
                onClick={swipeBack}
              />
            </div>
            <div
              className={
                slide.id % 2 === 0
                  ? "md:ml-[50%] bg-white md:mt-0 mt-[90%] rounded-2xl  w-[400px]  p-4"
                  : "md:mr-[45%] w-[400px] mt-[90%] md:mt-0   bg-white rounded-2xl p-4"
              }
            >
              <h1 className="md:text-4xl font-bold roboto text-[#5D95DB]">
                {slide.title}
              </h1>
              <p className="text-[#5A6B81] font-semibold monts md:text-2xl  ">
                {slide.description1}
              </p>
            </div>
            <div className="bg-[#5FBED6] p-2 mx-2 group cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out hover:bg-white">
              <MdArrowForwardIos
                className="text-white group-hover:text-[#5FBED6]  md:text-4xl text-xl cursor-pointer"
                onClick={swipe}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
