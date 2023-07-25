import { useState } from "react";

import PlayButton from "./PlayButton";
import NounMeaning from "./nounmeaning/NounMeaning";

const Word = () => {
	return (
		<div>
			<div className="flex justify-between pt-10">
				<div>
					<h1 className="font-bold text-6xl max-sm:text-4xl">Keyboard</h1>
					<p className="text-purple-600 text-2xl pt-4">/ˈkiːbɔːd/</p>
				</div>
				<div>
					<PlayButton />
				</div>
			</div>
			<NounMeaning />
		</div>
	);
};
export default Word;
