import { IonIcon } from "@ionic/react";
import { arrowBackOutline} from "ionicons/icons";
import { useEffect, useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { SearchRecipes } from "../api/SearchRecipes";
import { RecipeCard } from "../components/RecipeCard";
import { Filtering } from "../components/recipe_components/Filtering";
import { Sorting } from "../components/recipe_components/Sorting";


export const RecipePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let recipes: [any, any][];
	let recipeCardsMap: any;
  const [matches, setMatches] = useState(0)
	const [recipeCards, setRecipeCards] = useState(<></>)
	useEffect(() => {
    SearchRecipes(location.state.ingredients).then((response) => recipes = Object.entries(response["recipe_names"]))
    .then(() => recipeCardsMap = recipes.map(([key, value]) => <RecipeCard title={key}
    imageURL={value['picture_url']}
		recipeURL={value['url']} difficulty={value['difficulty']} rating={value['rating']}
		IngredientsHave={value['owned']} IngredientsNeed={value['total']}/>
    )).then(() => setRecipeCards(recipeCardsMap)).then(() => setMatches(recipeCardsMap.length));
  }, []);

  return (
    <div className="mx-16 h-full">
      <div
        onClick={() => navigate("/")}
        className="inline-flex flex-row items-center my-10 text-beige-1400 font-semibold text-base hover:text-beige-1000 hover:duration-300 cursor-pointer"
      >
        <IonIcon icon={arrowBackOutline} size="large" />
        Tillbaka
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-24">
          <p className="font-bold text-3xl">Receptförslag</p>
          <p className="">
            Dina ingredienser gav <strong>{matches}</strong> matchningar
          </p>
        </div>

        <div className="flex flex-row items-center space-x-24">
          <Sorting />
          <Filtering
            filters={["Vegetariskt", "Veganskt", "Glutenfritt", "Laktosfritt"]}
          />
        </div>
      </div>
      <div className="flex flex-wrap">{[recipeCards]}</div>
    </div>
  );
};
