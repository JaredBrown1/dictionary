import "./globals.css";
import { Inter } from "next/font/google";

// import Home from "./home/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Dictionary App",
	description: "A web application for searching words and their definitions.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* <Home /> */}
				{children}
			</body>
		</html>
	);
}
