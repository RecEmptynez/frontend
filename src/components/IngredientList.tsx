import { Ingredient } from "./Ingredient";

export function IngredientList({ingredients}:{ingredients: string[]}){
  const Ingredients = ingredients.map((e) => (
    <Ingredient name={e} />
  ));
  return (
    <div className="flex flex-wrap justify-center scrollbar-hide h-full w-full rounded-2xl">
      <div style={{borderBottom: '1.5px solid #F0EFDC', width:'100%'}}></div>
      {Ingredients.map((item) => item)}
    </div>
  );
};
