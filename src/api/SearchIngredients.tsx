import { axiosClient } from "../apiClient";

export function fetchAllIngredients() {
	console.log("Calling the API");
	const result = axiosClient
		.post("/search/ingredient", {
			ingredient_string: "",
		})
		.then((response) => response.data);
	return result;
}
