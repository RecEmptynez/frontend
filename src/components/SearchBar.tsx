import { useState } from "react";
import SearchButton from "../assets/SearchButton";
import { RemoveButton } from "../assets/RemoveButton";
import { SearchIngredientList } from "./SearchIngredientList";

const FindIngredientsFromString = () => {
  // TODO: Return array with ingredients from given string
};

interface SearchBarProps {
  ingredients: string[];
  addIngredient: (Ingredient: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { ingredients, addIngredient } = props;
  const [name, setName] = useState("");

  return (
    <div
      className={
        "rounded-[20px] bg-beige-200 text-beige-1200 [box-shadow:0px_0px_0px_1.5px_#F0EFDC_inset] font-normal pl-[15px] pr-[15px] w-full"
      }
    >
      <div
        className={`py-2 inline-flex justify-between items-center text-left w-full`}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`placeholder-beige-1000 focus:outline-none bg-beige-200 w-[90%] font-poppins`}
          placeholder="Sök ingrediens"
        />
        {name === "" ? (
          <SearchButton />
        ) : (
          <RemoveButton onClick={() => setName("")} />
        )}
      </div>
      <div className="flex max-h-[50vh]">
        {name !== "" && ingredients.length !== 0 ? (
          <SearchIngredientList
            ingredients={ingredients}
            addIngredient={addIngredient}
          />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};
