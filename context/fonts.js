"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function FontsProvider({ children }) {
	const [fonts, setFonts] = useState("Roboto");

	return (
		<Context.Provider value={{ fonts, setFonts }}>{children}</Context.Provider>
	);
}

export function useFontsContext() {
	return useContext(Context);
}
