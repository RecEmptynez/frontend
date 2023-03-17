import { useRef, useState } from "react";
import { ReactComponent as BackgroundGeometry1 } from "../assets/svgs/BackgroundGeometry1.svg";
import { ReactComponent as BackgroundGeometry2 } from "../assets/svgs/BackgroundGeometry2.svg";
import { ActionButton } from "../components/ActionButton";
import { IngredientsList } from "../components/IngredientsList";
import { SearchBar } from "../components/SearchBar";

export const HomePage = () => {
  const [availableIngredients, setAvailableIngredients] = useState<string[]>([
    "Tomatsås",
    "Tomatpuré",
    "Krossade tomater",
    "karins lasange",
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
        <div className="w-full h-screen flex flex-col items-center justify-center text-beige-1200">
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
            <ActionButton
              label={"Hitta recept"}
              onClickAction={() => console.log("Show recipes")}
            />
          </div>
        </div>
        <BackgroundGeometry2 className="absolute right-0 bottom-0 z-0" />
        <BackgroundGeometry1 className="absolute right-0 bottom-0 z-0" />
      </div>
    </div>
  );
};
