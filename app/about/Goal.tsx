import Image from "next/image";
import pic from "@/public/assets/clean.jpg";

const Goal = () => {
	return (
		<div className="min-h-screen flex items-center justify-center p-8 bg-white">
			<div className="max-w-7xl w-full flex flex-col lg:flex-row items-center relative">
				<div className="w-full lg:w-1/2 p-4">
					<div className="text-left">
						<div className="flex items-center text-sm font-semibold uppercase text-gray-500 mb-4 text-[21px]">
							<div className="md:w-[60px] mr-4 w-[60px] h-[1px] bg-black" />
							Our Goal
						</div>
						<h2 className="text-5xl font-bold text-gray-900 mb-4">
							It all started with just <br /> three people
						</h2>
						<p className="text-gray-700 mb-6 font-light text-[22px]">
							Topkem Cleaning Services started with three dedicated
							individuals driven by a passion for cleanliness and
							service excellence. From these beginnings, we&apos;ve
							evolved into a trusted name in the cleaning industry,
							providing tailored solutions that prioritize quality,
							reliability, and customer satisfaction.
						</p>
						<p className="text-gray-700 text-[17px]">
							Topkem Cleaning Services started with a passionate team
							committed to excellence in cleanliness. We deliver
							meticulous care and attention to detail in residential,
							commercial, and specialized cleaning projects. Our goal
							is to create refreshing, inviting spaces that promote a
							healthier lifestyle. Experience the difference with
							Topkem and transform your environment today.
						</p>
					</div>
				</div>
				<div className="w-full lg:w-1/2 p-4 relative flex justify-center items-center">
					<div className="relative z-10">
						<Image
							src={pic}
							alt="Team"
							width={500}
							height={500}
							className="rounded-lg object-contain"
						/>
					</div>
					<div className="absolute z-0 w-[120px] lg:w-[200px] h-[120px] lg:h-[200px] lg:top-0 top-9 right-2 lg:right-10">
						<Image
							src="/assets/dots.svg"
							alt="Dots"
							width={200}
							height={200}
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Goal;
