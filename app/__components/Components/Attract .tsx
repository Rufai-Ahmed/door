"use client";

import React from "react";
import Image from "next/image";
import growImage from "/public/assets/service-4.jpg"; // Ensure the image is in the public/assets directory

const Attract = () => {
	return (
		<div className="flex flex-col sm:flex-row p-4 mt-24">
			<div className="w-full sm:w-1/2 p-4">
				<h2 className="text-3xl font-bold mb-4">
					Attract new customers
				</h2>
				<p className="text-[17] text-gray-700 mb-4">
					The 9jakitchen app offers sponsored listings and featured
					opportunities that provide valuable visibility to attract
					new customers. You can run promotions to offer discounts or
					free items to encourage more orders. This promotion offers
					you the chance to feature your business and products on the
					main banner of our app.
				</p>
				<p className="text-[17] text-gray-700 mb-4">
					A featured listing keeps your business or products at the
					front of our page (Store Front), giving customers a first
					glance at your business name and the product within the city
					from where you operate.
				</p>
			</div>
			<div className="w-full sm:w-1/2 p-4">
				<Image
					src={growImage}
					alt="Grow with 9ja Kitchen"
					layout="responsive"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default Attract;
