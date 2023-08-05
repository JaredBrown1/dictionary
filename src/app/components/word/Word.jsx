import PlayButton from "./PlayButton";
import NounMeaning from "./nounmeaning/NounMeaning";

const Word = ({ definition }) => {
	return (
		<div>
			<div className="flex justify-between pt-10">
				<div>
					<h1 className="font-bold text-6xl max-sm:text-4xl">
						{definition.word}
					</h1>
					<p className="text-purple-600 text-2xl pt-4">{definition.phonetic}</p>
				</div>
				<div>
					<PlayButton
						audio={
							definition ? definition.phonetics[0].audio : definition.phonetics
						}
					/>
				</div>
			</div>
			<NounMeaning definition={definition} />
		</div>
	);
};
export default Word;
