import { Ingredient } from "./Ingredient";

interface IngredientListProps {
  ingredients: string[];
  addIngredient: (Ingredient: string) => void;
}

export const IngredientList = (props: IngredientListProps) => {
  const { ingredients, addIngredient } = props;

  return (
    <div className="flex flex-wrap justify-center scrollbar-hide h-fit w-full rounded-2xl">
      <div className="border h-[1.5px] border-solid border-beige-600 w-full"></div>
      {ingredients.map((name) => (
        <Ingredient name={name} addIngredient={addIngredient} />
      ))}
    </div>
  );
};
