import { Ingredient } from "./Ingredient";

interface SearchIngredientListProps {
  ingredients: string[];
  addIngredient: (Ingredient: string) => void;
}

export const SearchIngredientList = (props: SearchIngredientListProps) => {
  const { ingredients, addIngredient } = props;

  return (
    <div className="flex flex-wrap justify-center scrollbar-hide h-auto w-full rounded-2xl overflow-y-auto">
      <div className="border h-[1.5px] border-solid border-beige-600 w-full"></div>
      {ingredients.map((name) => (
        <Ingredient name={name} addIngredient={addIngredient} />
      ))}
    </div>
  );
};
