import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { quizData, QuizList } from '../data';

import QuestionDescription from '../components/QuestionDescription';
import AnswerButton from '../components/AnswerButton';

const GameQuiz = () => {
	const { quizName } = useParams();
	const [selectedQuiz, setSelectedQuiz]: any = useState();
	const [actualQuestion, setActualQuestion]: any = useState(0);

	// useEffect(() => {
	// 	const selectedQuizArray: any = quizData.map(quizData => {
	// 		if (quizData.quizName.replace(/\s/g, '') === quizName) {
	// 			return quizData;
	// 		}
	// 	});
	// 	const [selectedQuiz]: QuizList[] = selectedQuizArray;
	// 	setSelectedQuiz(selectedQuiz);
	// 	createActualQuestionData(actualQuestion);
	// }, []);

	const createActualQuestionData = (actualQuestion: number) => {
		console.log(selectedQuiz.questions[actualQuestion]);

		// const answerObj = selectedQuiz.questions[actualQuestion].answers.map((answer: any) => {
		// 	const obj = { answer: answer, state: 'nonClicked' };
		// 	return obj;
		// });
		// console.log(answerObj);
	};

	//!!Remove ANY type !!!

	const answerButtonClickedHandler = (buttonKey: string) => {
		console.log(buttonKey);
	};

	// const answerButtonRender = selectedQuiz.questions[actualQuestion].answers.map(answer => {
	// 	return (
	// 		<AnswerButton
	// 			state='nonClicked'
	// 			answer={answer}
	// 			key={answer}
	// 			onClickEvent={answerButtonClickedHandler}
	// 		/>
	// 	);
	// });

	const goToNextQuestionHandler = () => {
		setActualQuestion(actualQuestion + 1);
	};

	return (
		<>
			{/* <Header>{selectedQuiz.quizName}</Header> */}
			<Container>
				{/* <QuestionDescription
					description={selectedQuiz.questions[actualQuestion].questionDescription}
					answerNumber={actualQuestion + 1}
					totalAnswer={selectedQuiz.questions.length}
				/> */}
				{/* {answerButtonRender} */}
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
