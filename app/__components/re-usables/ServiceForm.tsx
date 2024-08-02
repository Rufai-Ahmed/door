"use client";
import React from "react";
import Button from "./Button";
import { inputData, serviceOptions } from "@/public/data/data";
import { iInput } from "@/public/utils/interfaces";
import Router from "next/router";
import { useRouter } from "next/navigation";

const ServiceForm = () => {
	const navigate = useRouter();

	const handleSubmit = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = formData.get("name") as string;
		const zip = formData.get("zip") as string;
		const number = formData.get("number") as string;
		const service = formData.get("service") as string;

		localStorage.setItem(
			"details",
			JSON.stringify({ name, zip, number, service })
		);

		const timeout: NodeJS.Timeout = setTimeout(() => {
			navigate.push("/pricing");

			clearTimeout(timeout);
		}, 600);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full rounded-[40px] bg-white shadow-lg p-10 py-16 font-semibold"
		>
			<h3 className="font-bold text-[28px] mb-5 text-center">
				Book a Service
			</h3>

			<div className="space-y-7">
				{inputData.map((el: iInput, i: number) => (
					<div key={i}>
						<label className="capitalize">{el.label}</label>
						<input
							className="w-full border bg-gray-100 outline-blue-700 h-[50px] pl-3 mt-1 rounded-md"
							name={el.name}
							type={el.type}
							required
						/>
					</div>
				))}

				<div>
					<label>Choose a Service</label>
					<select
						name="service"
						className="w-full border bg-gray-100 outline-blue-700 capitalize px-2 h-[50px] mt-1 rounded-md"
						defaultValue={serviceOptions[0]}
						required
					>
						{serviceOptions.map((el: string, i: number) => (
							<option
								key={i}
								value={el}
							>
								{el}
							</option>
						))}
					</select>
				</div>

				<Button
					type="submit"
					className="w-full text-[18px] py-3"
				>
					Submit Details
				</Button>
			</div>
		</form>
	);
};

export default ServiceForm;
