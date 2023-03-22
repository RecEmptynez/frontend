import { IonIcon } from '@ionic/react';
import { arrowBackOutline, chevronDown } from 'ionicons/icons';
import { Link, useLocation } from 'react-router-dom';
import { Filtering } from '../components/recipe_components/Filtering';
import { Sorting } from '../components/recipe_components/Sorting';
import { SearchRecipes } from "../api/SearchRecipes";
import { RecipeCard } from '../components/RecipeCard';
import { useState } from 'react';
export const RecipePage = () => {
	const location = useLocation();
	const data = location.state;
	let recipes: [string, number[]][];
	let test: any;
	const [recipeCards, setRecipeCards] = useState()
	SearchRecipes(data).then((response) => recipes = Object.entries(response["recipe_names"]))
	.then(() => test = recipes.map(([key, value]) => <RecipeCard title={key}
	   	imageURL={"https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246779/cf_259/flaskytterfilé_med_svampsas__brysselkal_och_potatis.jpg"}
		recipeURL="https://google.se" difficulty={1} rating={3.7}
		IngredientsHave={value[0]} IngredientsNeed={value[1]}/>
	
	
	)).then(() => setRecipeCards(test));
	return (
		<div className="mx-16">
			<Link to="/" className="inline-flex flex-row items-center my-10 text-beige-1400 font-semibold text-base hover:text-beige-1000 hover:duration-300 cursor-pointer">
				<IonIcon icon={arrowBackOutline} size="large" />
				Tillbaka
			</Link>

			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center space-x-24">
					<p className="font-bold text-3xl">Receptförslag</p>
					<p className="">
						Dina ingredienser gav <strong>11</strong> matchningar
					</p>
				</div>

				<div className="flex flex-row items-center space-x-24">
					<Sorting />
					<Filtering
						filters={['Vegetariskt', 'Veganskt', 'Glutenfritt', 'Laktosfritt']}
					/>
				</div>

			</div>
			<div className="flex flex-wrap w-full h-[1000px] absolute mt-[20%]">{recipeCards}</div>
		</div>
	);
};
