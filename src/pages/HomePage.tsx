import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackgroundGeometry1 } from "../assets/svgs/BackgroundGeometry1.svg";
import { ReactComponent as BackgroundGeometry2 } from "../assets/svgs/BackgroundGeometry2.svg";
import { ActionButton } from "../components/ActionButton";
import { IngredientsList } from "../components/IngredientsList";
import { SearchBar } from "../components/SearchBar";
import { fetchAllIngredients } from "../api/SearchIngredients";

interface HomePageProps {
  availableIngredients: string[];
  setAvailableIngredients: (ingredients: string[]) => void;
  chosenIngredients: string[];
  setChosenIngredients: (ingredients: string[]) => void;
}

export const HomePage = (props: HomePageProps) => {
  const {
    availableIngredients,
    setAvailableIngredients,
    chosenIngredients,
    setChosenIngredients,
  } = props;

  const bottomDivRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (availableIngredients.length === 0)
      fetchAllIngredients().then(setAvailableIngredients);
  }, [availableIngredients, setAvailableIngredients]);

  useEffect(() => {
    if (chosenIngredients.length > 0)
      bottomDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const addIngredient = (ingredient: string) => {
    setAvailableIngredients(
      availableIngredients.filter((i) => i !== ingredient)
    );
    setChosenIngredients([...chosenIngredients, ingredient]);
  };

  const removeIngredient = (ingredient: string) => {
    setChosenIngredients(chosenIngredients.filter((i) => i !== ingredient));
    setAvailableIngredients([...availableIngredients, ingredient]);
  };

  return (
    <div className="h-screen overflow-x-hidden overscroll-none">
      <div className="relative w-screen h-[200vh] bg-beige-200">
        <div className="relative w-full h-screen flex flex-col items-center justify-center text-beige-1200 z-10">
          <h1 className="font-bold w-[80%] text-center text-[28px] select-none">
            Vad ska jag laga för mat?
          </h1>
          <p className="sm:w-1/3 w-5/6 text-center my-8 select-none">
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
          <div className="w-full h-[80%] sm:h-full flex-col sm:flex-row flex pb-20 pt-4 sm:pt-32">
            <div className="w-full sm:w-1/2 h-1/2 flex justify-center">
              <div className="w-full sm:w-2/3 h-full flex flex-col items-center">
                <h1 className="font-bold text-[28px] mb-7 select-none">
                  Sök ingrediens
                </h1>
                <SearchBar
                  availableIngredients={availableIngredients}
                  addIngredient={addIngredient}
                />
              </div>
            </div>
            <div className="z-0 w-full sm:w-1/2 h-full flex flex-col items-center">
              <h1 className="font-bold text-center w-[90%] text-[28px] mb-7 select-none">
                Valda ingredienser
              </h1>
              <IngredientsList
                ingredients={chosenIngredients}
                removeIngredient={removeIngredient}
              />
            </div>
          </div>
          <div
            ref={bottomDivRef}
            className="relative sm:absolute flex justify-center bottom-12 sm:bottom-12 left-1/2 -translate-x-1/2"
          >
            <ActionButton
              label={"Hitta recept"}
              onClickAction={() => navigate("/recipes")}
            />
          </div>
        </div>
        <BackgroundGeometry2 className="absolute right-0 bottom-0 z-0" />
        <BackgroundGeometry1 className="absolute right-0 bottom-0 z-0" />
      </div>
    </div>
  );
};
