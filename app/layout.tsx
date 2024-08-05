import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./__components/static/Header";
import Footer from "./__components/static/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "9ja Kitchen - Your Number One Cleaning Service",
	description:
		"9ja Kitchen offers premium cleaning services for homes and businesses. Trust us for all your cleaning needs.",
	keywords:
		"9ja Kitchen, cleaning services, home cleaning, business cleaning, premium cleaning",
	authors: [{ name: "9ja Kitchen Team", url: "www.9ja Kitchen.org" }],
	openGraph: {
		type: "website",
		url: "https://9ja Kitchen.org",
		title: "9ja Kitchen - Your Number One Cleaning Service",
		description:
			"9ja Kitchen offers premium cleaning services for homes and businesses. Trust us for all your cleaning needs.",
		images: [
			{
				url: "/9ja KitchenLogo.png",
				width: 800,
				height: 600,
				alt: "9ja Kitchen Cleaning Service",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@9ja Kitchen",
		title: "9ja Kitchen - Your Number One Cleaning Service",
		description:
			"9ja Kitchen offers premium cleaning services for homes and businesses. Trust us for all your cleaning needs.",
		images: "/9ja KitchenLogo.png",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="canonical"
					href="https://9ja Kitchen.org"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</head>
			<body className={`${inter.className} w-full overflow-x-hidden`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
