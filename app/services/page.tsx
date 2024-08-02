import React from "react";
import Hero from "./__components/Hero";
import Services from "./__components/Services";
import Testimonials from "../pricing/Testimonials";

const page = () => {
	return (
		<div className="overflow-hidden w-full">
			<Hero />
			<Services />
			<Testimonials />
		</div>
	);
};

export default page;
