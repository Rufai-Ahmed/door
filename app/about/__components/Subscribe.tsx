"use client";
import React, { useRef } from "react";
import { sendMail } from "./option";

const Subscription: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const formAction = async (formData: FormData) => {
		try {
			const email = formData.get("email") as string;
			await sendMail(email);

			formData = new FormData();

			if (inputRef.current) {
				inputRef.current.value = "";
			}
		} catch (error) {
			console.error("Error sending email:", error);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-96 bg-custom-gradient">
			<div className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-9 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px]">
				<div className="w-full md:w-[40%] flex flex-col md:flex-wrap mb-4 md:mb-0">
					<div className="flex items-center text-sm font-semibold uppercase text-white mb-4 text-[21px]">
						<div className="md:w-[60px] mr-4 w-[60px] h-[1px] bg-gray-400" />
						Subscribe
					</div>
					<h1 className="text-white text-[30px] md:text-[30px] font-medium mb-4 text-center md:text-left leading-9">
						Join our subscription and get instant{" "}
						<span className="font-extrabold">updates</span> about{" "}
						<span className="font-extrabold">offers</span> and{" "}
						<span className="font-extrabold">discounts.</span>
					</h1>
				</div>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						const formData = new FormData(
							e.target as HTMLFormElement
						);
						formAction(formData);
					}}
					className="w-full md:w-[40%] flex flex-col justify-center"
				>
					<div className="flex items-center p-1 rounded-md bg-white w-full mt-4 md:mt-0">
						<input
							ref={inputRef}
							type="email"
							name="email"
							placeholder="Enter your email address to subscribe"
							className="flex-1 placeholder:text-[11px] placeholder:md:text-[15px] p-2 rounded-l-md focus:outline-none text-gray-700"
						/>
						<button
							type="submit"
							className="bg-[#fba311] text-white p-3 px-5 rounded-md"
						>
							Go
						</button>
					</div>
					<p className="text-white mt-2 text-[15px] text-center md:text-left">
						Please read Terms and Conditions before subscribing to the
						news
					</p>
				</form>
			</div>
		</div>
	);
};

export default Subscription;
