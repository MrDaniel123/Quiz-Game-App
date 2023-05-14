import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
	font-family: Arial, Helvetica, sans-serif;
  }
`;

export const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	height: 100vh;
	background-color: #5c6482;
`;

export const Header = styled.p`
	color: #fff;
	font-size: 48px;
	margin-top: 20px;
`;
