import React from "react";
import Hero from "./__components/Hero";
import Company from "./__components/Tabs";
import HIW from "./__components/HIW";
import Services from "./__components/Services";
import Commitment from "./__components/Commitment";
import More from "./__components/More";
import Explore from "./__components/Explore";
import Opportunity from "./__components/Opportunity";
import FAQ from "./__components/FAQ";
import Category from "./__components/Category";

const page = () => {
	return (
		<div className="text-black">
			<Hero />
			<Category />
			<Company />
			<FAQ />
		</div>
	);
};

export default page;
