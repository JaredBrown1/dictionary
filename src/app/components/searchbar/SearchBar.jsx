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

	return (
		<div className="flex">
			<div className="flex justify-center pt-10">
				<input
					className="h-16 w-[20rem] sm:w-[42rem] bg-gray-100 rounded-md placeholder-shown:pl-4 placeholder-shown:font-bold"
					type="text"
					value={input}
					onChange={handleInput}
				/>
			</div>
			<div>
				<span className="pt-14 ml-[-40px] absolute cursor-pointer">
					<Image
						src={SearchIcon}
						alt="Search Icon"
						width={25}
						height={25}
						onClick={handleClick}
					/>
				</span>
			</div>
		</div>
	);
};
export default SearchBar;
