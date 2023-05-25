import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuizData } from '../hooks/useQuizData';

import { quizData } from '../data';
import { QuizData, Questions, Answers, AnswerStateObj } from '../types/mainType';

import QuestionDescription from '../components/QuestionDescription';
import AnswerButton from '../components/AnswerButton';
import NextQuestionButton from '../components/NextQuestionButton';

import { checkCurrentAnswer } from '../utils/checkCurrentAnswer';
import { changeButtonState } from '../types/changeButtonState';

const GameQuiz = () => {
	const { quizName } = useParams();
	const [questionNumber, setQUestionNumber] = useState<number>(0);
	const { actualSelectedQuiz, actualQuestion, actualAnswers } = useQuizData(
		quizData,
		quizName,
		questionNumber,
		false
	);
	const [answerBtnStatus, setAnswerBtnStatus] = useState<AnswerStateObj[] | null>(actualAnswers);

	const goToNextQuestionHandler = () => {
		setQUestionNumber(questionNumber + 1);
	};

	if (actualSelectedQuiz && actualQuestion && actualAnswers && answerBtnStatus) {
		const AnswerOnClickHandler = (clickedAnswer: any) => {
			// const isClickedCurrectAnswer = checkCurrentAnswer(actualAnswers, clickedAnswer);
			// const actualAnswerBtnStatus = changeButtonState(actualAnswers, 'clicked', clickedAnswer);
			// console.log(changeButtonState(actualAnswers, 'clicked', clickedAnswer));
			// changeButtonState(actualAnswers, 'clicked', clickedAnswer);
			const { actualAnswers } = useQuizData(quizData, quizName, questionNumber, true);

			if (actualAnswers) {
				setAnswerBtnStatus(changeButtonState(actualAnswers, 'clicked', clickedAnswer));
			}
		};

		const renderAnswerButtons = answerBtnStatus.map((answer: AnswerStateObj) => {
			return (
				<AnswerButton
					key={answer.answer}
					answer={answer.answer}
					state={answer.state}
					isDisabled={answer.isDisabled}
					onClickEvent={AnswerOnClickHandler}
				/>
			);
		});

		// const renderAnswerButtonsActual = answerBtnStatus.map((answer: AnswerStateObj) => {
		// 	return (
		// 		<AnswerButton
		// 			answer={answer.answer}
		// 			state={answer.state}
		// 			isDisabled={answer.isDisabled}
		// 			onClickEvent={AnswerOnClickHandler}
		// 		/>
		// 	);
		// });

		return (
			<>
				<Header>{quizName}</Header>
				<Container>
					<QuestionDescription
						description={actualQuestion.questionDescription}
						answerNumber={questionNumber + 1}
						totalAnswer={actualSelectedQuiz[0].questions.length}
					/>
					{renderAnswerButtons}
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
