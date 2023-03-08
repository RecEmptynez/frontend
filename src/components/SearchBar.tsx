import { useState } from 'react';
import Search from "./Search";
import {X} from "./X";

export default function SearchBar() {
  const [name, setName] = useState("");
  return (
    <div
      className={`[box-shadow:0px_0px_0px_1.5px_rgba(240,_239,_220,_1)_inset] [box-shadow-width:1.5px] py-2 inline-flex justify-between items-center text-left font-normal pl-[15px] pr-[15px] w-[100%] bg-[rgba(253,251,240,1)] rounded-[20px] text-[rgba(187,181,155,1)]`}
    >
      <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`focus:outline-none bg-[rgba(253,251,240,1)] w-[95%] font-sans`}
            placeholder="Sök ingrediens"
          />
      {name==""?<Search/>:<X onClick={() => setName("")}/>}
    </div>
  );
}