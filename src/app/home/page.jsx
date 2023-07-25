"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../components/navbar/NavBar";
import SearchBar from "../components/searchbar/SearchBar";
import Word from "../components/word/Word";

const Home = () => {
	const [word, setWord] = useState("");
	const [definition, setDefinition] = useState("");

	useEffect(() => {
		const fetchDefinition = async () => {
			try {
				const response = await axios.get(
					`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
				);
				const data = response.data[0];
				console.log(data);
				setDefinition(data);
			} catch (error) {
				console.log(error);
			}
		};

		if (word) {
			fetchDefinition();
		}
	}, [word]);

	const handleSearch = (input) => {
		setWord(input);
	};

	return (
		<div className="flex flex-col justify-center max-w-5xl max-sm:max-w-xs">
			<NavBar />
			<SearchBar onSearch={handleSearch} />
			<Word word={word} definition={definition} />
		</div>
	);
};
export default Home;
