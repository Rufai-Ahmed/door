import Image from "next/image";
import { StaticImageData } from "next/image";

interface TeamMemberProps {
	name: string;
	role: string;
	imageSrc: StaticImageData;
}

const TeamMember: React.FC<TeamMemberProps> = ({
	name,
	role,
	imageSrc,
}) => {
	return (
		<div className="group bg-white p-6 rounded-lg flex flex-col items-center text-center transition-shadow hover:shadow-lg hover:border-b-4 cursor-pointer">
			<div className="w-[250px] h-[250px] rounded-full overflow-hidden bg-red-300 flex justify-center items-center">
				<Image
					src={imageSrc}
					alt={name}
					className="rounded-full object-contain"
				/>
			</div>
			<h3 className="text-xl font-bold mt-8 text-gray-900 text-[22px] group-hover:text-[#3B82F6]">
				{name}
			</h3>
			<h3 className="text-xl font-semibold mt-4 text-gray-900 text-[17px]">
				{role}
			</h3>
		</div>
	);
};

export default TeamMember;
