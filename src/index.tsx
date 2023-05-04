import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './components/ErrorPage';
import SelectQuizPage from './components/SelectQuizPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/menue',
		element: <SelectQuizPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
