import React from 'react';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

function App() {
	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Header>Quiz App</Header>
				<Container>
					<Description>
						<p>
							This is a Demo My Quiz App I created these apps by myself. Using design app Figma and
							uses technologies React and Typescrip
						</p>
					</Description>
					<ButtonStart>Play</ButtonStart>
				</Container>
			</AppContainer>
		</>
	);
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
	font-family: Arial, Helvetica, sans-serif;
  }
`;

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: space-between;
	flex-wrap: wrap;
	height: 100vh;
	width: 100%;
	background-color: #5c6482;
`;

const Header = styled.p`
	color: #fff;
	font-size: 48px;
	margin-top: 20px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-content: space-around;
	flex-wrap: wrap;

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
	color: #fff;
`;

export default App;
