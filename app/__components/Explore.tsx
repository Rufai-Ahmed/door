import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <div className="container mx-auto p-4 2xl:max-w-7xl">
      <div className="grid grid-cols-2  gap-10 items-center">
        <div className="space-y-4 col-span-2 lg:col-span-1">
          <p className="text-[20px] capitalize">
            <b>expore insights you can use</b>
          </p>

          <p>
            Analyze sales, access financials, respond to reviews, and check out
            customer insights including zip codes for delivery. Log on to the{" "}
            <a
              className="text-red-600 underline"
              href="https://www.doordash.com/merchant"
              rel="noopener"
            >
              Merchant Portal
            </a>{" "}
            or use the{" "}
            <a
              className="text-red-600 underline"
              href="https://doordash.com/merchant/mobile/download/?utm_campaign=applaunch&amp;utm_medium=Web&amp;utm_source=Web&amp;_gl=1*n2bjdz*_gcl_au*MTQzNzUzMjg5LjE2ODM4NDEwMTk."
              rel="noopener"
            >
              Business Manager App{" "}
            </a>
            on your phone.
          </p>

          <button className="px-5 rounded-[30px] py-3 bg-red-600 text-white">
            Visit the Learning Center
          </button>
        </div>
        <Image
          src={"/assets/explore.webp"}
          width={100}
          unoptimized
          height={100}
          alt="explore"
          className="w-full h-auto col-span-2 lg:col-span-1"
        />
      </div>
    </div>
  );
};

export default Explore;
