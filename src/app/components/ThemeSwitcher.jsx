"use client";

import { useState, useEffect } from "react";
import ReactSwitch from "react-switch";

import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const [checked, setChecked] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleChange = (val) => {
		setChecked(val);
		setTheme(val ? "dark" : "light");
	};

	useEffect(() => {
		setMounted(true);
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
			/>
		</div>
	);
};

export default ThemeSwitcher;
