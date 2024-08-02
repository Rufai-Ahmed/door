"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const PricingPage = () => {
	const handleEmailClick = () => {
		window.location.href =
			"mailto:contact@cleaningservice.com?subject=Cleaning%20Service%20Inquiry&body=I%20would%20like%20to%20inquire%20about%20your%20cleaning%20services.";
	};

	return (
		<div className="w-full min-h-screen bg-white flex flex-col items-center">
			<main className="w-full py-16 bg-white flex flex-col items-center">
				<div className="container mx-auto text-center px-4 ">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-800">
						Cleaning Services Pricing
					</h1>
					<p className="mt-4 text-lg md:text-xl text-gray-600">
						Our pricing varies based on the size of the area. Please
						contact us for a detailed quote.
					</p>
				</div>
			</main>

			<section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
				{["Basic", "Professional", "Enterprise"].map(
					(plan, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
						>
							<h2 className="text-3xl font-bold text-gray-800">
								{plan} Plan
							</h2>
							<p className="mt-4 text-lg text-gray-600">
								{plan === "Basic" &&
									"Our entry-level plan for standard cleaning needs."}
								{plan === "Professional" &&
									"Ideal for larger cleaning needs and frequent services."}
								{plan === "Enterprise" &&
									"Comprehensive services for large scale and custom needs."}
							</p>
							<ul className="mt-4 text-left text-gray-600 space-y-2">
								<li>✔ Custom schedules every day</li>
								<li>✔ Carpet Cleaning</li>
								<li>✔ Windows Cleaning</li>
								<li>✔ Floor Vacuum Clean</li>
								<li>✔ Bathrooms Cleaning</li>
								<li>✔ Kitchen Cleaning</li>
							</ul>
							<button
								onClick={handleEmailClick}
								className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
							>
								Contact Us
								<FaAngleRight className="ml-2" />
							</button>
						</div>
					)
				)}
			</section>
		</div>
	);
};

export default PricingPage;
