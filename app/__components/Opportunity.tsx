"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Opportunity = () => {
  return (
    <div className="bg-[#FFF0ED] text-center mx-auto space-y-5 w-full px-4 py-10">
      <div className="space-y-5">
        <h1 className="text-[40px] font-bold">
          We&apos;re committed to strengthening neighbourhoods
        </h1>
        <p className="text-[18px]">
          Since our founding in 2013, 9ja Kitchen Marketplace has generated over
          $100 billion in sales for merchants.
        </p>
      </div>

      <div className="2xl:max-w-7xl container mx-auto lg:w-[90%] 2xl:w-[80%] h-[600px]">
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
              <div className="rounded-md shadow-md border flex flex-col items-center bg-white gap-6 min-h-[450px]">
                <Image
                  src={"/assets/mike.jpg"}
                  width={100}
                  height={100}
                  alt="Restaurants"
                  className="w-full rounded-t-md h-auto"
                />

                <div className="space-y-5 p-7 text-start flex-grow">
                  <p className="text-[20px] capitalize">
                    <b>
                      {i === 0
                        ? "Chief Restaurant advisor"
                        : i === 1
                        ? "disaster relief fund"
                        : i === 3
                        ? "DashRoots"
                        : "9ja Kitchen shop"}
                    </b>
                  </p>

                  <p>
                    Whether it&apos;s reaching new customers, increasing orders,
                    or offering easy financing, we&apos;re delivering more ways
                    to help restaurants grow.
                  </p>

                  <button className="px-5 rounded-[30px] py-3 bg-red-600 text-white text-[14px] 2xl:text-[16px]">
                    9ja Kitchen for{" "}
                    {i === 0
                      ? "About Michael"
                      : i === 1
                      ? "Apply now"
                      : i === 3
                      ? "Join the network"
                      : "9ja Kitchen shop"}
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

export default Opportunity;
