import React from 'react';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

function App() {
	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Header>Quiz App</Header>
				<Container></Container>
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
	height: 530px;
	width: 100%;
	border-radius: 28px 28px 0px 0px;
	background-color: #fff;
`;

export default App;
