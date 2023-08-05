import Link from "next/link";

const Definition = ({ definition }) => {
	console.log(definition);

	if (!definition || !definition.meanings || definition.meanings.length === 0) {
		return null;
	}

	const { partOfSpeech, definitions } = definition.meanings[0];
	const partOfSpeechTwo = definition.meanings[1]?.partOfSpeech;
	const example = definition.meanings[1]?.definitions.example;
	console.log(example);

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
				<div className="h-[2px] w-full mt-3 bg-gray-200"></div>
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
					<h1 className="text-gray-400 text-xl">Synonyms</h1>
					<div className="flex text-purple-600 text-xl font-bold pl-4">
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
			{/*  */}
			{definition.meanings.length > 1 ? (
				<>
					<div className="flex pt-4">
						<h1 className="pr-4 text-xl font-bold">{partOfSpeechTwo}</h1>
						<div className="h-[2px] w-full mt-3 bg-gray-200"></div>
					</div>
					<div className="pt-6">
						<h1 className="text-gray-400 text-xl">Meaning</h1>
						<div className="pt-6 pl-10">
							<ul className="list-disc marker:text-purple-600">
								<li>
									<p>{definitions[0].definition}</p>
									{definitions[0].example ? (
										<p className="text-gray-400 pt-4">
											&quot;{definitions[0].example}&quot;
										</p>
									) : null}
								</li>
							</ul>
						</div>
						<div className="h-[2px] w-full mt-8 bg-gray-200"></div>
					</div>
				</>
			) : null}
			<div className="flex pt-4">
				<p className="text-gray-400 underline">Source</p>
				<Link
					className="pl-6
					underline"
					href={`https://en.wiktionary.org/wiki/${definition.word}`}
				>{`https://en.wiktionary.org/wiki/${definition.word}`}</Link>
			</div>
		</div>
	);
};

export default Definition;
