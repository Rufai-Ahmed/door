import React, { Dispatch, FC, SetStateAction } from "react";
import {
	BsX,
	BsClock,
	BsInstagram,
	BsTwitterX,
} from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import Link from "next/link";
import { navData } from "@/public/data/data";
import { iNav } from "@/public/utils/interfaces";

const MobileSideBar: FC<{
	setToggle: Dispatch<SetStateAction<boolean>>;
	toggle: boolean;
}> = ({ setToggle, toggle }) => {
	const onToggle = () => {
		const timeout = setTimeout(() => {
			setToggle(!toggle);
			clearTimeout(timeout);
		}, 500);
	};

	return (
		<aside
			className={`fixed lg:hidden top-0 z-50 h-screen w-full duration-300 bg-white shadow-md ${
				toggle ? "right-0" : "-right-full"
			}`}
		>
			<div
				className="absolute right-2 top-3"
				onClick={onToggle}
			>
				<BsX className="cursor-pointer" />
			</div>

			<div className="flex flex-col mt-5 h-full space-y-3 text-[14px] font-semibold overflow-y-auto">
				{navData.map((el: iNav, i: number) => (
					<Link
						className="px-4 capitalize"
						onClick={onToggle}
						href="#"
						key={i}
					>
						{el.name}
					</Link>
				))}
				<div className="px-4">
					<div className="flex flex-col items-start font-semibold gap-4 mb-4">
						<div className="flex items-center gap-2">
							<FaPhone
								size={15}
								className="text-blue-400"
							/>
							<small>+1 (404) 942-9047</small>
						</div>

						<div className="flex items-center gap-2">
							<BsClock
								size={15}
								className="text-blue-400"
							/>
							<small>
								Mon - Fri: 9:00 - 19:00 / Closed on Weekends
							</small>
						</div>

						<div className="flex items-center gap-2">
							<CgMail
								size={22}
								className="text-blue-400"
							/>
							<small>topkemcompany@gmail.com</small>
						</div>
					</div>

					<div className="flex items-center mb-4 w-[100px]">
						<FaFacebook
							size={24}
							className="text-blue-600 hover:text-blue-700 duration-300 cursor-pointer"
						/>
						<BsTwitterX
							size={24}
							className="text-gray-900 hover:text-black duration-300 cursor-pointer"
						/>
						<a href="https://www.instagram.com/topkemcleaningservice/">
							<BsInstagram
								size={24}
								className="hover:text-pink-600 text-pink-500 duration-300 cursor-pointer"
							/>
						</a>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default MobileSideBar;
