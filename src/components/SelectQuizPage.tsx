import React from 'react';

import styled from 'styled-components';

import { QuizList, quizData } from '../data';
import { AppContainer, GlobalStyle, Header } from '../universalCss';

const QuizContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	width: 240px;
	height: 120px;
	border-radius: 14px;
	background-color: #66b700;
	color: #fff;
	font-weight: bold;

	box-shadow: 0px 62px 145px rgba(0, 0, 0, 0.36), 0px 35.6675px 43.7133px rgba(0, 0, 0, 0.276532),
		0px 20.6087px 18.1562px rgba(0, 0, 0, 0.167087), 0px 9.5815px 6.56676px rgba(0, 0, 0, 0.0615797);

	& h1 {
		font-size: 32px;
	}

	& p {
		font-size: 14;
	}
`;

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

const ButtonPlay = styled.button`
	all: unset;

	background-color: #5a48c3;
	border-radius: 58px;
	font-size: 16px;
	color: white;
	width: 80px;
	height: 28px;
	text-align: center;

	box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.37);
	filter: drop-shadow(0px -2px 80px rgba(0, 0, 0, 0.26))
		drop-shadow(0px -1.411px 37.2764px rgba(0, 0, 0, 0.201119))
		drop-shadow(0px -0.978767px 18.4264px rgba(0, 0, 0, 0.169646))
		drop-shadow(0px -0.62734px 8.45616px rgba(0, 0, 0, 0.136794))
		drop-shadow(0px -0.309258px 2.8906px rgba(0, 0, 0, 0.0907709));
`;

const quizRender = quizData.map(quizData => {
	return (
		<QuizContainer key={quizData.quizName}>
			<h1>{quizData.quizName}</h1>
			<p>{quizData.description}</p>
			<ButtonPlay>Play</ButtonPlay>
		</QuizContainer>
	);
});

const QuizInfo = () => {
	return (
		<AppContainer>
			<GlobalStyle />
			<Header>Select Quiz</Header>
			<Container>{quizRender}</Container>
		</AppContainer>
	);
};

export default QuizInfo;