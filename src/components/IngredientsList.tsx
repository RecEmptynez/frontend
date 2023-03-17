import { ReactComponent as RemoveIngredientIcon } from "../assets/svgs/RemoveIngredientIcon.svg";

interface IngredientsListProp {
  ingredients: string[];
  removeIngredient: (ingredient: string) => void;
}

export const IngredientsList = (props: IngredientsListProp) => {
  const { ingredients, removeIngredient } = props;

  // const removeIngredient = (ingredient: string) => {
  //   setIngredients(
  //     ingredients.filter(
  //       (removedIngredient) => removedIngredient !== ingredient
  //     )
  //   );
  // };

  return (
    <div className="flex flex-col overflow-y-auto rounded-[20px] border border-beige-1000 bg-beige-200 w-[385px] h-[386px]">
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <div className="px-[30px] py-[25px] flex justify-between text-beige-1200">
            {ingredient}
            <div
              onClick={() => removeIngredient}
              className="group flex items-center hover:cursor-pointer"
            >
              <RemoveIngredientIcon className="group-hover:-translate-x- transition-all" />
              <p className="text-primary-red ml-2 text-[0px] group-hover:text-base transition-all duration-300">
                Ta bort
              </p>
            </div>
          </div>
          {index < ingredients.length - 1 && (
            <div className="flex justify-center px-[30px]">
              <div className={`h-[1px] w-full bg-beige-600`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
