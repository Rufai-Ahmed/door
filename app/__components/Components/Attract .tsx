"use client";
import React from "react";
import Image from "next/image";
import growImage from "/public/assets/service-4.jpg"; // Make sure to place your image in the public folder

const Attract = () => {
	return (
		<div className="flex flex-col sm:flex-row p-4 mt-24">
			<div className="w-full sm:w-1/2 p-4">
				<h2 className="text-3xl font-bold mb-4">
					Attract new customers
				</h2>
				<p className="text-[17] text-gray-700 mb-4">
					Sponsored Listings give you prime real estate in the
					DoorDash app so you get noticed by new customers. Promotions
					let you offer discounts or free items to encourage customers
					to place orders, and Storefront promotions use similar
					incentives to get customers to place commission-free orders
					directly on your website. Brand Licensing lets you add a
					revenue stream by selling an established, well-known brand
					out of your restaurant’s kitchen.
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

export default Attract;
