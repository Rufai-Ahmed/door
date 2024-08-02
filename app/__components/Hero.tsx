import React from "react";
import Image from "next/image";
import Form from "./re-usables/Form";

const DoorDashPromo: React.FC = () => {
  return (
    <div className="bg-red-600 min-h-[700px] flex pb-[30px] -space-x-20 justify-center items-end">
      <div className="relative flex flex-col items-center lg:items-start space-y-4 z-40">
        <h1 className="text-white font-bold text-[30px] md:text-[45px] leading-[1] z-30 relative text-center lg:text-start">
          Unlock more sales <br className="lg:block hidden" /> with DoorDash
        </h1>

        <div className="w-[90%] md:w-[550px]">
          <Form />
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          width={1000}
          height={1000}
          unoptimized
          src="/assets/hero.jpg"
          alt="How Spread Bagelry drives higher margins with DoorDash"
          className="w-full h-auto rounded"
        />
      </div>
    </div>
  );
};

export default DoorDashPromo;
