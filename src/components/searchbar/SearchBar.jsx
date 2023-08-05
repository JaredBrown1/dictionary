import { useState } from "react";
import Image from "next/image";

import SearchIcon from "public/images/icon-search.svg";

const SearchBar = ({ onSearch }) => {
	const [input, setInput] = useState("");

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleClick = () => {
		onSearch(input);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			onSearch(input);
		}
	};

	return (
		<div className="flex">
			<div className="flex justify-center lg:pt-10">
				<input
					className="w-[327px] h-[48px] sm:w-[689px] md:w-[689px] lg:w-[736px] lg:h-[64px] bg-gray-100 pl-4 rounded-md placeholder-shown:pl-4 placeholder-shown:font-bold"
					type="text"
					value={input}
					onChange={handleInput}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<div>
				<span className="p-4 lg:pt-16 pl-2 ml-[-40px] absolute cursor-pointer">
					<Image
						src={SearchIcon}
						alt="Search Icon"
						width={15}
						height={15}
						onClick={handleClick}
					/>
				</span>
			</div>
		</div>
	);
};
export default SearchBar;
