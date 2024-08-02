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
					Increase order volume and size (and, as a result, profits)
					with Promotions that provide customers with discounts or
					free items only when they reach a specific minimum order
					size. If you already offer beer, wine, liquor, or cocktails
					in-store, add alcohol to your DoorDash menu to help increase
					ticket sizes and reach customers looking to order both food
					and alcohol.
				</p>
			</div>
			<div className="w-full sm:w-1/2 p-4">
				<Image
					src={growImage}
					alt="Grow with DoorDash"
					layout="responsive"
				/>
			</div>
		</div>
	);
};

export default Grow;
