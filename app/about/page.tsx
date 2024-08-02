import React from "react";
import Abouthero from "./Abouthero";
import Goal from "./Goal";
import GridPage from "./Gridpage";
import Team from "./Team";
import Subscription from "./__components/Subscribe";

const page = () => {
	return (
		<div className="">
			<Abouthero />
			<Goal />
			<GridPage />
			{/* <Team /> */}
			<Subscription />
		</div>
	);
};

export default page;
