"use client";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import ReactSwitch from "react-switch";

const Buttons = () => {
	const [checked, setChecked] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Sans Serif");
	const dropdownRef = useRef(null);

	const handleChange = (val) => {
		setChecked(val);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (e) => {
		const option = e.target.getAttribute("value");
		setSelectedOption(option);
		setIsOpen(false);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return (
		<div className="flex">
			<div className="flex pr-10 pt-1 border-r-2 h-10" ref={dropdownRef}>
				<div className="relative">
					<button
						className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700  rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClick={toggleDropdown}
					>
						<span>{selectedOption}</span>
						<Image
							src="/images/icon-arrow-down.svg"
							width={20}
							height={20}
							alt="down arrow"
							className="pl-1"
						/>
					</button>

					{isOpen && (
						<div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
							<div
								className="py-1"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="options-menu"
							>
								<p
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
									role="menuitem"
									onClick={handleOptionClick}
									value="Sans Serif"
								>
									Sans Serif
								</p>
								<p
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
									role="menuitem"
									onClick={handleOptionClick}
									value="Serif"
								>
									Serif
								</p>
								<p
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
									role="menuitem"
									onClick={handleOptionClick}
									value="Mono"
								>
									Mono
								</p>
							</div>
						</div>
					)}
				</div>
				{/* my code below */}
				{/* <span>
					<Image
						src="/images/icon-arrow-down.svg"
						width={20}
						height={20}
						alt="down arrow"
						className="pt-2 pl-1"
					/>
				</span> */}
			</div>

			<div className="flex pl-6 pt-1 w-20">
				<ReactSwitch
					checked={checked}
					onChange={handleChange}
					checkedIcon={false}
					uncheckedIcon={false}
					onColor="#A445ED"
					className="pr-6"
				/>
				<Image
					src="/images/icon-moon.svg"
					alt="moon"
					width={30}
					height={30}
					className="mb-6 pr-2"
				/>
			</div>
		</div>
	);
};
export default Buttons;
