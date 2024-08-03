import React from "react";
import { FiSend } from "react-icons/fi";
import Image from "next/image";
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white pb-8">
      <div className="py-5 bg-red-600 px-4 flex justify-between items-center">
        <Image
          src={"/assets/topkemLogo.png"}
          alt="Logo"
          width={100}
          height={100}
          unoptimized
          className="w-[150px] h-auto "
        />

        <p>Become a Partner </p>
      </div>

      <div className="px-4 pt-10 py-7 grid justify-center lg:justify-normal gap-5 lg:gap-0 grid-cols-5">
        <Image
          src={"/assets/illustration.svg"}
          width={100}
          unoptimized
          height={100}
          alt="Illustration"
          className="col-span-5 lg:col-span-1 w-[40%] lg:w-[70%]"
        />
        <div className="col-span-3 flex flex-wrap justify-between gap-4 space-y-3 md:space-y-0 lg:gap-0">
          <div className="space-y-3">
            <h3>
              <b>PRODUCTS</b>
            </h3>

            {["Marketplace", "Storefront", "On-Demand Delivery"].map(
              (el: string, i: number) => (
                <nav key={i}>{el}</nav>
              )
            )}

            <nav className="flex items-center gap-5">
              <b>All Products</b>

              <BsArrowRight size={20} />
            </nav>
          </div>

          <div className="space-y-3">
            <h3>
              <b>BUSINESS TYPES</b>{" "}
            </h3>

            {[
              "Restaurants",
              "Grocery",
              "On-Alcohol",
              "Convenience",
              "Flower Shops",
              "Pet Stores",
              "Retail",
            ].map((el: string, i: number) => (
              <nav key={i}>{el}</nav>
            ))}

            <nav className="flex items-center gap-5">
              <b>All Products</b>

              <BsArrowRight size={20} />
            </nav>
          </div>

          <div className="space-y-3">
            <h3>
              <b>RESOURCES</b>
            </h3>

            {[
              "Merchant Blog",
              "Learning Center",
              "Guides & Webinars",
              "Benefits & Discounts",
              "Advocacy & Access",
              "Help & FAQ",
            ].map((el: string, i: number) => (
              <nav key={i}>{el}</nav>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-5">
          <BsTwitterX size={20} />
          <BsFacebook size={20} />
          <BsInstagram size={20} />
          <BsLinkedin size={20} />
        </div>
      </div>
      <div className="px-4 pt-10 py-7 grid items-center justify-between grid-cols-5">
        <select className="rounded-[30px] h-[40px] bg-white col-span-5 lg:col-span-1 text-black w-full lg:w-[70%]">
          <option value={"english"}>English (US) </option>
          <option>English (US) </option>
        </select>

        <div className="col-span-5 lg:col-span-3">
          <div className="flex text-center text-[14px] md:text-[18px] items-start justify-center">
            Terms | Privacy | Referral | Program COVID-19 | Do Not Sell or Share
            My Personal Information
          </div>
        </div>

        <p className="text-[16px] col-span-5 lg:col-span-1 text-center lg:text-start">
          <b>&copy;2022 9ja Kitchen</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
