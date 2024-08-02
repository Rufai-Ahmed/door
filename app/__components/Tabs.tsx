"use client";
import React, { useState } from "react";
import Grow from "./Components/Grow";
import Attract from "./Components/Attract ";
import Increase from "./Components/Increase";
import Access from "./Components/Access";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("grow");

  return (
    <div className="p-4 mt-52">
      <div className="text-center mb-8 space-y-3">
        <h1 className="text-4xl font-bold">Delivering more</h1>
        <p className="text-lg text-gray-600">
          When you think of DoorDash, you think of delivery — but the DoorDash
          Merchant Suite delivers many ways to help you grow.
        </p>
      </div>

      <div className="p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "grow"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("grow")}
          >
            Grow your business
          </button>
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "attract"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("attract")}
          >
            Attract new customers
          </button>
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "increase"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("increase")}
          >
            Increase order volume & size
          </button>
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "finance"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("finance")}
          >
            Access financing
          </button>
        </div>

        <div className="mt-4">
          {activeTab === "grow" && (
            <div>
              <Grow />
            </div>
          )}
          {activeTab === "attract" && (
            <div>
              <Attract />
            </div>
          )}
          {activeTab === "increase" && (
            <div>
              <Increase />
            </div>
          )}
          {activeTab === "finance" && (
            <div>
              <Access />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
