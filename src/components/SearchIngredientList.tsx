import { Ingredient } from "./Ingredient";

interface SearchIngredientListProps {
	ingredients: string[];
	addIngredient: (Ingredient: string) => void;
}

export const SearchIngredientList = (props: SearchIngredientListProps) => {
	const { ingredients, addIngredient } = props;

	return (
		<div className="pb-3 justify-center max-h-80 overflow-y-auto overscroll-none select-none">
			{ingredients.map((name) => (
				<div>
					<div className="mx-1 border h-0.5 border-none bg-beige-600 opacity-30 rounded-full" />
					<Ingredient name={name} addIngredient={addIngredient} />
				</div>
			))}
		</div>
	);
};
