import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchRecipes } from "../api/SearchRecipes";
import { RecipeCard } from "../components/RecipeCard";
import { Sorting } from "../components/recipe_components/Sorting";

export const RecipePage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [recipes, setRecipes] = useState<[string, any][]>([]);
	const [recipeCards, setRecipeCards] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			const response = await SearchRecipes(location.state.ingredients);
			const recipes = Object.entries(response.recipe_names);
			setRecipes(recipes);
			renderCards(recipes);
		};
		fetchRecipes();
	}, [location.state.ingredients]);

	const sortRecipes = (sortBy: string) => {
		let sortedRecipes = [...recipes];
		if (sortBy === "Svårighetsgrad") {
			sortedRecipes.sort((a, b) => a[1].difficulty - b[1].difficulty);
		} else if (sortBy === "Betyg") {
			sortedRecipes.sort((a, b) => b[1].rating - a[1].rating);
		}
		renderCards(sortedRecipes);
	};

	const renderCards = (recipes: [string, any][]) => {
		setRecipeCards(
			recipes.map(([key, value]) => (
				<RecipeCard
					key={key}
					title={key}
					imageURL={value.picture_url}
					recipeURL={value.url}
					difficulty={value.difficulty}
					rating={value.rating}
					IngredientsHave={value.owned}
					IngredientsNeed={value.total}
				/>
			))
		);
	};

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
						Dina ingredienser gav <strong>{recipes.length}</strong> matchningar
					</p>
				</div>
				<div className="flex flex-row items-center space-x-24">
					<Sorting
						sortings={["Relevans", "Svårighetsgrad", "Betyg"]}
						initialSorting={"Relevans"}
						onChange={sortRecipes}
					/>
				</div>
			</div>
			<div className="flex flex-wrap">{recipeCards}</div>
		</div>
	);
};
