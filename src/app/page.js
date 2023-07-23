import Image from "next/image";

import HomePage from "./home/page";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col justify-between pt-4 sm:p-24">
			<HomePage />
		</main>
	);
}
