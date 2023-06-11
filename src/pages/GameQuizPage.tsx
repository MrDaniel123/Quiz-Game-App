import React, {useEffect, useReducer, useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


import { QuizData, ActualQuiz, NextQuestionType } from '../types/mainType';
import { getQuizData } from '../utils/getQuestionData';
import { getActualQuestion } from '../utils/getActualQuestion';

import QuestionDescription from '../components/QuestionDescription';
import AnswerButton from '../components/AnswerButton';
import NextQuestionButton from '../components/NextQuestionButton';
import EndQuizPage from './EndQuizPage';

import {initialState, reducer} from "../utils/gameQuizReducer";


const GameQuiz = () => {
	const { actualSelectedQuizName } = useParams();
	
	//@TODO Change every useSTate to useReducer hooks

	const [actualSelectedQuiz, setActualSelectedQuiz] = useState<QuizData[] | null>(null);
	const [actualQuestion, setActualQuestion] = useState<ActualQuiz | null>(null);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [nextQuestionState, setNextQuestionState] = useState<string>('check-answer-no-clicked');
	const [showCurrentAnswer, setShowCurrentAnswer] = useState(false);
	const [endQuizPageShow, setEndOfQuizPageShow] = useState(false);
	
	const [state, setState] = useReducer(reducer , initialState)
	

	
	useEffect(() => {
		let actualQuiz = getQuizData(actualSelectedQuizName);

		setActualSelectedQuiz(actualQuiz);
		setActualQuestion(getActualQuestion(actualQuiz, questionNumber));
		
		setState({type: 'set-actual-quiz', payload: actualQuiz})
		setState({type: 'set-actual-question', payload: getActualQuestion(actualQuiz, questionNumber)})
	}, []);

	
		
	if (state.actualQuestion && state.actualQuiz && actualQuestion && actualSelectedQuiz) {
		
		
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
			
			setState({type: 'set-next-question-state', payload: 'check-answer-clicked'})
			setState({type: 'set-actual-question', payload: updatingActualQuestion})
		};

		const nextQuestionButtonOnCLickHandler = (state: string) => {
			if (state === 'check-answer-clicked') {
				const even = (element: any) => element.isChosen === true;
				const someAnswerIsClicked = actualQuestion.answers.some(even);
				if (someAnswerIsClicked) {
					

					setNextQuestionState('go-to-next-question');
					setShowCurrentAnswer(true);
					
					setState({type: 'set-next-question-state', payload: 'go-to-next-question'})
					setState({type: 'set-show-current-answer'})
				}
			} else if (state === 'go-to-next-question') {
				//!reset App
				if (questionNumber === actualQuestion.answers.length) {
					//TODO ENd of Actual QUiz

					setEndOfQuizPageShow(!endQuizPageShow);
					setState({type: 'set-show-end-quiz-page'})
				}
				setQuestionNumber(questionNumber + 1);
				setNextQuestionState('check-answer-no-clicked');
				setActualQuestion(getActualQuestion(actualSelectedQuiz, questionNumber));
				setShowCurrentAnswer(false);
				
				setState({type: 'set-question-number'})
				setState({type: 'set-next-question-state', payload: 'check-answer-no-clicked'})
				setState({type: 'set-actual-question', payload: getActualQuestion(actualSelectedQuiz, questionNumber)})
				setState({type: 'set-show-current-answer'})
				
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
							totalAnswer={state.actualQuiz[0].questions.length}
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
