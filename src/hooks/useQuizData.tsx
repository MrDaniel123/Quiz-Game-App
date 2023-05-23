import { useEffect, useState } from 'react';

import { quizData } from '../data';

import { QuizList } from '../data';

export const useQuizData = (
	actualSelectedQuiz: QuizList[],
	quizName: string | undefined,
	questionNumber: number
) => {
	const [questionData, setQuestionData]: any = useState();
	const [actualQuestion, setActualQUestion]: any = useState();
	const [actualAnswers, setActualAnswers]: any = useState();

	useEffect(() => {
		const actualQuizData = quizData.filter(actualSelectedQuiz => {
			if (actualSelectedQuiz.quizName.replace(/\s/g, '') === quizName) {
				return actualSelectedQuiz;
			}
		});

		const answersObject = actualQuizData[0].questions[questionNumber].answers.map(question => {
			return {
				answer: question,
				state: 'nonClicked',
				isCorrectAnswer:
					question === actualQuizData[0].questions[questionNumber].currentAnswer ? true : false,
			};
		});

		setActualAnswers(answersObject);
		setQuestionData(actualQuizData);
		setActualQUestion(actualQuizData[0].questions[questionNumber]); //!!Actual questions data
	}, []); //!This Use effect will be switch to otcher file

	return { questionData, actualAnswers, actualQuestion };
};
