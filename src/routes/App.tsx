import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { MainPage } from '../pages/MainPage';
import './App.css';

function App() {
	// Create a client
	const queryClient = new QueryClient();

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				element={
					<div className="font-poppins w-screen h-screen">
						<Outlet />
					</div>
				}
				errorElement={<ErrorPage />}
			>
				<Route path="/" element={<RecipePage />} />
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
