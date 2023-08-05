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
			<div className="flex justify-start flex-col w-[736px]">
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

	let id = 0;

	return (
		<div className="flex justify-start flex-col w-[736px]">
			<div className="flex pt-4">
				<h1 className="pr-4 text-xl font-bold">{partOfSpeech}</h1>
				<div className="h-1 w-full mt-3 bg-gray-200"></div>
			</div>
			<div className="pt-6">
				<h1 className="text-gray-400 text-xl">Meaning</h1>
				<div className="pt-6 pl-10">
					<ul className="list-disc marker:text-purple-600">
						{definitions.slice(0, 3).map((def) => (
							<li key={def.definition} className="p-4">
								{def.definition}
							</li>
						))}
					</ul>
				</div>
				<div className="flex justifyå-between pt-10">
					<h1 className="text-gray-400 text-xl pr-4">Synonyms</h1>
					<div className="flex text-purple-600 text-xl font-bold">
						{definition.meanings
							? definition.meanings[0].synonyms.slice(0, 5).map((synonym) => (
									<h1 className="pl-2 pr-2" key={id++}>
										{synonym}
									</h1>
							  ))
							: null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Definition;
