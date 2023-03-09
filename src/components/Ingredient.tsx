import AddIcon from "./AddIcon";

export interface IngredientProp {
    name: string;
  }
  
  export const Ingredient = (props: IngredientProp) => {
    const { name } = props;
  
    return (

      <div className={` py-2 inline-flex justify-between items-center text-left w-[100%]`}>
        <p className="w-[90%]">{name}</p>
        <AddIcon/>
      </div>
    );
  };
  