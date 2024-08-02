import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { servicesData } from "@/public/data/data";
import { iService } from "@/public/utils/interfaces";
import Link from "next/link";

const Services = () => {
	return (
		<div className="container mx-auto px-4 py-[80px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px] min-h-[1000px]">
			<div className="w-full flex items-center flex-col justify-center">
				<h5 className="uppercase text-[16px] font-bold flex items-center">
					<div className="md:w-[60px] w-[60px] mr-1 h-[1px] bg-black" />
					our services
					<div className="md:w-[60px] w-[60px] ml-1 h-[1px] bg-black" />
				</h5>

				<h2 className="text-[38px] my-5 text-center leading-tight font-bold">
					We are providing all kind <br />
					of cleaning services
				</h2>
			</div>

			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9">
				{servicesData.map((el: iService, i: number) => (
					<div
						key={i}
						className=" group hover:shadow-lg duration-300 cursor-pointer min-h-[350px] hover:-mt-5"
					>
						<div className="h-[70%]">
							<Image
								src={el.img!}
								className="w-full h-full rounded-t-md object-cover"
								alt={el.type!}
								width={100}
								unoptimized
								height={100}
							/>
						</div>
						<div className="h-[30%] rounded-b-md border border-t-0 px-7 flex items-center justify-between">
							<div className="space-y-4">
								<h5 className="xl:text-[19px] font-semibold group-hover:text-blue-500 duration-300 ">
									{el.type}
								</h5>
								<p className="text-[13px]">
									Starting from <b>{el.price}</b>
								</p>
							</div>

							<Link href={"/pricing"}>
								<div className="rounded-full w-10 h-10 flex items-center justify-center group-hover:text-white group-hover:bg-blue-500 border text-blue-500 text-[20px] duration-300">
									<FaArrowRight />
								</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
