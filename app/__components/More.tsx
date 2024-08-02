import Image from "next/image";
import React from "react";

const More = () => {
  return (
    <div className="container mx-auto p-4 2xl:max-w-7xl">
      <div className="grid grid-cols-2 gap-10 items-center">
        <Image
          src={"/assets/phone.jpg"}
          width={100}
          height={100}
          unoptimized
          alt="phone"
          className="w-full h-auto col-span-2 lg:col-span-1"
        />

        <div className="space-y-4 col-span-2 lg:col-span-1">
          <p className="text-[20px] capitalize">
            <b>restaurants</b>
          </p>

          <p>
            We provide customized, accessible support whenever you need it,
            including 24/7 phone and chat support, account help, and direct
            communication with assigned drivers.
          </p>

          <p>
            Plus, visit the Learning Center to view step-by-step tutorials and
            training videos on setting up, running, and growing your store on
            DoorDash, so you can grow profits and reach more new customers.
          </p>

          <button className="px-5 rounded-[30px] py-3 bg-red-600 text-white">
            Visit the Learning Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default More;
