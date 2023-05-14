import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import styled from 'styled-components';
import { AppContainer, GlobalStyle, Header } from './universalCss';

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

function App() {
	return (
		<AppContainer>
			<GlobalStyle />
			<Header>Quiz App</Header>
			<Container>
				<RouterProvider router={router}></RouterProvider>

				{/* This menue page  */}
				{/* <Description>
					<p>
						This is a Demo My Quiz App I created these apps by myself. Using design app Figma and
						uses technologies React and Typescrip
					</p>
				</Description>
				<ButtonStart>
					<a href='/menue'>Start</a>
				</ButtonStart> */}
			</Container>
		</AppContainer>
	);
}

const Container = styled.div`
	display: grid;

	justify-content: center;
	align-items: center;
	justify-items: center;
	height: 530px;
	width: 100%;
	border-radius: 28px 28px 0px 0px;
	background-color: #fff;
`;

const Description = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 8px;
	width: 280px;
	height: 185px;

	background-color: #4d4d4d;

	& p {
		font-weight: bold;
		font-size: 20px;
		color: #fff;
	}
`;

const ButtonStart = styled.button`
	all: unset;
	background-color: #00b0bb;
	width: 200px;
	height: 80px;
	text-align: center;
	border-radius: 50px;
	font-size: 40px;

	& a {
		text-decoration: none;
		color: #fff;
	}

	box-shadow: 0px 27px 34px rgba(0, 0, 0, 0.22), 0px 11.3236px 21.1551px rgba(0, 0, 0, 0.167346),
		0px 6.90419px 14.1512px rgba(0, 0, 0, 0.142985), 0px 4.66806px 8.8193px rgba(0, 0, 0, 0.120524),
		0px 2.68781px 4.23402px rgba(0, 0, 0, 0.0888636);
`;

export default App;
