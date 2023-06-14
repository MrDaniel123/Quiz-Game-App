import React, {useEffect, useReducer} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import {getQuizData} from '../utils/getQuestionData';
import {getActualQuestion} from '../utils/getActualQuestion';

import QuestionDescription from '../components/QuestionDescription';
import AnswerButton from '../components/AnswerButton';
import NextQuestionButton from '../components/NextQuestionButton';
import EndQuizPage from './EndQuizPage';

import {initialState, reducer} from "../utils/gameQuizReducer";


const GameQuiz = () => {
    const {actualSelectedQuizName} = useParams();
    const [state, setState] = useReducer(reducer, initialState)
    
    
    useEffect(() => {
        let actualSelectedQuiz = getQuizData(actualSelectedQuizName);
        
        setState({type: 'set-actual-quiz', payload: actualSelectedQuiz})
        setState({type: 'set-actual-question', payload: getActualQuestion(actualSelectedQuiz, state.questionNumber)})
    }, []);
    
    
    const answerButtonOnClickHandler = (clickedButton: string) => {
        
        if (state.actualQuestion) {
            const actualClickedAnswers = state.actualQuestion.answers.map(answer => {
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
                description: state.actualQuestion.description,
                answers: actualClickedAnswers,
            };
            
            
            setState({type: 'set-next-question-state', payload: 'check-answer-clicked'})
            setState({type: 'set-actual-question', payload: updatingActualQuestion})
        }
    };
    
    const nextQuestionButtonOnCLickHandler = (type: string) => {
        if (state.actualQuestion && state.actualQuiz) {
            
            if (type === 'check-answer-clicked') {
                const even = (element: any) => element.isChosen === true;
                const someAnswerIsClicked = state.actualQuestion.answers.some(even);
                if (someAnswerIsClicked) {
                    setState({type: 'set-next-question-state', payload: 'go-to-next-question'})
                    setState({type: 'set-show-current-answer'})
                }
            } else if (type === 'go-to-next-question') {
                //!reset App
                if (state.questionNumber === state.actualQuestion.answers.length) {
                    //TODO ENd of Actual QUiz
                    setState({type: 'set-show-end-quiz-page'})
                }
                setState({type: 'set-question-number'})
                setState({type: 'set-next-question-state', payload: 'check-answer-no-clicked'})
                setState({type: 'set-actual-question', payload: getActualQuestion(state.actualQuiz, state.questionNumber)})
                setState({type: 'set-show-current-answer'})
                
            }
        }
    };
    
    
    if (state.actualQuiz && state.actualQuestion && !state.showEndQuizPage) {
        
        const renderAnswerButtons = state.actualQuestion.answers.map(answer => {
            return (
                <AnswerButton
                    key={answer.answer}
                    answer={answer}
                    isDisabled={answer.isDisabled}
                    showCurrentAnswer={state.showCurrentAnswer}
                    ocClickHandler={answerButtonOnClickHandler}></AnswerButton>
            );
        });
        
        return (
            <>
                <Header>{actualSelectedQuizName}</Header>
                <Container>
                    <QuestionDescription
                        description={state.actualQuestion.description}
                        questionNumber={state.questionNumber}
                        totalAnswer={state.actualQuiz[0].questions.length}
                    />
                    {renderAnswerButtons}
                    <NextQuestionButton
                        state={state.questionButtonState}
                        onClickHandler={nextQuestionButtonOnCLickHandler}
                    />
                </Container>
            </>
        );
        
    } else return <EndQuizPage/>;
    
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
