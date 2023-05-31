//TODO 1. Data to render a answer components
//TODO 2. Render ANswer COmponent
//TODO 3. Disabled Button after click and change button status

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { QuizData } from '../types/mainType';

import { getQuizData } from '../utils/getQuestionData';

const GameQuiz = () => {
	const { actualSelectedQuizName } = useParams();

	const [actualSelectedQuiz, setActualSelectedQuiz] = useState<QuizData[] | null>(null);

	useEffect(() => {
		setActualSelectedQuiz(getQuizData(actualSelectedQuizName));
	}, []);

	return (
		<>
			<Header>{actualSelectedQuizName}</Header>
			<Container>
				{/* <QuestionDescription
						description={actualQuestion.questionDescription}
						answerNumber={1 - 1}
						totalAnswer={actualSelectedQuiz[0].questions.length}
					/> */}
				{/* {renderAnswerButtons} */}
				{/* <NextQuestionButton
						onClickHandler={nextQuestionButtonClickHandler}
						state={nextQuestionButtonSatus}
					/> */}
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
