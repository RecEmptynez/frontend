import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { RecipePage } from "../pages/RecipePage";
import "./App.css";
import { useState } from "react";

function App() {
  // Create a client
  const queryClient = new QueryClient();
  const [availableIngredients, setAvailableIngredients] = useState<string[]>(
    []
  );
  const [chosenIngredients, setChosenIngredients] = useState<string[]>([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <div className="font-poppins w-screen h-screen overflow-auto bg-beige-400">
            <Outlet />
          </div>
        }
        errorElement={<ErrorPage />}
      >
        <Route
          path="/"
          element={
            <HomePage
              availableIngredients={availableIngredients}
              setAvailableIngredients={setAvailableIngredients}
              chosenIngredients={chosenIngredients}
              setChosenIngredients={setChosenIngredients}
            />
          }
        />
        <Route
          path="/recipes"
          element={<RecipePage ingredients={chosenIngredients} />}
        />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
