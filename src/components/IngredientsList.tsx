import { ReactComponent as RemoveIngredientIcon } from "../assets/svgs/RemoveIngredientIcon.svg";

interface IngredientsListProp {
  ingredients: string[];
}

export const IngredientsList = (props: IngredientsListProp) => {
  const { ingredients } = props;

  return (
    <div className="flex flex-col overflow-y-scroll rounded-[20px] border border-beige-1000 bg-beige-200 w-[385px] h-[386px]">
      {ingredients.map((ingredient) => (
        <div>
          <div className="px-[30px] py-[25px] flex justify-between">
            {ingredient}
            <div className="group flex items-center hover:cursor-pointer">
              <RemoveIngredientIcon
                onClick={() => console.log("Removed")}
                className="group-hover:-translate-x- transition-all"
              />
              <p className="text-primary-red ml-2 text-[0px] group-hover:text-base transition-all duration-300">
                Ta bort
              </p>
            </div>
          </div>
          <div className="flex justify-center px-[30px]">
            <div className={`h-[1px] w-full bg-beige-600`} />
          </div>
        </div>
      ))}
    </div>
  );
};
