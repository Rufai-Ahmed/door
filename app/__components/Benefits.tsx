import { benefitData } from "@/public/data/data";
import { iBenefit } from "@/public/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";

const Benefits = () => {
	return (
		<div className="container mx-auto px-4 py-[80px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px] min-h-[500px] flex items-center gap-16 flex-wrap lg:flex-nowrap">
			<div className="w-full lg:w-[60%] ">
				<div className="w-full space-y-5  border-b pb-10">
					<h5 className="uppercase text-[16px] font-bold flex items-center">
						<div className="md:w-[60px] w-[60px] mr-2 h-[1px] bg-black" />
						why choose us
					</h5>

					<h2 className="text-[40px] font-semibold leading-tight">
						Amazing benefits with us
					</h2>

					<p className="">
						Shall under In yielding saying given dominion don&apos;t
						of two god which said. Creature dominion was the good
						creepeth to give bring doesn&apos;t first shall two signs
						is a gathered set of people.
					</p>

					<div>
						<Link
							href={"/services"}
							className="text-blue-500 underline "
						>
							<b>Book a service now</b>
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-1  mt-10 md:grid-cols-2 gap-4">
					{benefitData.map((el: iBenefit, i: number) => (
						<div
							key={i}
							className="flex items-start gap-3"
						>
							<div className="bg-[#fba311] text-white w-16 h-16 rounded-full flex items-center justify-center text-[26px]">
								{el.icon}
							</div>

							<div className="w-[70%]">
								<h5 className="text-[20px]">
									<b>{el.b}</b>
								</h5>
								<p className="">{el.p}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="w-full lg:w-[40%] relative">
				<Image
					src={"/assets/benefit.jpg"}
					alt="cleaner"
					width={100}
					height={100}
					unoptimized
					className="w-full h-full object-contain"
				/>
				<Image
					src={"/assets/dots.svg"}
					alt="cleaner"
					width={1000}
					height={1000}
					className="w-[120px] lg:w-[200px] h-[120px] lg:h-[200px] object-contain lg:-bottom-16 -bottom-9 -right-2 lg:-right-16 -z-50 absolute"
				/>
			</div>
		</div>
	);
};

export default Benefits;
