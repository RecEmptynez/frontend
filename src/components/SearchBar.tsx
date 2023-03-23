import { useEffect, useState } from "react";
import SearchButton from "../assets/SearchButton";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import { SearchIngredientList } from "./SearchIngredientList";

interface SearchBarProps {
	availableIngredients: string[];
	addIngredient: (Ingredient: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
	const { availableIngredients, addIngredient } = props;
	const [name, setName] = useState("");
	const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

	function handleSearchChange(query: string) {
		setName(query);
		setFilteredSuggestions(getSuggestions(query, availableIngredients));
	}

	return (
		<div
			className={
				"rounded-[25px] bg-beige-200 text-beige-1200 border-beige-600 border-2 px-4 w-96"
			}
		>
			<div className={`py-3 flex flex-row justify-between items-center`}>
				<input
					type="text"
					value={name}
					onChange={(e) => handleSearchChange(e.target.value)}
					className={`placeholder-beige-1000 px-1 focus:outline-none bg-beige-200 w-full`}
					placeholder="Sök ingrediens"
				/>
				{name === "" ? (
					<SearchButton />
				) : (
					<IonIcon
						icon={close}
						className="cursor-pointer hover:text-beige-1000 hover:duration-300 hover:ease-out"
						size="small"
						onClick={() => handleSearchChange("")}
					/>
				)}
			</div>
			{name !== "" && availableIngredients.length !== 0 ? (
				<SearchIngredientList
					filteredSuggestions={filteredSuggestions}
					addIngredient={addIngredient}
				/>
			) : (
				<p></p>
			)}
		</div>
	);
};

function getSuggestions(inputText: string, suggestions: string[]) {
	const matches = suggestions.filter((suggestion: string) =>
		suggestion.toLowerCase().startsWith(inputText.toLowerCase())
	);
	const sortedMatches = matches.sort((a: string, b: string) => {
		const indexA = a.toLowerCase().indexOf(inputText.toLowerCase());
		const indexB = b.toLowerCase().indexOf(inputText.toLowerCase());
		return indexA - indexB;
	});
	return sortedMatches;
}
