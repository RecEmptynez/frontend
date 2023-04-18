import { axiosClient } from "../apiClient";

export function SearchRecipes(ingredients: string[]) {
  const result = axiosClient
    .post("/search/recipes", {
      max_num: 100,
      ingredient_names: ingredients,
    })
    .then((response) => response.data);
  return result;
}
