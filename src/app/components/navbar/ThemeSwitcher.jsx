"use client";

import { useState, useEffect } from "react";
import ReactSwitch from "react-switch";

import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const [checked, setChecked] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleChange = (val) => {
		console.log(val);
		setChecked(val);
		setTheme(val ? "dark" : "light");
		localStorage.setItem("theme", val ? "dark" : "light");
	};

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) {
			setChecked(localTheme === "dark");
			setTheme(localTheme);
		} else {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const darkModeOn = mediaQuery.matches;
			setChecked(darkModeOn);
			setTheme(darkModeOn ? "dark" : "light");
			localStorage.setItem("theme", darkModeOn ? "dark" : "light");
		}
		setMounted(true);
		theme === "dark" ? setChecked(true) : setChecked(false);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div>
			<ReactSwitch
				checked={checked}
				onChange={handleChange}
				checkedIcon={false}
				uncheckedIcon={false}
				onColor="#A445ED"
				className="pr-2 lg:pr-6"
				width={60}
				handleDiameter={20}
			/>
		</div>
	);
};

export default ThemeSwitcher;
