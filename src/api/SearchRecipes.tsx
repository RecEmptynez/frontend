import { axiosClient } from "../apiClient";

export function SearchRecipes(ingredients : string[]){
    const test = JSON.stringify({"ingredient_names": ingredients})
    axiosClient.post("/search/recipes", test).then(function (response){
        console.log(response.data)
    })
}