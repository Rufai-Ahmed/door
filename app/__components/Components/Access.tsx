"use client";
import React from "react";
import Image from "next/image";
import growImage from "/public/assets/service-4.jpg"; // Make sure to place your image in the public folder

const Grow = () => {
  return (
    <div className="flex flex-col sm:flex-row p-4 mt-24">
      <div className="w-full sm:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">Access financing</h2>
        <p className="text-[17] text-gray-700 mb-4">
          Take your business to the next level by expanding with 9Ja Kitchen
          Capital. Easy, accessible financing can help eligible merchants invest
          in new equipment, open a new location, hire more employees, and much
          more.
        </p>
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <Image
          src={growImage}
          alt="Grow with 9Ja Kitchen"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Grow;
