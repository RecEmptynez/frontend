import { useRef, useState } from "react";
import { ReactComponent as BackgroundGeometry1 } from "../assets/svgs/BackgroundGeometry1.svg";
import { ReactComponent as BackgroundGeometry2 } from "../assets/svgs/BackgroundGeometry2.svg";
import { ActionButton } from "../components/ActionButton";
import { IngredientsList } from "../components/IngredientsList";
import { SearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [availableIngredients, setAvailableIngredients] = useState<string[]>([
    "tomatsås",
    "tomatpuré",
    "krossade tomater",
    "karins lasange",
    "emils lasange",
    "erics lasange",
    "philips lasange",
    "lucas lasange",
    "pavlos lasange1",
    "pavlos lasange2",
    "pavlos lasange3",
    "pavlos lasange4",
    "pavlos lasange5",
    "pavlos lasange6",
    "pavlos lasange7",
    "pavlos lasange8",
    "pavlos lasange9",
  ]);
  const [chosenIngredients, setChosenIngredients] = useState<string[]>([]);
  const bottomDivRef = useRef<HTMLDivElement>(null);

  const addIngredient = (ingredient: string) => {
    const newAvailableList = availableIngredients.filter(
      (availableIngredient) => availableIngredient !== ingredient
    );
    setAvailableIngredients(newAvailableList);

    const newChosenList = chosenIngredients;
    newChosenList.push(ingredient);
    setChosenIngredients(newChosenList);
    console.log(chosenIngredients)
  };
  const removeIngredient = (ingredient: string) => {
    const newChosenList = chosenIngredients.filter(
      (chosenIngredient) => chosenIngredient !== ingredient
    );
    setChosenIngredients(newChosenList);

    const newAvailableList = availableIngredients;
    newAvailableList.push(ingredient);
    setAvailableIngredients(newAvailableList);
  };

  return (
    <div className="h-screen overflow-x-hidden">
      <div className="relative w-screen h-[200vh] bg-beige-200">
        <div className="relative w-full h-screen flex flex-col items-center justify-center text-beige-1200 z-10">
          <h1 className="font-bold text-[28px]">Vad ska jag laga för mat?</h1>
          <p className="w-1/3 text-center my-8">
            Har du svårt att veta vad du ska laga idag? Då har du kommit rätt.
            Vi hjälper dig ta vara på dina livsmedel genom att föreslå recept
            utifrån ingredienser du har hemma.
          </p>
          <ActionButton
            label={"Kom igång"}
            onClickAction={() =>
              bottomDivRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
        <div className="relative w-full h-screen flex flex-col justify-center text-beige-1200 z-10">
          <div className="w-full h-full flex pt-32">
            <div className="w-1/2 h-1/2 flex justify-center">
              <div className="w-2/3 h-full flex flex-col items-center">
                <h1 className="font-bold text-[28px] mb-7">Sök ingrediens</h1>
                <SearchBar
                  ingredients={availableIngredients}
                  addIngredient={addIngredient}
                />
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center">
              <h1 className="font-bold text-[28px] mb-7">Valda ingredienser</h1>
              <IngredientsList
                ingredients={chosenIngredients}
                removeIngredient={removeIngredient}
              />
            </div>
          </div>
          <div
            ref={bottomDivRef}
            className="absolute flex justify-center bottom-12 left-1/2 -translate-x-1/2"
          >
            <Link to="/recipes" state={chosenIngredients} className="font-semibold 
         text-beige-400 
         bg-primary-orange-600 
         py-[15px] px-[50px]
         border-2
         border-beige-400
         rounded-full
         shadow-md
         active:shadow-sm
         hover:bg-primary-orange-400
         hover:ease-out 
         hover:duration-300
         active:bg-primary-orange-200
         active:ease-out 
         active:duration-300">Hitta recept</Link>
          </div>
        </div>
        <BackgroundGeometry2 className="absolute right-0 bottom-0 z-0" />
        <BackgroundGeometry1 className="absolute right-0 bottom-0 z-0" />
      </div>
    </div>
  );
};
