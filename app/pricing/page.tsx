import React from "react";
import PriceHero from "./PriceHero";
import PricingPage from "./PricingPage";
import PriceForm from "./PriceForm";
import Testimonials from "./Testimonials";

const page = () => {
	return (
		<div>
			<PriceHero />
			{/* <PricingPage /> */}
			{/* <PriceForm /> */}

			<div className="mt-[650px] md:mt-[350px]">
				<Testimonials />
			</div>
		</div>
	);
};

export default page;
