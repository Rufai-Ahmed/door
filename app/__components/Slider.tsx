"use client";
import { testimonialData } from "@/public/data/data";
import { iTestimony } from "@/public/utils/interfaces";
import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import Slider from "react-slick";

const Slide = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [...testimonialData, ...testimonialData];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((el: iTestimony, i: number) => (
          <div
            key={i}
            className="min-h-[350px] flex items-center justify-center p-5"
          >
            <div className="bg-white shadow-md w-full h-full p-10 rounded-md flex items-center justify-center">
              <div className="space-y-9">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src={el.img!}
                      className="w-16 h-16 rounded-full object-cover object-center bg-gray-400"
                      alt="Avatar"
                      height={100}
                      width={100}
                    />

                    <div>
                      <strong>{el.b}</strong>
                      <p>
                        <em>{el.city}</em>
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-2">
                    {Array.from({ length: 5 }).map((el: unknown, i: number) => (
                      <BsStarFill
                        key={i}
                        className="text-yellow-400 text-[15px]"
                      />
                    ))}
                  </div>
                </div>
                <p className="space-y-4 md:space-y-0">
                  <em>{el.p}</em>

                  <div className="flex md:hidden items-center gap-2">
                    {Array.from({ length: 5 }).map((el: unknown, i: number) => (
                      <BsStarFill
                        key={i}
                        className="text-yellow-400 text-[15px]"
                      />
                    ))}
                  </div>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
