import React from "react";
import Image from "next/image";
import Link from "next/link";

const DoorDashPromo: React.FC = () => {
	return (
		<div className="flex items-center bg-[#DC3545] min-h-screen">
			<div className="container mx-auto px-4 h-full flex flex-col lg:flex-row gap-6 py-12 justify-center items-center lg:items-start">
				<div className="relative flex flex-col items-center lg:items-start space-y-4">
					<h1 className="text-white font-bold text-[30px] md:text-[40px] leading-tight text-center lg:text-left">
						Unlock more sales with 9ja Kitchen
					</h1>
					<p className="text-white text-center text-[20px] lg:text-left">
						Create a profile today and get started.
					</p>
					<Link href="#vendor-category">
						<button className="bg-black text-white px-6 py-3 mt-4 hover:bg-[#DDCFC0] hover:text-white transition duration-300">
							Get Started
						</button>
					</Link>
				</div>
				<div className="lg:w-1/2">
					<Image
						width={500}
						height={500}
						unoptimized
						src="/assets/restaurant.jpg"
						alt="How Spread Bagelry drives higher margins with 9ja Kitchen"
						className="w-full rounded"
					/>
				</div>
			</div>
		</div>
	);
};

export default DoorDashPromo;
