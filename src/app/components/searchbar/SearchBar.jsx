const SearchBar = () => {
	return (
		<div className="flex justify-center pt-10">
			<input
				className="h-16 w-96 md:w-2/3 bg-gray-100 rounded-md placeholder-shown:pl-4 placeholder-shown:font-bold"
				type="text"
				placeholder="Search"
			/>
		</div>
	);
};
export default SearchBar;
