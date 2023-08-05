const NoResult = () => {
	return (
		<div className="flex flex-col text-center lg:w-[736px] pt-14">
			<h1 className="text-6xl">🙁</h1>
			<h1 className="font-bold text-xl pt-6">No Definitions Found</h1>
			<p className="pt-4 text-[#757575]">
				Sorry pal, we couldn&apos;t find definitions for the word you were
				looking for. You can try the search again at later time or head to the
				web instead.
			</p>
		</div>
	);
};
export default NoResult;
