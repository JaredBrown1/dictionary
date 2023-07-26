const Definition = ({ definition }) => {
	if (!definition || !definition.meanings || definition.meanings.length === 0) {
		return null;
	}

	const { partOfSpeech, definitions } = definition.meanings[0];

	if (definitions.length === 0) {
		return null;
	}

	if (definitions.length === 1) {
		return (
			<div className="flex justify-start flex-col max-w-2xl">
				<div className="flex pt-4">
					<h1 className="pr-4 text-xl font-bold">{partOfSpeech}</h1>
					<div className="h-1 w-full mt-3 bg-gray-200"></div>
				</div>
				<div className="pt-6">
					<h1 className="text-gray-400 text-xl">Meaning</h1>
					<div className="pt-6 pl-10">
						<p className="p-4">{definitions[0].definition}</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex justify-start flex-col max-w-2xl">
			<div className="flex pt-4">
				<h1 className="pr-4 text-xl font-bold">{partOfSpeech}</h1>
				<div className="h-1 w-full mt-3 bg-gray-200"></div>
			</div>
			<div className="pt-6">
				<h1 className="text-gray-400 text-xl">Meaning</h1>
				<div className="pt-6 pl-10">
					<ul className="list-disc marker:text-purple-600">
						{definitions.map((def) => (
							<li key={def.definition} className="p-4">
								{def.definition}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Definition;

// const Definition = ({ definition }) => {
// 	if (!definition || !definition.meanings || definition.meanings.length === 0) {
// 		return null;
// 	}

// 	return (
// 		<div className="flex justify-start flex-col">
// 			<div className="flex pt-4">
// 				<h1 className="pr-4 text-xl font-bold">
// 					{definition.meanings[0].partOfSpeech}
// 				</h1>
// 				<div className="h-1 w-full mt-3 bg-gray-200"></div>
// 			</div>
// 			<div className="pt-6">
// 				<h1 className="text-gray-400 text-xl">Meaning</h1>
// 				<div className="pt-6 pl-10">
// 					<ul className="list-disc marker:text-purple-600">
// 						<li className="p-4">
// 							{definition.meanings[0].definitions[0].definition}
// 						</li>
// 						<li className="p-4">
// 							{definition.meanings[0].definitions[1].definition}
// 						</li>
// 						{/* <li className="p-4">
// 							{definition.meanings[0].definitions[2].definition}
// 						</li> */}
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default Definition;
