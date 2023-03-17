import { AddButton } from "../assets/AddButton";

export interface IngredientProp {
  name: string;
  addIngredient: (Ingredient: string) => void;
}

export const Ingredient = (props: IngredientProp) => {
  const { name, addIngredient } = props;

  return (
    <div
      className={`mr-0.5 py-2 inline-flex justify-between items-center text-left w-[100%]`}
    >
      <p className="w-[90%]">{name}</p>
      <AddButton onClick={() => addIngredient(name)} />
    </div>
  );
};
