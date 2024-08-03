import React from "react";
import Image from "next/image";
import Form from "./re-usables/Form";

const DoorDashPromo: React.FC = () => {
  return (
    <div className=" flex items-center bg-[#DC3545]">
      <div className="bg-[#DC3545] container mx-auto px-4 h-[500px] flex-wrap lg:flex-nowrap lg:pb-0 gap-3 flex pb-[30px] pt-[30px]  justify-center items-start">
        <div className="relative flex flex-col items-center lg:items-start space-y-4 z-40">
          <h1 className="text-white font-bold text-[30px] md:text-[40px] leading-[1] z-30 relative text-center lg:text-start">
            Unlock more sales with DoorDash
          </h1>
          <p className="text-white text-center text-[20px]">
            Create a profile today and get started.
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          <Image
            width={100}
            height={100}
            unoptimized
            src="/assets/restaurant.jpg"
            alt="How Spread Bagelry drives higher margins with DoorDash"
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default DoorDashPromo;
