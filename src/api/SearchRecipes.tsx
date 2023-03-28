import { axiosClient } from "../apiClient";

export function SearchRecipes(ingredients : string[]){
    const result = axiosClient.post("/search/recipes", 
        {
            "max_num": 10,
            "ingredient_names": ingredients
        }).then((response) => response.data)
    return result
};
