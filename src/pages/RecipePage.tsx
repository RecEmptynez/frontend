import { IonIcon } from "@ionic/react";
import { arrowBackOutline} from "ionicons/icons";
import { useNavigate, useLocation} from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";
import { Filtering } from "../components/recipe_components/Filtering";
import { Sorting } from "../components/recipe_components/Sorting";

export const RecipePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.ingredients)
  const recipes = [
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
    <RecipeCard
      title={"Eric"}
      imageURL={
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"
      }
      recipeURL={
        "https://www.linkedin.com/in/eric-erlandsson-hollgren-486901244/"
      }
      difficulty={3}
      rating={5}
      IngredientsHave={0}
      IngredientsNeed={1}
    />,
  ];

  return (
    <div className="mx-16">
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
            Dina ingredienser gav <strong>{recipes.length}</strong> matchningar
          </p>
        </div>

        <div className="flex flex-row items-center space-x-24">
          <Sorting />
          <Filtering
            filters={["Vegetariskt", "Veganskt", "Glutenfritt", "Laktosfritt"]}
          />
        </div>
      </div>
      <div className="flex flex-wrap">{recipes}</div>
    </div>
  );
};
