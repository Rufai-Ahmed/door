"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Commitment = () => {
  return (
    <div className="bg-[#FFF0ED] text-center mx-auto space-y-5 w-full px-4 py-10">
      <div className="space-y-5 leading-[1.2]">
        <h1 className="text-[40px] font-bold">
          We&apos;re committed to strengthening neighbourhoods
        </h1>
        <p className="text-[18px]">
          Since our founding in 2013, DoorDash Marketplace has generated over
          $100 billion in sales for merchants.
        </p>
      </div>

      <div className="2xl:max-w-7xl container mx-auto lg:w-[80%] h-[600px]">
        <Swiper
          className="h-full"
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {Array.from({ length: 4 }).map((el: unknown, i: number) => (
            <SwiperSlide key={i}>
              <div className="rounded-md shadow-md border p-7 flex flex-col items-center bg-white gap-10 min-h-[350px]">
                <Image
                  src={"assets/cook.svg"}
                  width={100}
                  height={100}
                  alt="Restaurants"
                  className="w-[100px] h-auto"
                />

                <div className="space-y-5 text-start flex-grow">
                  <p className="text-[20px] capitalize">
                    <b>
                      {i === 0
                        ? "Restaurants"
                        : i === 1
                        ? "Liquor stores"
                        : i === 3
                        ? "flower shop:"
                        : "DoorDash shop"}
                    </b>
                  </p>

                  <p>
                    Whether it&apos;s reaching new customers, increasing orders,
                    or offering easy financing, we&apos;re delivering more ways
                    to help restaurants grow.
                  </p>

                  <button className="px-5 rounded-[30px] py-3 bg-red-600 text-white">
                    DoorDash for{" "}
                    {i === 0
                      ? "Restaurants"
                      : i === 1
                      ? "Liquor stores"
                      : i === 3
                      ? "flower shop:"
                      : "DoorDash shop"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Commitment;
