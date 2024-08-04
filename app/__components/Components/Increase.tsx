"use client";
import React from "react";
import Image from "next/image";
import growImage from "/public/assets/service-4.jpg"; // Make sure to place your image in the public folder

const Grow = () => {
	return (
		<div className="flex flex-col sm:flex-row p-4 mt-24">
			<div className="w-full sm:w-1/2 p-4">
				<h2 className="text-3xl font-bold mb-4">
					Increase order volume & size
				</h2>
				<p className="text-[17] text-gray-700 mb-4">
					Boost your sales and profits by offering promotions that
					provide discounts or free items when customers reach a
					specific minimum order size. If you already offer beer,
					wine, liquor, or cocktails in-store, consider adding alcohol
					to your 9jaKitchen menu to increase order sizes and attract
					customers seeking to order food and alcohol.
				</p>
			</div>
			<div className="w-full sm:w-1/2 p-4">
				<Image
					src={growImage}
					alt="Grow with 9ja Kitchen"
					layout="responsive"
				/>
			</div>
		</div>
	);
};

export default Grow;
