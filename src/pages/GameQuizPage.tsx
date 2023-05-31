//TODO 1. Data to render a answer components
//TODO 2. Render ANswer COmponent
//TODO 3. Disabled Button after click and change button status

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
	const {
		actualSelectedQuiz,
		actualQuestion,
		actualAnswers,
		setActualizeAnswers,
		nextQuestionButtonSatus,
		setCheckAnswer,
		showClickedAnswer,
	} = useQuizData(quizData, quizName, false);

	const [answerBtnStatus, setAnswerBtnStatus] = useState<AnswerStateObj[] | null>(actualAnswers);

	const nextQuestionButtonClickHandler = () => {
		setCheckAnswer();
	};

	if (actualSelectedQuiz && actualQuestion && actualAnswers) {
		const AnswerOnClickHandler = (clickedAnswer: string) => {
			//!ANswer on click ---------------
			setActualizeAnswers(clickedAnswer);
		};

		const renderAnswerButtons = actualAnswers.map((answer: AnswerStateObj) => {
			return (
				<AnswerButton
					key={answer.answer}
					answer={answer.answer}
					state={answer.isClicked}
					isDisabled={answer.isDisabled}
					isCurrentAnswer={answer.isCorrectAnswer}
					showClickedAnswer={showClickedAnswer}
					onClickEvent={AnswerOnClickHandler}
				/>
			);
		});

		return (
			<>
				<Header>{quizName}</Header>
				<Container>
					<QuestionDescription
						description={actualQuestion.questionDescription}
						answerNumber={1 - 1}
						totalAnswer={actualSelectedQuiz[0].questions.length}
					/>
					{renderAnswerButtons}
					<NextQuestionButton
						onClickHandler={nextQuestionButtonClickHandler}
						state={nextQuestionButtonSatus}
					/>
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
