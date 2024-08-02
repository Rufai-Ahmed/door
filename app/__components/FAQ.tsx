import React from "react";
import { FaAngleDown } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%] md:w-[700px] ">
        <h1 className="mb-4">Frequently asked questions</h1>

        <div className="space-y-3">
          {Array.from({ length: 7 }).map((el: unknown, i: number) => (
            <div className="pl-2 border-b border flex justify-between items-center">
              What are the pricing plan differences
              <FaAngleDown />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
