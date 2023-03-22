import { useState } from "react";
import SearchButton from "../assets/SearchButton";
import { RemoveButton } from "../assets/RemoveButton";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import { SearchIngredientList } from "./SearchIngredientList";

interface SearchBarProps {
	ingredients: string[];
	addIngredient: (Ingredient: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
	const { ingredients, addIngredient } = props;
	const [name, setName] = useState("");

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
					onChange={(e) => setName(e.target.value)}
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
						onClick={() => setName("")}
					/>
				)}
			</div>
			{name !== "" && ingredients.length !== 0 ? (
				<SearchIngredientList
					ingredients={ingredients}
					addIngredient={addIngredient}
				/>
			) : (
				<p></p>
			)}
		</div>
	);
};
