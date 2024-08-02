"use client";
import { useState } from "react";
import {
	AiOutlineDown,
	AiOutlineSearch,
	AiOutlineGlobal,
} from "react-icons/ai";
import Image from "next/image";

interface NavItem {
	name: string;
	link?: string; // Make 'link' optional
	dropdown?: NavItem[];
}

const navData: NavItem[] = [
	{
		name: "Products",
		dropdown: [
			{ name: "Product 1", link: "/products/1" },
			{ name: "Product 2", link: "/products/2" },
		],
	},
	{
		name: "Solutions",
		dropdown: [
			{ name: "Solution 1", link: "/solutions/1" },
			{ name: "Solution 2", link: "/solutions/2" },
		],
	},
	{
		name: "Business Types",
		dropdown: [
			{ name: "Type 1", link: "/business/1" },
			{ name: "Type 2", link: "/business/2" },
		],
	},
	{
		name: "Resources",
		dropdown: [
			{ name: "Merchant Blog", link: "/resources/blog" },
			{ name: "Learning Center", link: "/resources/learning" },
			{ name: "Success Stories", link: "/resources/success" },
			{ name: "Guides & Webinars", link: "/resources/guides" },
			{ name: "Benefits & Discounts", link: "/resources/benefits" },
			{ name: "Advocacy & Access", link: "/resources/advocacy" },
			{ name: "Help & FAQ", link: "/resources/help" },
		],
	},
	{ name: "Pricing" },
	{ name: "Contact" },
];

const Header = () => {
	const [activeDropdown, setActiveDropdown] = useState<number | null>(
		null
	);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleDropdown = (index: number) => {
		setActiveDropdown(activeDropdown === index ? null : index);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-white shadow-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 flex justify-between items-center py-3">
				{/* Logo */}
				<div className="flex items-center space-x-2 cursor-pointer">
					<Image
						src="/assets/topkemLogo.png"
						alt="Logo"
						className="w-8 h-8"
						width={50}
						height={50}
					/>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="focus:outline-none text-gray-500"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d={
									isMenuOpen
										? "M6 18L18 6M6 6l12 12"
										: "M4 6h16M4 12h16m-7 6h7"
								}
							/>
						</svg>
					</button>
				</div>

				{/* Navigation */}
				<nav
					className={`lg:flex space-x-4 ${
						isMenuOpen ? "block" : "hidden"
					}`}
				>
					<ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
						{navData.map((item, index) => (
							<li
								key={index}
								className="relative group"
							>
								<div
									className="flex items-center cursor-pointer space-x-1"
									onClick={() => toggleDropdown(index)}
								>
									<span className="hover:text-red-600">
										{item.name}
									</span>
									{item.dropdown && <AiOutlineDown />}
								</div>
								{/* Dropdown menu */}
								{item.dropdown && activeDropdown === index && (
									<ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-10 group-hover:block">
										{item.dropdown.map((subItem, subIndex) => (
											<li key={subIndex}>
												<a
													href={subItem.link ?? "#"}
													className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
												>
													{subItem.name}
												</a>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</nav>

				{/* Right Side Icons and Buttons */}
				<div className="hidden lg:flex items-center space-x-4">
					<AiOutlineSearch className="text-xl cursor-pointer" />
					<AiOutlineGlobal className="text-xl cursor-pointer" />
					<a
						href="/login"
						className="hover:text-red-600"
					>
						Login
					</a>
					<button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
						Get Started
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="lg:hidden">
					<ul className="flex flex-col space-y-2 px-4 pb-4">
						{navData.map((item, index) => (
							<li
								key={index}
								className="relative group"
							>
								<div
									className="flex items-center cursor-pointer space-x-1"
									onClick={() => toggleDropdown(index)}
								>
									<span className="hover:text-red-600">
										{item.name}
									</span>
									{item.dropdown && <AiOutlineDown />}
								</div>
								{/* Dropdown menu */}
								{item.dropdown && activeDropdown === index && (
									<ul className="mt-2 bg-white shadow-lg rounded-lg p-2 z-10 group-hover:block">
										{item.dropdown.map((subItem, subIndex) => (
											<li key={subIndex}>
												<a
													href={subItem.link ?? "#"}
													className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
												>
													{subItem.name}
												</a>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
