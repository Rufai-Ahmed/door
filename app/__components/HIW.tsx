"use client";
import React from "react";
import Image from "next/image";

const TestimonialPage = () => {
  return (
    <div
      className="flex flex-col sm:flex-row p-4 mt-24"
      style={{ backgroundColor: "#FFF0ED" }}
    >
      <div className="w-full sm:w-1/2 p-4">
        <video
          autoPlay
          playsInline
          controls
          loop
          muted
          className="w-full h-auto"
        >
          <source
            src="https://iframe.cloudflarestream.com/472f6c2fc6c72d2c9214808e3a03410e?preload=none"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full sm:w-1/2 p-4 flex flex-col justify-center">
        <blockquote className="text-lg text-gray-700 mb-4 font-bold">
          &quot;The additional revenue that we receive from DoorDash is very
          helpful. Not only does it provide more sales, but the incremental
          margins on those sales are a lot higher because we&apos;ve already
          covered our fixed costs with our regular business.&quo;
        </blockquote>
        <p className="text-gray-700 mb-4">
          Jamie Schrotberger, CEO, Spread Bagelry
        </p>
        <button className="md:w-1/2 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600">
          Explore plans and pricing
        </button>
      </div>
    </div>
  );
};

export default TestimonialPage;
