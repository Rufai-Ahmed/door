"use client";

import Image from "next/image";
import React, { useState } from "react";
import pic from "@/public/assets/dummy.jpg";

const testimonials = [
	{
		name: "Chi R. Quinlan",
		location: "Carrolton",
		text: "“TopKem has transformed my home with their outstanding cleaning services. Their attention to detail and professionalism are unparalleled. I highly recommend them!”",
		rating: 5,
	},
	{
		name: "Donald Slade",
		location: "Texas",
		text: "“Excellent service! The team at TopKem is reliable, efficient, and always does a fantastic job. My office has never looked better.”",
		rating: 5,
	},
	{
		name: "John Doe",
		location: "Denton",
		text: "“TopKem's cleaning services are top-notch. They are thorough, timely, and their customer service is exceptional. I'm a very satisfied customer.”",
		rating: 4,
	},
	{
		name: "Jane Smith",
		location: "Cherry St Georgia",
		text: "“I am so impressed with TopKem. They have consistently provided high-quality cleaning services for my business. Their staff is friendly and professional.”",
		rating: 5,
	},
];

const Testimonials = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [transition, setTransition] = useState(false);
	const testimonialsPerPage = 2;

	const handleClick = (page: number) => {
		setTransition(true);
		setTimeout(() => {
			setCurrentPage(page);
			setTransition(false);
		}, 300);
	};

	const displayedTestimonials = testimonials.slice(
		currentPage * testimonialsPerPage,
		(currentPage + 1) * testimonialsPerPage
	);

	return (
		<section className="w-full py-16 bg-gray-100">
			<div className="w-full max-w-6xl mx-auto text-center">
				<div className="flex items-center justify-center">
					<div className="md:w-[60px] w-[60px] mr-4 h-[1px] bg-black" />
					<h6 className="md:text-[15px] font-semibold">PRICING</h6>
					<div className="md:w-[60px] w-[60px] ml-4 h-[1px] bg-black" />
				</div>
				<center className="mt-5">
					<h3 className="text-[40px] leading-tight font-bold">
						Trusted by thousands of <br /> people & companies.
					</h3>
				</center>
			</div>
			<div
				className={`w-full max-w-6xl mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-300 ${
					transition ? "opacity-0" : "opacity-100"
				}`}
			>
				{displayedTestimonials.map((testimonial, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-md"
					>
						<div className="flex items-center">
							<Image
								src={pic}
								alt={testimonial.name}
								width={64}
								height={64}
								className="w-16 h-16 rounded-full mr-4"
							/>
							<div className="text-left">
								<h3 className="text-xl font-bold text-gray-800">
									{testimonial.name}
								</h3>
								<p className="text-gray-600">
									{testimonial.location}
								</p>
								<div className="text-yellow-500">
									{"★".repeat(testimonial.rating)}
								</div>
							</div>
						</div>
						<p className="mt-4 text-gray-600 italic">
							{testimonial.text}
						</p>
					</div>
				))}
			</div>
			<div className="mt-8 flex justify-center space-x-2">
				{Array.from({
					length: Math.ceil(
						testimonials.length / testimonialsPerPage
					),
				}).map((_, index) => (
					<button
						key={index}
						onClick={() => handleClick(index)}
						className={`w-4 h-4 rounded-full ${
							index === currentPage ? "bg-blue-600" : "bg-gray-300"
						}`}
					></button>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
