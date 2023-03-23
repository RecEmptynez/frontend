import { useState, useRef } from "react";
import SearchButton from "../assets/SearchButton";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import { SearchIngredientList } from "./SearchIngredientList";
import memoize from "lodash.memoize";

interface SearchBarProps {
	availableIngredients: string[];
	addIngredient: (Ingredient: string) => void;
}

export const SearchBar = ({ availableIngredients, addIngredient }: SearchBarProps) => {
	const [name, setName] = useState("");
	const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSearchChange = (query: string) => {
		setName(query);
		setFilteredSuggestions(getSuggestions(query, availableIngredients));
	};

	return (
		<div
			className={"rounded-[25px] bg-beige-200 text-beige-1200 border-beige-600 border-2 px-4 w-96"}
		>
			<div className={`py-3 flex flex-row justify-between items-center`}>
				<input
					ref={inputRef}
					type="text"
					value={name}
					onChange={(e) => handleSearchChange(e.target.value)}
					onClick={(e) => (e.target as HTMLInputElement).select()}
					className="placeholder-beige-1000 px-1 focus:outline-none bg-beige-200 w-full"
					placeholder="Sök ingrediens"
				/>
				{name === "" ? (
					<SearchButton />
				) : (
					<IonIcon
						icon={close}
						className="cursor-pointer hover:text-beige-1000 hover:duration-300 hover:ease-out"
						size="small"
						onClick={() => {
							handleSearchChange("");
							inputRef.current?.focus();
						}}
					/>
				)}
			</div>
			{name !== "" && filteredSuggestions.length !== 0 && (
				<SearchIngredientList
					filteredSuggestions={filteredSuggestions}
					addIngredient={(ingredient) => {
						setFilteredSuggestions(filteredSuggestions.filter((i) => i !== ingredient));
						addIngredient(ingredient);
					}}
				/>
			)}
		</div>
	);
};

const getSuggestions = memoize((inputText: string, suggestions: string[]) =>
	suggestions.filter((suggestion) =>
		suggestion
			.replace(/[^a-zA-Z]/g, "")
			.toLowerCase()
			.includes(inputText.replace(/[^a-zA-Z]/g, "").toLowerCase())
	)
);
