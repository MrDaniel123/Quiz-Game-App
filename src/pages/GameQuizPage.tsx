import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { QuizData, ActualQuiz, NextQuestionType } from '../types/mainType';

import { getQuizData } from '../utils/getQuestionData';
import { getActualQuestion } from '../utils/getActualQuestion';

import QuestionDescription from '../components/QuestionDescription';
import AnswerButton from '../components/AnswerButton';
import NextQuestionButton from '../components/NextQuestionButton';
import EndQuizPage from './EndQuizPage';

const GameQuiz = () => {
	const { actualSelectedQuizName } = useParams();

	const [actualSelectedQuiz, setActualSelectedQuiz] = useState<QuizData[] | null>(null);
	const [actualQuestion, setActualQuestion] = useState<ActualQuiz | null>(null);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [nextQuestionState, setNextQuestionState] = useState<string>('check-answer-no-clicked');
	const [showCurrentAnswer, setShowCurrentAnswer] = useState(false);
	const [endQuizPageShow, setEndOfQuizPageShow] = useState(false);

	useEffect(() => {
		let actualQuiz = getQuizData(actualSelectedQuizName);

		setActualSelectedQuiz(actualQuiz);
		setActualQuestion(getActualQuestion(actualQuiz, questionNumber));
	}, []);

	if (actualQuestion && actualSelectedQuiz) {
		const answerButtonOnClickHandler = (clickedButton: string) => {
			const actualClickedAnswers = actualQuestion.answers.map(answer => {
				if (answer.answer === clickedButton) {
					return {
						answer: answer.answer,
						isCurrentAnswer: answer.isCurrentAnswer,
						isDisabled: true,
						isChosen: true,
					};
				} else {
					return {
						answer: answer.answer,
						isCurrentAnswer: answer.isCurrentAnswer,
						isDisabled: true,
						isChosen: answer.isChosen,
					};
				}
			});

			const updatingActualQuestion = {
				description: actualQuestion.description,
				answers: actualClickedAnswers,
			};

			setActualQuestion(updatingActualQuestion);
			setNextQuestionState('check-answer-clicked');
		};

		const nextQuestionButtonOnCLickHandler = (state: string) => {
			if (state === 'check-answer-clicked') {
				const even = (element: any) => element.isChosen === true;
				const someAnswerIsClicked = actualQuestion.answers.some(even);
				if (someAnswerIsClicked) {
					console.log('dzia');

					setNextQuestionState('go-to-next-question');
					setShowCurrentAnswer(true);
				}
			} else if (state === 'go-to-next-question') {
				//!reset App
				if (questionNumber === actualQuestion.answers.length) {
					//TODO ENd of Actual QUiz

					setEndOfQuizPageShow(!endQuizPageShow);
				}
				setQuestionNumber(questionNumber + 1);
				setNextQuestionState('check-answer-no-clicked');
				setActualQuestion(getActualQuestion(actualSelectedQuiz, questionNumber));
				setShowCurrentAnswer(false);
			}
		};

		const renderAnswerButtons = actualQuestion.answers.map(answer => {
			return (
				<AnswerButton
					key={answer.answer}
					answer={answer}
					isDisabled={answer.isDisabled}
					showCurrentAnswer={showCurrentAnswer}
					ocClickHandler={answerButtonOnClickHandler}></AnswerButton>
			);
		});
		if (!endQuizPageShow) {
			return (
				<>
					<Header>{actualSelectedQuizName}</Header>
					<Container>
						<QuestionDescription
							description={actualQuestion.description}
							questionNumber={questionNumber}
							totalAnswer={actualSelectedQuiz[0].questions.length}
						/>
						{renderAnswerButtons}
						<NextQuestionButton
							state={nextQuestionState}
							onClickHandler={nextQuestionButtonOnCLickHandler}
						/>
					</Container>
				</>
			);
		} else return <EndQuizPage />;
	} else return null;
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
