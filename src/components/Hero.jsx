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


import { Pagination } from "swiper";
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
      title: "Slide 1",
      description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      image: homebg2,
      title: "Slide 3",
      description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      image: homebg3,
      title: "Slide 3",
      description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      image: homebg4,
      title: "Slide 4",
      description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
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
            <div>
              <h1 className="text-4xl font-bold text-white">{slide.title}</h1>
              <p className="text-white text-center">{slide.description1}</p>
              <p className="text-white text-center">{slide.description2}</p>
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
