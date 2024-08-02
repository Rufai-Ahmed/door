import React from "react";
import PriceForm from "./PriceForm";

const PriceHero = () => {
	return (
		<div className="relative w-full">
			<main
				className="w-full h-[600px] md:h-[700px] bg-cover bg-no-repeat bg-hero relative"
				style={{ backgroundImage: `url('/assets/price.jpg')` }}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-950 via-[#361472d9] to-transparent flex flex-col justify-center">
					<div className="container px-4 text-wrap mx-auto text-white md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px] flex justify-center items-center flex-col">
						<h6 className="md:text-[15px] font-semibold text-left tracking-widest flex items-center">
							<div className="md:w-[60px] w-[60px] mr-4 h-[1px] bg-white" />
							PRICING
							<div className="md:w-[60px] w-[60px] ml-4 h-[1px] bg-white" />
						</h6>
						<div className="mt-4 text-[35px] md:text-[60px]">
							<h1 className="font-bold md:leading-[79px] text-center leading-tight">
								Our Pricing is <br /> simple
							</h1>
						</div>
						<div className="flex mt-2 justify-center items-center">
							<div className="flex justify-center items-center">
								<p className="md:text-[20px] text-[14px] w-[100%] text-white/70 md:leading-[39px] text-center font-normal">
									We offer a simple and flexible pricing for all types{" "}
									<br />
									of cleaning whether it is residential or industrial{" "}
									<br />
									cleaning.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full h-[100px] absolute -bottom-1 overflow-hidden">
						<svg
							version="1.1"
							className="w-full h-full"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 1366 231"
							preserveAspectRatio="none"
						>
							<path
								fill="#ffffff"
								d="M0,54c0,0,106,134,307,101c246-63,285-39,368-22c106,33,225,90,292,62c109-39,255-191,399-178 c0,128,0,214,0,214H0V54z"
							></path>
							<path
								fill="#ffffff"
								style={{ opacity: 0.45 }}
								d="M-1,231h188h1178c0,0,2-104,0-214c-297,10-383,309-632,143c-39,0-122,51-325-17C172,216-1,31-1,31"
							></path>
							<path
								fill="#ffffff"
								style={{ opacity: 0.45 }}
								d="M1366,227c0,0,0-71.03,0-203c-198-44-439,252-559,156c-13,1,0.7-9.44-53-20c-116.23-22.86-254.55-23.5-371-17 C157,121-4,172.01-4,172.01"
							></path>
						</svg>
					</div>
				</div>
			</main>
			<div className="absolute inset-0 flex items-center justify-center mt-[750px] md:mt-[740px]">
				<PriceForm />
			</div>
		</div>
	);
};

export default PriceHero;
