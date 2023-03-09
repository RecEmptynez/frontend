import { useState } from 'react';
import Search from "./Search";
import {X} from "./X";
import jsonTest from "./SearchTest.json"
import { IngredientList } from './IngredientList';
import { Ingredient } from './Ingredient';

export default function SearchBar() {
  const [name, setName] = useState("");
  return (
    <div
      className={"rounded-[20px] bg-beige-200 text-beige-1200 [box-shadow:0px_0px_0px_1.5px_#F0EFDC_inset] font-normal pl-[15px] pr-[15px] w-[100%]"}
    >
      <div className={` py-2 inline-flex justify-between items-center text-left w-[100%]`}>
        <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`placeholder-beige-1000 focus:outline-none bg-beige-200 w-[90%] font-poppins`}
              placeholder="Sök ingrediens"
              />
        {name===""?<Search/>:<X onClick={() => setName("")}/>}
        
      </div>
        {name!==""&&jsonTest.ingredients.length!==0?
          <IngredientList ingredients={jsonTest.ingredients}/>:<p></p>}
        
    </div>
  );
}