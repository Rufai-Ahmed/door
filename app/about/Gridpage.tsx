import {
	FaRegSmile,
	FaRegLightbulb,
	FaRegHeart,
} from "react-icons/fa";

interface CardProps {
	icon: JSX.Element;
	title: string;
	description: string;
}

const cards: CardProps[] = [
	{
		icon: (
			<FaRegSmile
				size={48}
				className="text-gray-700 group-hover:text-[#3B82F6]"
			/>
		),
		title: "Our Aim",
		description:
			"At TopKem, we strive to deliver top-quality cleaning services, creating spotless and refreshing spaces for homes and businesses through our eco-friendly methods and dedicated team.",
	},
	{
		icon: (
			<FaRegLightbulb
				size={48}
				className="text-gray-700 group-hover:text-[#3B82F6]"
			/>
		),
		title: "Company Vision",
		description:
			"TopKem envisions a world where cleanliness and sustainability go hand in hand, making every environment healthier and more enjoyable for everyone.",
	},
	{
		icon: (
			<FaRegHeart
				size={48}
				className="text-gray-700 group-hover:text-[#3B82F6]"
			/>
		),
		title: "The Procedure",
		description:
			"Topkem, a premier cleaning service, provides thorough and efficient cleaning solutions tailored to meet your needs, ensuring a pristine environment for your home or business.",
	},
];

const GridPage: React.FC = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
			<div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
				{cards.map((card, index) => (
					<div
						key={index}
						className="group bg-white p-6 rounded-lg flex flex-col items-center md:items-start transition-shadow hover:shadow-lg hover:border-b-4 hover:border-[#3B82F6] cursor-pointer"
					>
						<div className="mb-4">{card.icon}</div>
						<div className="text-center md:text-left">
							<h3 className="text-xl font-semibold mb-3 text-gray-900 text-[22px]">
								{card.title}
							</h3>
							<p className="text-gray-600 text-[20px] leading-8">
								{card.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GridPage;
