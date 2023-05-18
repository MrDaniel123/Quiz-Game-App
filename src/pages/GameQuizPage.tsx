import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { quizData, QuizList } from '../data';

import QuestionDescription from '../components/QuestionDescription';
import AnswerButton from '../components/AnswerButton';
import NextQuestionButton from '../components/NextQuestionButton';

const GameQuiz = () => {
	const [questionData, setQuestionData]: any = useState();
	const [questionNumber, setQUestionNumber]: any = useState(0);
	const [actualQuestion, setActualQUestion]: any = useState();
	const [actualAnswers, setActualAnswers]: any = useState();

	const { quizName } = useParams();

	useEffect(() => {
		const actualQuizData = quizData.filter(actualQuiz => {
			if (actualQuiz.quizName.replace(/\s/g, '') === quizName) {
				return actualQuiz;
			}
		});

		const answersObject = actualQuizData[0].questions[questionNumber].answers.map(question => {
			return {
				question: question,
				state: 'nonClicked',
				isCorrectAnswer:
					question === actualQuizData[0].questions[questionNumber].currentAnswer ? true : false,
			};
		});

		setActualAnswers(answersObject);
		setQuestionData(actualQuizData);
		setActualQUestion(actualQuizData[0].questions[questionNumber]); //!!Actual questions data
	}, []);

	// const goToNextQuestionHandler = () => {
	// 	setQUestionNumber(questionNumber + 1);
	// };

	if (questionData) {
		return (
			<>
				<Header>{quizName}</Header>
				<Container>
					<QuestionDescription
						description={actualQuestion.questionDescription}
						answerNumber={questionNumber + 1}
						totalAnswer={questionData[0].questions.length}
					/>
					{/* <NextQuestionButton onClickHandler={goToNextQuestionHandler} /> */}
				</Container>
			</>
		);
	} else {
		return null;
	}
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
