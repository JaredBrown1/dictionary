import "./globals.css";
import Providers from "./providers";
import { FontsProvider } from "../../context/fonts";

import ThemeSwitcher from "./components/navbar/ThemeSwitcher";

export const metadata = {
	title: "Dictionary App",
	description: "A web application for searching words and their definitions.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<FontsProvider>{children}</FontsProvider>
				</Providers>
			</body>
		</html>
	);
}
