import { ReactComponent as RemoveIngredientIcon } from "../assets/svgs/RemoveIngredientIcon.svg";

interface IngredientsListProp {
	ingredients: string[];
	removeIngredient: (ingredient: string) => void;
}

export const IngredientsList = (props: IngredientsListProp) => {
	const { ingredients, removeIngredient } = props;

	return (
		<div className="flex flex-col pl-7 pr-5 py-5 rounded-[25px] border border-beige-800 bg-beige-200 w-[385px] h-[370px]">
			<div className="overflow-y-auto overscroll-none space-y-2">
				{ingredients.map((ingredient, index) => (
					<div key={index} className="space-y-2">
						<div className="flex flex-row justify-between text-beige-1200 ">
							{ingredient}
							<div
								onClick={() => removeIngredient(ingredient)}
								className="group flex items-center hover:cursor-pointer "
							>
								<RemoveIngredientIcon className="group-hover:-translate-x- transition-all" />
								<p className="mr-4 text-primary-red ml-2 text-[0px] group-hover:text-base transition-all duration-300 select-none">
									Ta bort
								</p>
							</div>
						</div>
						{index < ingredients.length - 1 && (
							<div className="mx-1 mr-4 border h-0.5 border-none bg-beige-600 opacity-30 rounded-full" />
						)}
					</div>
				))}
			</div>
		</div>
	);
};
