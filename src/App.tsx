import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './pages/MainPage';
import ErrorPage from './components/ErrorPage';
import SelectQuizPage from './pages/SelectQuizPage';

import { GlobalStyle } from './universalCss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/menue',
		element: <SelectQuizPage />,
	},
]);

function App() {
	return (
		<AppContainer>
			<GlobalStyle />
			<RouterProvider router={router}></RouterProvider>
		</AppContainer>
	);
}

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	height: 100vh;
	background-color: #5c6482;
`;

export default App;
