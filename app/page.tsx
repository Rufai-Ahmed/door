import React from "react";
import Hero from "./__components/Hero";
import Company from "./__components/Tabs";
import HIW from "./__components/HIW";
import Services from "./__components/Services";
import Benefits from "./__components/Benefits";
import Subscription from "./about/__components/Subscribe";
import Testimonials from "./pricing/Testimonials";
import Commitment from "./__components/Commitment";
import More from "./__components/More";
import Explore from "./__components/Explore";
import Opportunity from "./__components/Opportunity";

const page = () => {
  return (
    <div className="text-black">
      <Hero />
      <Company />
      <HIW />
      <Services />
      <Commitment />
      <More />
      <Explore />
      <Opportunity />
    </div>
  );
};

export default page;
