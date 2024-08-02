import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
	return (
		<main className="w-full h-[600px] md:h-[700px]  bg-cover bg-no-repeat bg-servicesHero relative">
			<div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-br  from-violet-950 via-[#361472d9] to-transparent flex flex-col justify-center">
				<div className="container px-4 text-wrap mx-auto text-white md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px]">
					<h6 className="md:text-[25px] font-semibold text-left uppercase tracking-widest flex items-center">
						<div className="md:w-[120px] w-[60px] mr-2 h-[1px] bg-white" />
						our services
					</h6>
					<div className="mt-4 text-[35px] md:text-[50px]">
						<h1 className="font-bold md:leading-[55px] leading-tight">
							Professional cleaning <br /> services for your homes{" "}
							<br /> and offices
						</h1>
					</div>
					<div className="flex mt-10">
						<div className="flex-1">
							<p className="md:text-[20px] text-[14px] w-[100%] text-white/70 leading-tight md:leading-[30px] text-left font-normal">
								We are a professional cleaning company founded in 2020
								and providing leading commercial and residential
								cleaning solutions in the United States.
							</p>
						</div>
						<div className="flex-1"></div>
					</div>
					<div className="mt-6">
						<a
							href="/pricing"
							className="inline-flex items-center px-6 py-3 text-lg font-bold text-white bg-yellow-500 rounded-lg gap-2 shadow-lg duration-300 hover:bg-yellow-400"
						>
							GO TO PRICING
							<FaAngleRight />
						</a>
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
	);
};

export default Hero;
