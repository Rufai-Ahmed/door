"use client";
import React, { useState } from "react";
import { IoArrowBack, IoChevronDown, IoChevronUp } from "react-icons/io5";

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openHelp, setOpenHelp] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleToggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  const handleToggleHelp = (index: number) => {
    setOpenHelp(openHelp === index ? null : index);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const filteredFAQItems = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm) ||
      item.answer.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 w-full">
      <div className="bg-white p-6">
        <h3 className="text-lg text-center text-[40px] font-semibold mb-2">
          {" "}
          Frequently asked Questions{" "}
        </h3>{" "}
        <div className="mb-4">
          {" "}
          {filteredFAQItems.map((item, index) => (
            <div key={index} className="mb-2">
              {" "}
              <div
                className="cursor-pointer flex justify-between items-center py-2 px-4 border border-gray-300 rounded"
                onClick={() => handleToggleFAQ(index)}
              >
                {" "}
                <span>{item.question}</span>{" "}
                <span>
                  {" "}
                  {openFAQ === index ? <IoChevronUp /> : <IoChevronDown />}{" "}
                </span>{" "}
              </div>{" "}
              {openFAQ === index && (
                <div className="p-4 border border-t-0 border-gray-300 rounded-b">
                  {" "}
                  {item.answer}{" "}
                </div>
              )}{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

const faqItems = [
  {
    question: "Does 9jakitchen.com charge any fees?",
    answer:
      "9jakitchen.com does not charge an activation fee, subscription fee, software fee, cancellation fee, contract fee, or any hidden fees. However, certain fees may be applicable for additional products or services as you opt-in, such as:  If you choose the 9jakitchen.com platform to accept orders, you can use it for free. However, 9jakitchen.com might consider adding commission to vendors. Marketing fees if you choose to use Promotions or Sponsored Listings to grow your sales. Payment processing fees only for Storefront orders, which are commission-free.  ",
  },
  {
    question: " How quickly will I get paid? ",
    answer:
      "Our vendors can receive a weekly direct deposit from 9jakitchen.com or opt-in to daily payouts at no charge.",
  },
  {
    question: "Where can I go if I have more questions? ",
    answer:
      "If you'd like to speak to us, you can contact us online or call us Monday-Friday: (+2347025555569)",
  },
];

export default FAQ;
