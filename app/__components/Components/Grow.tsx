"use client";
import React from "react";
import Image from "next/image";
import growImage from "/public/assets/service-4.jpg"; // Make sure to place your image in the public folder

const Grow = () => {
  return (
    <div className="flex flex-col sm:flex-row p-4 mt-24">
      <div className="w-full sm:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">Grow with 9ja Kitchen</h2>
        <p className="text-[17] text-gray-700 mb-4">
          Expand your reach by listing your restaurant, shop, or store on the
          9ja Kitchen app, also known as Marketplace. Plus, increase sales by
          tapping into DashPass subscribers, who spend and order more on
          average. Included in every partnership is Storefront — customizable
          and commission-free online ordering that lives on your website. Or use
          Drive to offer delivery from your own app or site by tapping into 9ja
          Kitchen’s network of Dashers. Finally, streamline operations with
          Tableside Order & Pay, our in-store QR code ordering and payment
          solution.
        </p>
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <Image
          src={growImage}
          alt="Grow with 9ja Kitchen
"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Grow;
