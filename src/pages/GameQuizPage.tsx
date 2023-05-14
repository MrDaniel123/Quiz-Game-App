import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { quizData, QuizList, Question } from '../data';

import QuestionDescription from '../components/QuestionDescription';

const GameQuiz = () => {
	const [actualQuestion, setActualQuestion]: any = useState(0);
	const { quizName } = useParams();

	//!!Remove ANY type !!!
	const selectedQuizArray: any = quizData.map(quizData => {
		if (quizData.quizName.replace(/\s/g, '') === quizName) {
			return quizData;
		}
	});
	const [selectedQuiz]: QuizList[] = selectedQuizArray;

	const goToNextQuestionHandler = () => {
		setActualQuestion(actualQuestion + 1);
	};

	return (
		<>
			<Header>{selectedQuiz.quizName}</Header>
			<Container>
				<QuestionDescription
					description={selectedQuiz.questions[actualQuestion].questionDescription}
					answerNumber={actualQuestion + 1}
					totalAnswer={selectedQuiz.questions.length}></QuestionDescription>
			</Container>
		</>
	);
};

const Header = styled.p`
	color: #fff;
	font-size: 48px;
	margin-top: 20px;
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

export default GameQuiz;
