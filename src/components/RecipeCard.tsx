import { useState } from "react";
import { Difficulty } from "./Difficulty";
import { RecipeRating } from "./RecipeRating";
import { Tooltip } from "./Tooltip";

interface RecipeCardProp {
  title: string;
  imageURL: string;
  recipeURL: string;
  difficulty: number;
  rating: number;
  IngredientsHave: number;
  IngredientsNeed: number;
}
// How to create a recipe card:
// <RecipeCard title={"TITLE"} imageURL={"IMAGE_URL"} recipeURL="RECIPE_URL" difficulty={INTEGER_BETWEEN_1_AND_3}
//  rating={FLOAT_BETWEEN_0_AND_5} IngredientsHave={NUM_OF_INGREDIENTS_HAVE} IngredientsNeed={NUM_OF_INGREDIENTS_NEED}/>

// Example of usage:
// <RecipeCard title={"Pastaa baby"}
/*  imageURL={"https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/
    flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"} recipeURL="https://google.se" difficulty={1} rating={3.7}
    IngredientsHave={5} IngredientsNeed={7}/>*/

    
export const RecipeCard = (props: RecipeCardProp) => {
  const [barTooltipVisible, setBarTooltipVisible] = useState("None");
  const [ratingTooltipVisible, setRatingTooltipVisible] = useState("None");
  const [ingredientsNumVisible, setIngredientsNumVisible] = useState("Block");

  const ingredientsPercentage =
    (206 * props.IngredientsHave) / props.IngredientsNeed;
  
  function toggleShowNumIngredients(){
    setBarTooltipVisible("Block")
    setIngredientsNumVisible("None")
  }
  function toggleHideNumIngredients(){
    setBarTooltipVisible("None")
    setIngredientsNumVisible("Block")
  }

  return (
    <div
      className="w-[260px] h-[260px] m-4 relative
                        scale-[100%] hover:scale-[105%] hover:z-[10] ease-in duration-150"
      onClick={() => window.open(props.recipeURL, "_blank")}
    >
      <div
        className=" absolute rounded-[15px] border-[6px] border-primary-green-200 w-full h-full"
        style={{
          boxShadow:
            "inset 0px 100px 75px -44px rgba(0,0,0,0.8), inset 0px -100px 75px -44px rgba(0,0,0,0.8)",
          cursor: "pointer",
          backgroundImage: "url(" + props.imageURL + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="z-[1] text-beige-200 mx-6 my-5 absolute font-semibold">
          {props.title}
        </h2>

        <div className="z-[1] w-full h-[20px] mt-[85%] ml-[8%] absolute flex">
          <div
            className="w-[206px] h-full border-[3px] border-beige-400 rounded-[15px] px-[4px] flex items-center"
            onMouseOver={toggleShowNumIngredients}
            onMouseLeave={toggleHideNumIngredients}>
            <div
              className="border-[4px] border-primary-orange-600 rounded-[10px]"
              style={{ width: ingredientsPercentage}}
            />
          </div>
          <p className="text-white text-[11px] absolute mt-[2px] ml-[93px]" style={{display: ingredientsNumVisible}}>{props.IngredientsHave}/{props.IngredientsNeed}</p>
          <Tooltip
            placement={"center"} width={100} height={40}
            parentWidth={206} parentHeight={25} visible={barTooltipVisible}
            text={"Du har " + props.IngredientsHave + " ingredienser av " + props.IngredientsNeed}
          />
        </div>
        <div className="w-[100px] h-[26px] absolute mt-[65%] ml-[50%] flex items-center justify-around"
             onMouseOver={() => setRatingTooltipVisible("Block")}
             onMouseLeave={() => setRatingTooltipVisible("None")}
        >
          <RecipeRating rating={props.rating}/>
          <Tooltip
              placement={"right"} width={100} height={25}
              parentWidth={0} parentHeight={48} visible={ratingTooltipVisible}
              text={"Exakt betyg: " + props.rating}
          />
        </div>
        <Difficulty difficulty={props.difficulty} />
      </div>
    </div>
  );
};
