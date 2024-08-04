"use client";

import { useState } from "react";
import Image from "next/image";

interface Vendor {
	title: string;
	imgSrc: string;
	description: string;
	link: string;
}

const Category = () => {
	// Array of vendor information
	const vendors: Vendor[] = [
		{
			title: "Restaurant Owners",
			imgSrc: "/assets/resowner.jpg",
			description: `Reach a wider audience and attract more customers to your restaurant. Register to expand your business and showcase your delicious cuisine to potential patrons. By registering with us, you'll have the opportunity to increase your visibility and grow your customer base. Don't miss this opportunity to take your restaurant to the next level. 9jakitchen offers services like reservations, home delivery, pick-up, and dine-in options for your potential customers. We invite you to register with us today and elevate your business to new heights.`,
			link: "https://admin.9jakitchen.com/register",
		},
		{
			title: "Caterers",
			imgSrc: "/assets/caterers.jpg",
			description: `Expand your customer base and attract a wider audience for your culinary creations. Register now to grow your business and showcase your delicious cuisine to potential customers. Registration will increase your visibility and attract more patrons. Don't miss this opportunity to take your catering business to the next level. 9jakitchen offers services like reservations, home delivery, pick-up, and dine-in options for your potential customers. Register today and elevate your business to new heights!`,
			link: "https://9jakitchen.com/caterer/register",
		},
		{
			title: "Bakers",
			imgSrc: "/assets/Baker.jpg",
			description: `Register with us to showcase your delicious creations to a wider audience. By registering, you'll have the opportunity to reach more customers and expand your business. Don't miss this chance to take your baking business to the next level. 9jakitchen offers services like reservations, home delivery, pick-up, and dine-in options for your potential customers. We invite you to register with us today and elevate your presence in the food delivery market!`,
			link: "https://9jakitchen.com/baker/register",
		},
		{
			title: "Chefs",
			imgSrc: "/assets/chefs.jpg",
			description: `If you are a talented chef register with us to showcase your culinary expertise to a wider audience. By joining our platform, you'll attract more customers and expand your reach. Don't miss out on the chance to elevate your career and business. 9jakitchen offers services like reservations, home delivery, pick-up, and dine-in options for your potential customers. We invite you to register with us today and take your culinary skills to new heights!`,
			link: "https://9jakitchen.com/chef/register",
		},
		{
			title: "Club and Bar Owners",
			imgSrc: "/assets/Bar.jpg",
			description: `Are you looking to expand your business and attract more customers? We have an exciting opportunity for you. By registering your establishment with our platform, you can reach a wider audience and take your business to new heights. Don't miss out on this chance to grow your clientele and elevate your establishment. 9jaKitchen offers services like reservations, home delivery, pick-up, and dine-in for potential customers. Join us today and let's take your club or bar to the next level.`,
			link: "https://admin.9jakitchen.com/register",
		},
	];

	return (
		<div className="w-full min-h-[500px] py-[60px] flex justify-center bg-gray-100">
			<div className="container mx-auto px-4">
				<h1 className="text-[30px] text-center font-medium mb-6">
					Vendors Category
				</h1>
				<p className="text-[20px] text-center mb-8">
					Take your business to the next level by expanding with us.
					Easy, accessible financing can help eligible merchants
					invest in new equipment, open a new location, hire more
					employees, and much more.
				</p>

				<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
					{vendors.map((vendor, i) => (
						<VendorCard
							key={i}
							vendor={vendor}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

interface VendorCardProps {
	vendor: Vendor;
}

const VendorCard = ({ vendor }: VendorCardProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded);
	};

	const shortDescription =
		vendor.description.substring(0, 150) + "...";

	return (
		<div className="w-full flex flex-col items-center p-6 ">
			<h2 className="text-lg font-semibold mb-4">{vendor.title}</h2>
			<div className="w-48 h-48 bg-green-500 overflow-hidden rounded-full mb-4">
				<Image
					src={vendor.imgSrc}
					width={192}
					height={192}
					alt={`vendor-${vendor.title}`}
					className="w-full h-full object-cover"
				/>
			</div>
			<p className="text-center mb-4">
				{isExpanded ? vendor.description : shortDescription}
			</p>
			<button
				onClick={toggleReadMore}
				className="text-blue-500 mb-4"
			>
				{isExpanded ? "Show less" : "Read more"}
			</button>
			<a
				href={vendor.link}
				target="_blank"
				rel="noopener noreferrer"
				className="px-6 py-2 text-white text-[16px] bg-black hover:bg-red-500 transition-colors duration-300 rounded"
			>
				Register
			</a>
		</div>
	);
};

export default Category;
