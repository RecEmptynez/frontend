import { axiosClient } from "../apiClient";

export function fetchAllIngredients() {
	console.log("Fetching all ingredients");
	const result = axiosClient
		.post("/search/ingredient", {
			ingredient_string: "",
		})
		.then((response) => response.data);
	return result;
}
