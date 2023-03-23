import { add } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

export interface IngredientProp {
	name: string;
	addIngredient: (Ingredient: string) => void;
}

export const Ingredient = (props: IngredientProp) => {
	const { name, addIngredient } = props;

	return (
		<div
			className={`py-2 px-3 flex flex-row space-x-4 items-center text-left hover:bg-beige-600 rounded-md text-beige-1200 active:text-beige-1000 cursor-pointer hover:ease-out hover:duration-300 active:ease-out active:duration-300`}
			onClick={() => addIngredient(name)}
		>
			<IonIcon icon={add} size="small" />
			<p className="text-left select-none">{name}</p>
		</div>
	);
};
