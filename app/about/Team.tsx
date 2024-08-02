import Image, { StaticImageData } from "next/image";
import React from "react";
import pic from "@/public/vercel.svg";
import TeamMember from "./TeamMember";

interface TeamMemberProps {
	name: string;
	role: string;
	imageSrc: StaticImageData;
}

const Team: React.FC = () => {
	const teamMembers: TeamMemberProps[] = [
		{
			name: "Robert N. Bragg",
			role: "FOUNDER",
			imageSrc: pic,
		},
		{
			name: "John Doe",
			role: "DESIGNER",
			imageSrc: pic,
		},
		{
			name: "Jane Smith",
			role: "DEVELOPER",
			imageSrc: pic,
		},
	];

	return (
		<div className="min-h-screen flex items-center justify-center p-8 flex-col">
			<div className="flex items-center text-sm font-semibold uppercase text-gray-500 mb-6 text-[21px]">
				<div className="md:w-[60px] mr-4 w-[60px] h-[1px] bg-black" />
				OUR TEAM
				<div className="md:w-[60px] ml-4 w-[60px] h-[1px] bg-black" />
			</div>
			<h1 className="text-center mb-5 text-[35px] font-bold leading-9">
				Meet people behind <br /> our company
			</h1>
			<div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
				{teamMembers.map((member, index) => (
					<TeamMember
						key={index}
						name={member.name}
						role={member.role}
						imageSrc={member.imageSrc}
					/>
				))}
			</div>
		</div>
	);
};

export default Team;
