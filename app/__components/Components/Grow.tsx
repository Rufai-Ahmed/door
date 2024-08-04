"use client";

import React, { useState } from "react";
import Image from "next/image";
import growImage from "/public/assets/service-4.jpg"; // Ensure the image is in the public/assets directory

const Grow = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded);
	};

	const fullText = `Expand your reach by listing your business on the 9ja Kitchen app. Plus, increase sales by 
  tapping into 9jakitchen subscribers, who spend and order more on average.
  Introducing a Revolutionary Way to Boost Your Business Sales: Sale by Video!
  Are you looking for new and innovative ways to grow your business and increase your sales? 
  Look no further! We are thrilled to announce our latest feature - sale by video option. With this 
  exciting new tool, you can showcase your products or services through video, enabling you to 
  interact with your potential customers in a more engaging and captivating manner.
  This groundbreaking feature allows you to present your offerings in a visually compelling way, 
  providing your audience with an immersive experience that can significantly impact their 
  purchase decisions. By leveraging the power of video, you can communicate your brand's 
  unique value proposition, highlight product features, and demonstrate how your offerings can 
  meet the needs of your target audience.
  In today's fast-paced and digital-centric world, consumers are increasingly turning to video 
  content to inform their purchasing decisions. By embracing sale-by-video, you can tap into this 
  trend and set your business apart from the competition. Whether you run a retail store, a 
  service-based business, or an e-commerce platform, integrating video into your sales strategy 
  can help you connect with customers on a deeper level and drive conversion rates.
  By utilizing our sale by video option, you can effectively showcase your products or services, 
  build trust with your audience, and ultimately boost your sales. Don't miss out on this incredible 
  opportunity to elevate your business to new heights!
  Join us today and discover how our sale-by-video option can revolutionize the way you do 
  business and propel your sales to new levels!`;

	const shortText = fullText.substring(0, 300) + "...";

	return (
		<div className="flex flex-col sm:flex-row p-4 mt-24">
			<div className="w-full sm:w-1/2 p-4">
				<h2 className="text-3xl font-bold mb-4">
					Grow with 9ja Kitchen
				</h2>
				<p className="text-[17] text-gray-700 mb-4">
					{isExpanded ? fullText : shortText}
				</p>
				<button
					onClick={toggleReadMore}
					className="text-blue-500"
				>
					{isExpanded ? "Show less" : "Read more"}
				</button>
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

export default Grow;
