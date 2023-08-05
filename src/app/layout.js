import "./globals.css";

import { FontsProvider } from "../../context/fonts";

export const metadata = {
	title: "Dictionary App",
	description: "A web application for searching words and their definitions.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<FontsProvider>
				<body>{children}</body>
			</FontsProvider>
		</html>
	);
}
