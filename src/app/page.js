"use client";

import HomePage from "./home/page";

import { Roboto, Nunito, Oswald } from "next/font/google";
import { useFontsContext } from "../../context/fonts";

const font1 = Nunito({
	weight: "400",
	subsets: ["latin"],
});
const font2 = Oswald({
	weight: "200",
	subsets: ["latin"],
});
const font3 = Roboto({
	weight: "300",
	subsets: ["latin"],
});

export default function Home() {
	const { fonts } = useFontsContext();

	return (
		<main
			className={`flex min-h-screen flex-col items-center pt-4 lg:p-20 ${
				fonts === "Nunito"
					? font1.className
					: fonts === "Oswald"
					? font2.className
					: fonts === "Roboto"
					? font3.className
					: ""
			}`}
		>
			<HomePage />
		</main>
	);
}
