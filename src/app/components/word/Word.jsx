import PlayButton from "./definition/PlayButton";
import NounMeaning from "./definition/NounMeaning";

const Word = ({ definition }) => {
	return (
		<div>
			<div className="flex justify-between pt-6 lg:pt-10">
				<div>
					<h1 className="font-bold text-6xl max-sm:text-4xl">
						{definition.word}
					</h1>
					<p className="text-purple-600 text-2xl pt-2 lg:pt-4">
						{definition.phonetic}
					</p>
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
