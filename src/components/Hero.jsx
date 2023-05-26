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
      title: "We clean. A lot.",
      description1: "Clean Home.    Professional Service. Fair Price.",
      description2:
        "     Our professional and experienced cleaning  staff does the job right the first time.",
    },
    {
      id: 2,
      image: homebg2,
      title: " Let us help you",
      description1: "Stop working. Spare some time   for real life.",
      description2:
        "Our professional and experienced cleaning  staff does the job right the first time.",
    },
    {
      id: 3,
      image: homebg3,
      title: "We do it well",
      description1: "Worry no more.Let us do your chores.    Quick. Proper",
      description2:
        "Our professional and experienced cleaning  staff does the job right the first time.",
    },
    {
      id: 4,
      image: homebg4,
      title: "We clean. A lot.",
      description1: "Clean Home.    Professional Service. Fair Price.",
      description2:
        "     Our professional and experienced cleaning  staff does the job right the first time.",
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
            className="flex h-[80vh] justify-between items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-[#5FBED6] p-2 mx-2 group cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out hover:bg-white">
              <MdArrowBackIosNew
                className="text-white  group-hover:text-[#5FBED6] text-4xl cursor-pointer"
                onClick={swipeBack}
              />
            </div>
            <div
              className={
                slide.id % 2 === 0
                  ? "ml-[50%] bg-white rounded-2xl w-[400px] p-4"
                  : "mr-[45%] w-[400px] bg-white rounded-2xl p-4"
              }
            >
              <h1 className="text-4xl font-bold roboto text-[#5D95DB]">
                {slide.title}
              </h1>
              <p className="text-[#5A6B81] font-semibold monts text-2xl  ">
                {slide.description1}
              </p>
              <p className="text-[#5C6977] text-2xl ] roboto  ">
                {slide.description2}
              </p>
            </div>
            <div className="bg-[#5FBED6] p-2 mx-2 group cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out hover:bg-white">
              <MdArrowForwardIos
                className="text-white group-hover:text-[#5FBED6] text-4xl cursor-pointer"
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
