import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { quizData, QuizList } from '../data';

import QuestionDescription from '../components/QuestionDescription';
import AnswerButton from '../components/AnswerButton';

const GameQuiz = () => {
	const [questionData, setQuestionData]: any = useState();
	const { quizName } = useParams();

	useEffect(() => {
		const actualQuiz = quizData.map(actualQuiz => {
			if (actualQuiz.quizName.replace(/\s/g, '') === quizName) {
				setQuestionData(actualQuiz);
			}
		});
	}, []);

	return (
		<>
			<Container></Container>
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
